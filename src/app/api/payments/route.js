import axios from "axios";
import crypto from "crypto";

async function generateSignature(
  merchantPublicKey,
  orderAmount,
  orderCurrency,
  orderMerchantReferenceId,
  apiPassword,
  timestamp
) {
  let data = `${merchantPublicKey}${orderAmount}${orderCurrency}${orderMerchantReferenceId}${timestamp}`;
  let enc = new TextEncoder();
  let key = await crypto.subtle.importKey(
    "raw",
    enc.encode(apiPassword),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  let signature = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  let base64Hash = btoa(String.fromCharCode(...new Uint8Array(signature)));
  return base64Hash;
}

export async function POST(req) {
  try {
    const { GEIDA_USER: username, GEIDA_PASS: password } = process.env;

    const barear = Buffer.from(`${username}:${password}`).toString("base64");
    const { name, email, amount } = await req.json();
    const amounts = parseFloat(amount).toFixed(2);
    const currency = "EGP";
    let timestamp = new Date().toLocaleString();
    const signature = await generateSignature(
      username,
      amounts,
      currency,
      name,
      password,
      timestamp
    );

    const payResponse = await axios.post(
      "https://api.merchant.geidea.net/payment-intent/api/v2/direct/session",
      {
        amount: amounts,
        appearance: { styles: { hppProfile: "simple" } },
        timestamp: timestamp,
        signature: signature,
        callbackUrl: "https://enggam-digital-cards.vercel.app/home",
        currency: currency,
        customer: {
          email: email,
        },
        language: "en",
        merchantReferenceId: name,
        order: { integrationType: "HPP" },
        paymentOperation: "Pay",
      },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          authorization: "Basic " + barear,
        },
      }
    );

    return new Response(JSON.stringify(payResponse.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.response ? error.response.status : 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: "POST",
    },
  });
}
