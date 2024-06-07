import Link from "next/link";

const SuccessPage = () => {
  return (
    <section className="success bg-green-500 text-white h-screen flex justify-center items-center gap-4 flex-col">
      <h1 className="text-4xl md:text-9xl font-bold">Success</h1>
      <p className="text-2xl md:text-4xl font-bold">
        Your payment has been successful
      </p>
      <Link href="/home" className="bg-white text-green-500 px-4 py-2 rounded">
        Go Home
      </Link>
    </section>
  );
};

export default SuccessPage;
