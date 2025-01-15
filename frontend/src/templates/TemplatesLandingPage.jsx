import { Link } from "react-router-dom";
import TemplatesImg from "../assets/TemplatesHero3.png";
import duilogo from "../assets/DUI-logo.png"

const TemplatesLandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100">
      <header>
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <img className="w-18 h-10 color-black text-black" src={duilogo} alt="Logo" />
              </a>
            </div>

            <button
              type="button"
              className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a
                href="#"
                title=""
                className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                Features
              </a>

              <a
                href="#"
                title=""
                className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                Pricing
              </a>

              <div className="w-px h-5 bg-black/20"></div>

              <a
                href="#"
                title=""
                className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
              >
                Log in
              </a>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
                role="button"
              >
                Try for free
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-5xl lg:text-6xl">
                <h1 className="inline">High Quality Website Templates Built with </h1>
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-6xl">React </h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">
                Beautifully Designed and Developed Readly Available Website Templates which was built with React and
                Tailwind CSS
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <Link
                  to="/templates"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-indigo-500"
                  role="button"
                >
                  Browser Templates
                </Link>

                {/* <a
                  href="#"
                  title=""
                  className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                >
                  <svg
                    className="w-10 h-10 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      fill="#F97316"
                      stroke="#F97316"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Watch video
                </a> */}
              </div>
            </div>

            <div>
              <img className="mt-0 w-full" src={TemplatesImg} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TemplatesLandingPage;