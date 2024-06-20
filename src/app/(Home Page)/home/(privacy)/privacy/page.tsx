import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeaderHome from "@/components/shared/HeaderHome";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import localFont from "next/font/local";

// Tanker font
const tanker = localFont({
  src: [
    {
      path: "../../../../../../public/fonts/Tanker/Tanker-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

const PrivacyPage = async () => {
  const { isAuthenticated } = getKindeServerSession();
  return (await isAuthenticated()) ? (
    <>
      <HeaderHome />
      <section className="privacy protected py-6">
        <div className="container">
          <h1
            className={`${tanker.className} text-3xl md:text-8xl text-center`}
          >
            Privacy & Policy
          </h1>
          <p>
            The Services are provided by Enggam 1. Definitions In these Terms of
            Service, the following words and expression shall have the following
            meanings unless the context otherwise requires: Account: means your
            account duly registered with EgyCards to facilitate you using the
            Services available on the Portals (or any of them); Buyer: means a
            person who purchases items on the Portals; Gift Card: means an
            electronic gift card purchased on any of the Portals which contains
            a stored value available for redemption on the Portals; Items: means
            the goods and services listed by you for sale on the Portals and
            “Item” shall mean any one of them; Parties: means collectively,
            Enggam and you and “Party” shall mean any one of them; Portals:
            means collectively, the web portals presently known as Enggam.com
            and such other web portals of Enggam administered and managed by
            Enggam; Services: means the services provided by Enggam on the
            Portals, including, without limitation, reselling and retailing
            online games and related merchandises, games publishing, online
            marketplace for sale of Items, subject to the conditions in these
            Terms of Service; Purchased Item: means your item listed on the
            Portals purchased by the Buyer; Store Credit: means the electronic
            credit value available in the Account at any time; Terms of Service
            : means these Terms of Service governing the use of the Services by
            you as may be amended at any time and from time to time as and when
            Enggam shall in its absolute discretion deems necessary and shall
            include: (i) any rules, procedures, Terms of Service for products,
            services or facilities, as determined by Enggam from time to time;
            and (ii) any documents, directives, correspondence and agreements
            referred to in these Terms of Service and forming a part hereof,
            together with any amendments made at any time or from time to time
            to any of the foregoing; 2. Licence to Use In consideration of you
            agreeing to these Terms of Service and your continuing observance
            and compliance of these Terms of Service, Enggam hereby grants you a
            non-exclusive, non-transferable license to access the Portals and
            use the Services upon the terms and subject to the conditions stated
            herein. 3. Representations and Warranties Each time when you access
            the Portals (or any of them), you irrevocably and unconditionally
            represents and warrants that: You are above 18 years old. Should you
            be less than 18 years old, your parents are aware and have consented
            to you accessing the Portals and using the Services; Your personal
            information and the documentation submitted in this respect,
            including, without limitation, your full name, telephone number,
            correspondence address and email address, are true and accurate. You
            shall forthwith notify us in writing of any changes in your personal
            information; You shall keep the password to the Account secure and
            confidential. You shall not at any time and under any circumstances
            reveal or disclose the your password to the Account to any
            unauthorized party and shall take all steps to prevent the
            disclosure of the password to the Account to any unauthorized party;
            Save as otherwise permitted by Enggam, you shall not, directly or
            indirectly, use the Services for any commercial purposes; You shall
            not to use the Portals or the Services (or any of them) to conduct
            any fraudulent, immoral or illegal activities or such activities
            that may infringe the intellectual property rights of third parties;
            You shall not use any intellectual property belonging to EgyCards or
            any publishers listed on the Portals, including, without limitation,
            trademarks or trade names, whether registered or not, without the
            prior written consent of Enggam You shall not be disruptive, be
            offensive or be a nuisance in any manner whatsoever to other users
            of the Portals or the employees of Enggam. You shall not directly or
            indirectly recruit and/or poach any customers obtained from the
            usage of the portals. 4. Use of Services You shall procure, at your
            own costs and expenses, the requisite equipment and software to
            connect and access the Portals and the ensuing use of the Services.
            You shall bear all charges and fees imposed by third parties in
            relation to and in connection with you connecting your equipment to
            the Portals (or any of them) It is your primary responsibility to
            ensure that you are acquainted with the guidelines and procedures
            for the use of the Services that Enggam may issue from time to time.
            Enggam shall not be liable for any errors, losses or damages caused
            by your use of the Services. It is your responsibility to secure the
            information of your Account. Any notification or confirmation
            received by Enggam from your Account shall be deemed to have been
            issued by you notwithstanding that such notification or confirmation
            may have been issued by a third party, whether authorized or
            otherwise, and you shall be bound by such notification or
            confirmation. Enggam shall not be liable for acting on the
            notification or confirmation sent through your Account. Enggam shall
            not be obliged to investigate the authenticity or authority of
            persons effecting the notification or confirmation or verify the
            completeness of such notification or confirmation. Such notification
            or confirmation shall be deemed irrevocable and binding on you upon
            receipt by Enggam notwithstanding any error, fraud, forgery and lack
            of clarity or misunderstanding in respect of the terms of such
            notification or confirmation. You shall immediately notify Enggam
            upon receipt of incomplete, garbled or inaccurate data or
            information from Enggam. You shall also immediately notify Enggam
            upon receipt of any data or information which is not intended for
            you and you shall delete such data or information from your Account.
            You acknowledge and agree that Enggam may at its absolute discretion
            refuse or permit you to use the Services without giving any reason
            or notice thereof. Unless otherwise permitted by Enggam in writing,
            you shall not upload, post, email transmit or otherwise make
            available any unauthorized or illegal activities on the Portals or
            directly to other users of the Portals. You shall not upload, post,
            email, transmit or in any other manner whatsoever make available any
            material that contains software viruses or any other computer code,
            files or programs designed to interrupt, destroy or limit the
            functionality of any computer software or hardware or
            telecommunication equipment, including, without limitation, the
            Portals. You irrevocably and unconditionally allow and permit Enggam
            to send to your Account updates on services and events offered or
            provided by Enggam. 5. Payment You may pay for the Services in such
            currency that is available on the Portals in accordance with the
            prevailing exchange rate determined by Enggam at its absolute
            discretion. You shall be solely liable to make payments and
            applicable taxes, if any, in relation to and in connection with the
            usage of the Services (or any of them) through the Account. Enggam
            shall have the absolute discretion to cancel any payment request
            made by you without assigning any reasons whatsoever. Enggam shall
            be entitled to vary or modify or remove the modes of payment
            available on the Portals (or any of them) at any time without prior
            notice to you. You are responsible for any fees, taxes or other
            costs associated with the purchase and delivery of your items
            resulting from charges imposed by your relationship with payment
            services providers or the duties and taxes imposed by your local
            customs officials or other regulatory body. For customer service
            inquiries or disputes, You may contact us by email at
            enggam729@gmail.com Where possible, we will work with you and/or any
            user selling on our website, to resolve any disputes arising from
            your purchase. Enggam uses a third-party payment interchange PayU
            and Enggam to manage all our payment processors. Your use of PayU
            and Enggam by PayU and Enggam Terms and Conditions. 6. Availability
            of Services The Services are usually available on a daily basis
            unless otherwise specified herein. There may be certain times that
            the Services may not be available due to maintenance or malfunction
            of the Portals or such other reasons beyond the control of Enggam.
            Enggam makes no warranty that the Services will be available at the
            times stated herein. Unless otherwise provided in these Terms of
            Service, Enggam shall be entitled at its absolute discretion,
            without notice to you, to change the procedures, the mode of
            operation of the Services at any time and from time to time for any
            reason whatsoever. Notwithstanding any provisions to the contrary in
            these Terms of Service, Enggam shall be entitled to: immediately
            terminate, discontinue, withdraw or suspend your use of the Services
            without notice; impose conditions or restrictions on your use of the
            Service without notice. 7. Store Credit You can maintain Store
            Credit in the Account before you use the Services. Store Credit can
            be topped-up in the Account through the payment methods listed on
            the Portals. Enggam shall, as and when it deems fit, amend, modify,
            remove or add any Store Credit or Store Credit account without prior
            notice to you. 8. Limitation of Liability You agree and confirm that
            you shall not hold Enggam, its employees, agents or licensees,
            liable for any special, incidental or consequential damages arising
            out of and in relation to the Services or these Terms of Service. 9.
            Intellectual Property Rights All copyrights, trade marks, service
            marks belong to the corresponding owners/publishers and Enggam is
            not related or associated to any of the said owners/publishers in
            any respect. All services offered on the Portals are offered by
            Enggam, not the owners/publishers. 10. Reliability of Portals You
            are aware that all transactions conducted on the Portals are through
            telecommunication and data network. You are fully aware that your
            receipt of the notification from Enggam and vice versa may be
            delayed or prevented by factors affecting the relevant service
            providers and other relevant parties. You accept that Enggam cannot
            guarantee the prompt delivery of such notification or confirmation.
            You acknowledge and confirm that you shall take all steps and
            measures to check and verify the transaction history of your
            Account. 11. Account You shall immediately notify Enggam if you are
            aware or believe your Account has been hacked or compromised. You
            shall be liable for all transactions conducted through your Account
            at any time prior to the receipt by Enggam of your notification. 12.
            Disclosure of Information Enggam shall be entitled and you
            irrevocably and unconditionally consents and authorizes Enggam to
            the extent permitted by law, to disclose or release any information
            pertaining to you or your transactions through the Portals to such
            extent that Enggam may at its absolute discretion deem fit to: such
            persons as Enggam may be required to disclose under the applicable
            law; such other persons or entity pursuant to any governmental
            directive or order of the court; any other party whomsoever as
            Enggam deems fit. Enggam will not disclose your personal information
            to any other party without prior notification to you. 13. Applicable
            Laws and Regulations Your use of the Services shall be governed by
            the jurisdiction where the contracting entity of Enggam is
            domiciled. Where required, you shall obtain the approval or consent
            or permission of the relevant regulatory authorities prior to using
            the Services. For cross-border transactions, you shall not violate
            the laws existing in the countries involved in the transaction. 14.
            Suspension, Termination, Cancellation of Services The Services (or
            any part thereof) may be cancelled by Enggam at any time without
            prior notice to you. After cancellation, the Services (or any part
            thereof) may be reinstated in such manner and on such Terms of
            Service as Enggam may at its absolute discretion determine. Enggam
            reserves the right at all times to suspend or block access to and
            use of the Services (or any part thereof) for any reason whatsoever
            and for any length of time and upon any conditions that EgyCards may
            at its absolute discretion determine. Upon cancellation or
            termination of the Services (or any part thereof): all rights
            granted to you hereunder shall immediately terminate and shall
            revert to Enggam; you shall immediately pay to Enggam all
            outstanding fees and charges due and owing to Enggam; Enggam may at
            its absolute discretion, decide not to act on any request received
            by Enggam after the effective date of termination; Enggam may at its
            absolute discretion, decide not to act on any confirmation or
            request received by Enggam between the date of notice is given to
            you and the effective date of termination (if there is a lapse of
            time between the two dates); you hereby irrevocably and
            unconditionally authorises Enggam to deduct all money due and owing
            by you to MTCGAME (if any) from the moneys that are payable by
            Enggam to you in respect of the delivered Purchased Items. 15.
            Notices All notices and documents required to be given by you under
            these Terms of Service to Enggam shall be sent to EgyCards by
            registered post to the Enggam address listed on the Portals. Any
            notice or document sent by you to Enggam shall be deemed served when
            such notice or document is received by Enggam. All notices and
            documents required to be given by Enggam under these Terms of
            Service to you shall be sent to you by any one of the following
            methods: electronic mail to your last known electronic mail address
            according to Enggam records; posting the notice or communication on
            the Portals; notices placed with or in any of Enggam written
            communications to you; notices placed through any media; any manner
            of notification as Enggam may at its absolute discretion determine.
            Any notice or document or communication given by Enggam to you shall
            be deemed to be served and received by you on the day following the
            sending of such notice or document. 16. Waiver And Severance Any
            failure by Enggam to enforce at any time or for any period any one
            or more of these Terms of Service shall not be a waiver of them or
            of the right at any time subsequently to enforce these Terms of
            Service. In the event that any provisions of these Terms of Service
            is declared by any judicial or other competent authority to be void,
            voidable, illegal or otherwise unenforceable Enggam shall amend that
            provision in such reasonable manner as would achieve the intention
            of Enggam or at the discretion of Enggam it may be severed from
            these Terms of Service and the remaining provisions remain in full
            force and effect. 17. Variation These Terms of Service may be
            modified, added to, deleted or varied by Enggam by way of posting on
            the Portals or in any such other manner as Enggam may in its
            absolute discretion determine. You agree that continued use of the
            Services shall constitute your acceptance of these Terms of Service
            (as modified and varied from time to time). 18. Assignment You may
            not assign its rights under these Terms of Service without the prior
            written consent of MTCGAME. 19. Binding Effect These Terms of
            Service shall be binding on your heirs, personal and legal
            representatives, estate, successors-in-title and permitted assigns
            (where applicable) you. Privacy Policy Enggam knows that you care
            about your privacy and the use of your personal information. This
            notice describes our Privacy Policy. This Privacy Policy applies to
            information we collect about you from any source and in any way –
            through our Websites, applications or other Internet based
            interactions, in our retail stores. We Gather the Following Personal
            Information About Guests: Information That You Give Us: We receive
            and store any information you enter on our Websites or that you give
            us in any other way. You can choose not to provide certain
            information, but this will limit your ability to purchase products
            offered on the Websites, or to take advantage of some features or
            promotions. When you place an order with us online, in a store or in
            any other way, your contact information is used to communicate
            related information, such as order and shipment confirmation,
            release date changes and requests for more information to facilitate
            processing your order. You may opt-out of these communications by
            canceling your order. We obtain information about you when you
            search, buy, participate in a contest or questionnaire, , or
            otherwise contact us or post information on our Websites. For
            example, you provide information when you search for a product;
            place an order through a Website or provide information to update or
            create your account with us (you may have more than one account if
            you have used more than one email address when shopping with us);
            communicate with us by phone, email, or otherwise; complete a
            questionnaire or a contest entry form; create any wish or gift list;
            participate in any forums or discussion areas or product reviews; or
            create any alerts or other email notification services we may offer
            now or in the future. The information collected typically includes
            your name, address, and phone numbers; credit card information;
            people to whom purchases have been shipped, including addresses and
            phone number; content of reviews you may provide; emails to us; and
            any other personal information that you provide to us or post on the
            Websites. The information we receive or can determine from your
            interaction with our Websites includes your Internet (IP) address;
            login and password information; email address; web browser type and
            version; preferred language; geographic location using IP address or
            the GPS, wireless, or Bluetooth technology on your device; operating
            system and computer platform; purchase history, which we may
            aggregate with similar information from other guests or keep in
            non-aggregated form; the full Uniform Resource Locator (URL)
            clickstream to, through, and from our Websites, including date and
            time; one or more unique identifiers; products you viewed or
            searched for; areas of our Websites you visited; and the phone
            number you used to call our toll-free number. We also may log the
            length of time of your visit and the number of times you visit and
            purchase from us. We assign you one or more unique identifiers to
            help keep track of your future visits. You contact us at
            Support@ enggam729@gmail.comif you wish to request change or removal
            of the information collected. Mobile location services: Certain
            stores may also collect and use location information from mobile
            devices. Location information allows us to learn more about how
            guests use our stores to enhance the guest experience and, in
            certain circumstances, deliver push notifications and other content
            to your mobile device when you are near, enter and move through our
            stores, and send or provide you with offers and promotional
            information that we believe may be of interest to you. You may
            prevent or limit collection of location information by turning off
            your mobile device or antennas, such as WiFi or Bluetooth, and
            opting out of location services on your device. Additional Terms and
            Conditions; EULAs When you use Enggam Pay services provided by
            Enggam.COM Limited (hereinafter referred to as the “Enggam Pay
            services provider”) to make a purchase on our website,
            responsibility over your purchase will first be transferred to
            Egycards.COM Limited before it is delivered to you. Enggam.COM is
            becoming Merchant of Record over your purchase. Enggam Pay services
            provider assumes primary responsibility, with our assistance, for
            payment and payment related customer support. The terms between
            Egycards Pay services provider and customers who utilize services of
            Enggam Pay are governed by separate agreements which can be found
            under Enggam.com and-conditions and are not subject to the Terms on
            this website. In order to proceed the payment transaction, you
            temporary entrusts the Enggam.COM with subject of the transaction,
            and Enggam.COM takes responsibility for the product and for the
            transaction processing. With respect to customers making purchases
            through Enggam Pay services provider checkout, (i) the Privacy
            Policy of Enggam Pay services provider shall apply to all payments
            and should be reviewed before making any purchase, and (ii) the
            Enggam Pay services provider Refund Policy shall apply to all
            payments unless notice is expressly provided by the relevant
            supplier to buyers in advance. In addition the purchase of certain
            products may also require shoppers to agree to one or more End-User
            License Agreements (or “EULAs”) that may include additional terms
            set by the product supplier rather than by Us or Enggam Pay services
            provider. You will be bound by any EULA that you agree to. You are
            responsible for any fees, taxes or other costs associated with the
            purchase and delivery of your items resulting from charges imposed
            by your relationship with payment services providers or the duties
            and taxes imposed by your local customs officials or other
            regulatory body. For customer service inquiries or disputes, You may
            contact us by email at Supprt@ enggam.com Questions related to
            payments made through Enggam Pay services provider payment should be
            addressed to support@ enggam729@gmail.com Where possible, we will
            work with You and/or any user selling on our website, to resolve any
            disputes arising from your purchase.
          </p>
        </div>
      </section>
      <Footer />
    </>
  ) : (
    <>
      <Header />
      <section className="privacy non-protected py-6">
        <div className="container">
          <h1
            className={`${tanker.className} text-3xl md:text-8xl text-center`}
          >
            Privacy & Policy
          </h1>
          <p>
            The Services are provided by Enggam 1. Definitions In these Terms of
            Service, the following words and expression shall have the following
            meanings unless the context otherwise requires: Account: means your
            account duly registered with EgyCards to facilitate you using the
            Services available on the Portals (or any of them); Buyer: means a
            person who purchases items on the Portals; Gift Card: means an
            electronic gift card purchased on any of the Portals which contains
            a stored value available for redemption on the Portals; Items: means
            the goods and services listed by you for sale on the Portals and
            “Item” shall mean any one of them; Parties: means collectively,
            Enggam and you and “Party” shall mean any one of them; Portals:
            means collectively, the web portals presently known as Enggam.com
            and such other web portals of Enggam administered and managed by
            Enggam; Services: means the services provided by Enggam on the
            Portals, including, without limitation, reselling and retailing
            online games and related merchandises, games publishing, online
            marketplace for sale of Items, subject to the conditions in these
            Terms of Service; Purchased Item: means your item listed on the
            Portals purchased by the Buyer; Store Credit: means the electronic
            credit value available in the Account at any time; Terms of Service
            : means these Terms of Service governing the use of the Services by
            you as may be amended at any time and from time to time as and when
            Enggam shall in its absolute discretion deems necessary and shall
            include: (i) any rules, procedures, Terms of Service for products,
            services or facilities, as determined by Enggam from time to time;
            and (ii) any documents, directives, correspondence and agreements
            referred to in these Terms of Service and forming a part hereof,
            together with any amendments made at any time or from time to time
            to any of the foregoing; 2. Licence to Use In consideration of you
            agreeing to these Terms of Service and your continuing observance
            and compliance of these Terms of Service, Enggam hereby grants you a
            non-exclusive, non-transferable license to access the Portals and
            use the Services upon the terms and subject to the conditions stated
            herein. 3. Representations and Warranties Each time when you access
            the Portals (or any of them), you irrevocably and unconditionally
            represents and warrants that: You are above 18 years old. Should you
            be less than 18 years old, your parents are aware and have consented
            to you accessing the Portals and using the Services; Your personal
            information and the documentation submitted in this respect,
            including, without limitation, your full name, telephone number,
            correspondence address and email address, are true and accurate. You
            shall forthwith notify us in writing of any changes in your personal
            information; You shall keep the password to the Account secure and
            confidential. You shall not at any time and under any circumstances
            reveal or disclose the your password to the Account to any
            unauthorized party and shall take all steps to prevent the
            disclosure of the password to the Account to any unauthorized party;
            Save as otherwise permitted by Enggam, you shall not, directly or
            indirectly, use the Services for any commercial purposes; You shall
            not to use the Portals or the Services (or any of them) to conduct
            any fraudulent, immoral or illegal activities or such activities
            that may infringe the intellectual property rights of third parties;
            You shall not use any intellectual property belonging to EgyCards or
            any publishers listed on the Portals, including, without limitation,
            trademarks or trade names, whether registered or not, without the
            prior written consent of Enggam You shall not be disruptive, be
            offensive or be a nuisance in any manner whatsoever to other users
            of the Portals or the employees of Enggam. You shall not directly or
            indirectly recruit and/or poach any customers obtained from the
            usage of the portals. 4. Use of Services You shall procure, at your
            own costs and expenses, the requisite equipment and software to
            connect and access the Portals and the ensuing use of the Services.
            You shall bear all charges and fees imposed by third parties in
            relation to and in connection with you connecting your equipment to
            the Portals (or any of them) It is your primary responsibility to
            ensure that you are acquainted with the guidelines and procedures
            for the use of the Services that Enggam may issue from time to time.
            Enggam shall not be liable for any errors, losses or damages caused
            by your use of the Services. It is your responsibility to secure the
            information of your Account. Any notification or confirmation
            received by Enggam from your Account shall be deemed to have been
            issued by you notwithstanding that such notification or confirmation
            may have been issued by a third party, whether authorized or
            otherwise, and you shall be bound by such notification or
            confirmation. Enggam shall not be liable for acting on the
            notification or confirmation sent through your Account. Enggam shall
            not be obliged to investigate the authenticity or authority of
            persons effecting the notification or confirmation or verify the
            completeness of such notification or confirmation. Such notification
            or confirmation shall be deemed irrevocable and binding on you upon
            receipt by Enggam notwithstanding any error, fraud, forgery and lack
            of clarity or misunderstanding in respect of the terms of such
            notification or confirmation. You shall immediately notify Enggam
            upon receipt of incomplete, garbled or inaccurate data or
            information from Enggam. You shall also immediately notify Enggam
            upon receipt of any data or information which is not intended for
            you and you shall delete such data or information from your Account.
            You acknowledge and agree that Enggam may at its absolute discretion
            refuse or permit you to use the Services without giving any reason
            or notice thereof. Unless otherwise permitted by Enggam in writing,
            you shall not upload, post, email transmit or otherwise make
            available any unauthorized or illegal activities on the Portals or
            directly to other users of the Portals. You shall not upload, post,
            email, transmit or in any other manner whatsoever make available any
            material that contains software viruses or any other computer code,
            files or programs designed to interrupt, destroy or limit the
            functionality of any computer software or hardware or
            telecommunication equipment, including, without limitation, the
            Portals. You irrevocably and unconditionally allow and permit Enggam
            to send to your Account updates on services and events offered or
            provided by Enggam. 5. Payment You may pay for the Services in such
            currency that is available on the Portals in accordance with the
            prevailing exchange rate determined by Enggam at its absolute
            discretion. You shall be solely liable to make payments and
            applicable taxes, if any, in relation to and in connection with the
            usage of the Services (or any of them) through the Account. Enggam
            shall have the absolute discretion to cancel any payment request
            made by you without assigning any reasons whatsoever. Enggam shall
            be entitled to vary or modify or remove the modes of payment
            available on the Portals (or any of them) at any time without prior
            notice to you. You are responsible for any fees, taxes or other
            costs associated with the purchase and delivery of your items
            resulting from charges imposed by your relationship with payment
            services providers or the duties and taxes imposed by your local
            customs officials or other regulatory body. For customer service
            inquiries or disputes, You may contact us by email at
            enggam729@gmail.com Where possible, we will work with you and/or any
            user selling on our website, to resolve any disputes arising from
            your purchase. Enggam uses a third-party payment interchange PayU
            and Enggam to manage all our payment processors. Your use of PayU
            and Enggam by PayU and Enggam Terms and Conditions. 6. Availability
            of Services The Services are usually available on a daily basis
            unless otherwise specified herein. There may be certain times that
            the Services may not be available due to maintenance or malfunction
            of the Portals or such other reasons beyond the control of Enggam.
            Enggam makes no warranty that the Services will be available at the
            times stated herein. Unless otherwise provided in these Terms of
            Service, Enggam shall be entitled at its absolute discretion,
            without notice to you, to change the procedures, the mode of
            operation of the Services at any time and from time to time for any
            reason whatsoever. Notwithstanding any provisions to the contrary in
            these Terms of Service, Enggam shall be entitled to: immediately
            terminate, discontinue, withdraw or suspend your use of the Services
            without notice; impose conditions or restrictions on your use of the
            Service without notice. 7. Store Credit You can maintain Store
            Credit in the Account before you use the Services. Store Credit can
            be topped-up in the Account through the payment methods listed on
            the Portals. Enggam shall, as and when it deems fit, amend, modify,
            remove or add any Store Credit or Store Credit account without prior
            notice to you. 8. Limitation of Liability You agree and confirm that
            you shall not hold Enggam, its employees, agents or licensees,
            liable for any special, incidental or consequential damages arising
            out of and in relation to the Services or these Terms of Service. 9.
            Intellectual Property Rights All copyrights, trade marks, service
            marks belong to the corresponding owners/publishers and Enggam is
            not related or associated to any of the said owners/publishers in
            any respect. All services offered on the Portals are offered by
            Enggam, not the owners/publishers. 10. Reliability of Portals You
            are aware that all transactions conducted on the Portals are through
            telecommunication and data network. You are fully aware that your
            receipt of the notification from Enggam and vice versa may be
            delayed or prevented by factors affecting the relevant service
            providers and other relevant parties. You accept that Enggam cannot
            guarantee the prompt delivery of such notification or confirmation.
            You acknowledge and confirm that you shall take all steps and
            measures to check and verify the transaction history of your
            Account. 11. Account You shall immediately notify Enggam if you are
            aware or believe your Account has been hacked or compromised. You
            shall be liable for all transactions conducted through your Account
            at any time prior to the receipt by Enggam of your notification. 12.
            Disclosure of Information Enggam shall be entitled and you
            irrevocably and unconditionally consents and authorizes Enggam to
            the extent permitted by law, to disclose or release any information
            pertaining to you or your transactions through the Portals to such
            extent that Enggam may at its absolute discretion deem fit to: such
            persons as Enggam may be required to disclose under the applicable
            law; such other persons or entity pursuant to any governmental
            directive or order of the court; any other party whomsoever as
            Enggam deems fit. Enggam will not disclose your personal information
            to any other party without prior notification to you. 13. Applicable
            Laws and Regulations Your use of the Services shall be governed by
            the jurisdiction where the contracting entity of Enggam is
            domiciled. Where required, you shall obtain the approval or consent
            or permission of the relevant regulatory authorities prior to using
            the Services. For cross-border transactions, you shall not violate
            the laws existing in the countries involved in the transaction. 14.
            Suspension, Termination, Cancellation of Services The Services (or
            any part thereof) may be cancelled by Enggam at any time without
            prior notice to you. After cancellation, the Services (or any part
            thereof) may be reinstated in such manner and on such Terms of
            Service as Enggam may at its absolute discretion determine. Enggam
            reserves the right at all times to suspend or block access to and
            use of the Services (or any part thereof) for any reason whatsoever
            and for any length of time and upon any conditions that EgyCards may
            at its absolute discretion determine. Upon cancellation or
            termination of the Services (or any part thereof): all rights
            granted to you hereunder shall immediately terminate and shall
            revert to Enggam; you shall immediately pay to Enggam all
            outstanding fees and charges due and owing to Enggam; Enggam may at
            its absolute discretion, decide not to act on any request received
            by Enggam after the effective date of termination; Enggam may at its
            absolute discretion, decide not to act on any confirmation or
            request received by Enggam between the date of notice is given to
            you and the effective date of termination (if there is a lapse of
            time between the two dates); you hereby irrevocably and
            unconditionally authorises Enggam to deduct all money due and owing
            by you to MTCGAME (if any) from the moneys that are payable by
            Enggam to you in respect of the delivered Purchased Items. 15.
            Notices All notices and documents required to be given by you under
            these Terms of Service to Enggam shall be sent to EgyCards by
            registered post to the Enggam address listed on the Portals. Any
            notice or document sent by you to Enggam shall be deemed served when
            such notice or document is received by Enggam. All notices and
            documents required to be given by Enggam under these Terms of
            Service to you shall be sent to you by any one of the following
            methods: electronic mail to your last known electronic mail address
            according to Enggam records; posting the notice or communication on
            the Portals; notices placed with or in any of Enggam written
            communications to you; notices placed through any media; any manner
            of notification as Enggam may at its absolute discretion determine.
            Any notice or document or communication given by Enggam to you shall
            be deemed to be served and received by you on the day following the
            sending of such notice or document. 16. Waiver And Severance Any
            failure by Enggam to enforce at any time or for any period any one
            or more of these Terms of Service shall not be a waiver of them or
            of the right at any time subsequently to enforce these Terms of
            Service. In the event that any provisions of these Terms of Service
            is declared by any judicial or other competent authority to be void,
            voidable, illegal or otherwise unenforceable Enggam shall amend that
            provision in such reasonable manner as would achieve the intention
            of Enggam or at the discretion of Enggam it may be severed from
            these Terms of Service and the remaining provisions remain in full
            force and effect. 17. Variation These Terms of Service may be
            modified, added to, deleted or varied by Enggam by way of posting on
            the Portals or in any such other manner as Enggam may in its
            absolute discretion determine. You agree that continued use of the
            Services shall constitute your acceptance of these Terms of Service
            (as modified and varied from time to time). 18. Assignment You may
            not assign its rights under these Terms of Service without the prior
            written consent of MTCGAME. 19. Binding Effect These Terms of
            Service shall be binding on your heirs, personal and legal
            representatives, estate, successors-in-title and permitted assigns
            (where applicable) you. Privacy Policy Enggam knows that you care
            about your privacy and the use of your personal information. This
            notice describes our Privacy Policy. This Privacy Policy applies to
            information we collect about you from any source and in any way –
            through our Websites, applications or other Internet based
            interactions, in our retail stores. We Gather the Following Personal
            Information About Guests: Information That You Give Us: We receive
            and store any information you enter on our Websites or that you give
            us in any other way. You can choose not to provide certain
            information, but this will limit your ability to purchase products
            offered on the Websites, or to take advantage of some features or
            promotions. When you place an order with us online, in a store or in
            any other way, your contact information is used to communicate
            related information, such as order and shipment confirmation,
            release date changes and requests for more information to facilitate
            processing your order. You may opt-out of these communications by
            canceling your order. We obtain information about you when you
            search, buy, participate in a contest or questionnaire, , or
            otherwise contact us or post information on our Websites. For
            example, you provide information when you search for a product;
            place an order through a Website or provide information to update or
            create your account with us (you may have more than one account if
            you have used more than one email address when shopping with us);
            communicate with us by phone, email, or otherwise; complete a
            questionnaire or a contest entry form; create any wish or gift list;
            participate in any forums or discussion areas or product reviews; or
            create any alerts or other email notification services we may offer
            now or in the future. The information collected typically includes
            your name, address, and phone numbers; credit card information;
            people to whom purchases have been shipped, including addresses and
            phone number; content of reviews you may provide; emails to us; and
            any other personal information that you provide to us or post on the
            Websites. The information we receive or can determine from your
            interaction with our Websites includes your Internet (IP) address;
            login and password information; email address; web browser type and
            version; preferred language; geographic location using IP address or
            the GPS, wireless, or Bluetooth technology on your device; operating
            system and computer platform; purchase history, which we may
            aggregate with similar information from other guests or keep in
            non-aggregated form; the full Uniform Resource Locator (URL)
            clickstream to, through, and from our Websites, including date and
            time; one or more unique identifiers; products you viewed or
            searched for; areas of our Websites you visited; and the phone
            number you used to call our toll-free number. We also may log the
            length of time of your visit and the number of times you visit and
            purchase from us. We assign you one or more unique identifiers to
            help keep track of your future visits. You contact us at
            Support@ enggam729@gmail.comif you wish to request change or removal
            of the information collected. Mobile location services: Certain
            stores may also collect and use location information from mobile
            devices. Location information allows us to learn more about how
            guests use our stores to enhance the guest experience and, in
            certain circumstances, deliver push notifications and other content
            to your mobile device when you are near, enter and move through our
            stores, and send or provide you with offers and promotional
            information that we believe may be of interest to you. You may
            prevent or limit collection of location information by turning off
            your mobile device or antennas, such as WiFi or Bluetooth, and
            opting out of location services on your device. Additional Terms and
            Conditions; EULAs When you use Enggam Pay services provided by
            Enggam.COM Limited (hereinafter referred to as the “Enggam Pay
            services provider”) to make a purchase on our website,
            responsibility over your purchase will first be transferred to
            Egycards.COM Limited before it is delivered to you. Enggam.COM is
            becoming Merchant of Record over your purchase. Enggam Pay services
            provider assumes primary responsibility, with our assistance, for
            payment and payment related customer support. The terms between
            Egycards Pay services provider and customers who utilize services of
            Enggam Pay are governed by separate agreements which can be found
            under Enggam.com and-conditions and are not subject to the Terms on
            this website. In order to proceed the payment transaction, you
            temporary entrusts the Enggam.COM with subject of the transaction,
            and Enggam.COM takes responsibility for the product and for the
            transaction processing. With respect to customers making purchases
            through Enggam Pay services provider checkout, (i) the Privacy
            Policy of Enggam Pay services provider shall apply to all payments
            and should be reviewed before making any purchase, and (ii) the
            Enggam Pay services provider Refund Policy shall apply to all
            payments unless notice is expressly provided by the relevant
            supplier to buyers in advance. In addition the purchase of certain
            products may also require shoppers to agree to one or more End-User
            License Agreements (or “EULAs”) that may include additional terms
            set by the product supplier rather than by Us or Enggam Pay services
            provider. You will be bound by any EULA that you agree to. You are
            responsible for any fees, taxes or other costs associated with the
            purchase and delivery of your items resulting from charges imposed
            by your relationship with payment services providers or the duties
            and taxes imposed by your local customs officials or other
            regulatory body. For customer service inquiries or disputes, You may
            contact us by email at Supprt@ enggam.com Questions related to
            payments made through Enggam Pay services provider payment should be
            addressed to support@ enggam729@gmail.com Where possible, we will
            work with You and/or any user selling on our website, to resolve any
            disputes arising from your purchase.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPage;
