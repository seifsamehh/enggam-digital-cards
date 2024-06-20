import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative py-20 flex flex-col items-center bg-cyan-700 overflow-hidden md:py-40">
      <div className="relative z-[1] container m-auto px-6 md:px-12">
        <div className="m-auto md:w-10/12">
          <div className="flex flex-wrap items-start justify-between md:flex-nowrap gap-4">
            <Image
              src="/assets/maskable_icon.png"
              alt="logo"
              width={200}
              height={200}
              className="rounded-sm"
            />
            <div className="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
              <ul className="list-disc list-inside space-y-8">
                <li>
                  <Link
                    href="/home/gift-cards"
                    title="Gift Cards"
                    aria-label="Gift Cards"
                  >
                    Gift Cards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home/game-cards"
                    title="Game Cards"
                    aria-label="Game Cards"
                  >
                    Game Cards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home/payment-cards"
                    title="Payment Cards"
                    aria-label="Payment Cards"
                  >
                    Payment Cards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home/software-cards"
                    title="Software Cards"
                    aria-label="Software Cards"
                  >
                    Software Cards
                  </Link>
                </li>
                <li>
                  <Link href="/home/sale" title="Sale" aria-label="Sale">
                    Sale
                  </Link>
                </li>
                <li>
                  <Link href="/home/about-us" title="About" aria-label="About">
                    About
                  </Link>
                </li>
              </ul>

              <ul role="list" className="space-y-8">
                <li>
                  <Link
                    href="/"
                    title="Whatsapp"
                    aria-label="Whatsapp"
                    className="flex items-center space-x-3 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                    <span>Whatsapp</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    title="Facebook"
                    aria-label="Facebook"
                    className="flex items-center space-x-3 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                    <span>Facebook</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    title="Youtube"
                    aria-label="Youtube"
                    className="flex items-center space-x-3 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                    <span>Youtube</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    title="Instagram"
                    aria-label="Instagram"
                    className="flex items-center space-x-3 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                    <span>Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    title="Twitter"
                    aria-label="Twitter"
                    className="flex items-center space-x-3 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                    <span>Twitter</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    title="TikTok"
                    aria-label="TikTok"
                    className="flex items-center space-x-3 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-tiktok"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                    </svg>
                    <span>TikTok</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    title="Gmail"
                    aria-label="Gmail"
                    className="flex items-center space-x-3 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg>
                    <span>Gmail</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-10/12 m-auto  mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
              <span className="block text-gray-300">
                We change the way of buying
              </span>

              <span className="block text-gray-300">
                Enggam Digital Cards &copy; {currentYear}
              </span>

              <span className="flex justify-start items-center text-white gap-8">
                <Link href="/home/terms" className="font-semibold">
                  Terms of Use{" "}
                </Link>
                <Link href="/home/privacy" className="font-semibold">
                  {" "}
                  Privacy Policy
                </Link>
              </span>

              <span className="block text-gray-300">
                Need help?{" "}
                <Link
                  href="mailto:seiffsameh00@gmail.com"
                  target="_blank"
                  className="font-semibold text-white"
                >
                  {" "}
                  Contact Us
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute h-full inset-0 flex items-center"
      >
        <div
          aria-hidden="true"
          className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-red-400 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"
        ></div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full bg-[/020314] opacity-80"
      ></div>
    </footer>
  );
}
