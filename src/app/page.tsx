import Image from "next/image";

export default function Home() {
  return (
    <main
      className="font-body bg-white"
      data-new-gr-c-s-check-loaded="14.1110.0"
      data-gr-ext-installed=""
    >
      {/* background image */}
      <div className="absolute h-auto z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex-none flex justify-end">
          {/* <picture>
            <source srcSet="/tricolor.avif" type="image/avif" />
            <img
              src="/tricolor.png"
              alt=""
              className="w-[71.75rem] h-auto flex-none max-w-none dark:hidden"
              decoding="async"
            />
          </picture> */}
          {/* <picture>
            <source srcSet="/tricolor.avif" type="image/avif" />
            <img
              src="/tricolor.png"
              alt=""
              className="w-[90rem] h-auto flex-none max-w-none hidden dark:block"
              decoding="async"
            />
          </picture> */}
        </div>
      </div>
      {/* <!-- home section --> */}
      <section className="bg-white py-10 md:mb-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <nav
            className="flex-wrap lg:flex items-center"
            x-data="{navbarOpen:false}"
          >
            <div className="flex items-center mb-10 lg:mb-0">
              <img src="assets/image/navbar-logo.png" alt="Logo" />

              <button className="lg:hidden w-10 h-10 ml-auto flex items-center justify-center border border-green-500 text-green-500 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-menu"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>

            <ul className="lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-14 hidden">
              {/* :className="{'hidden':!navbarOpen,'flex':navbarOpen}" */}
              <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">About us</a>
              </li>
              <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">Gallery</a>
              </li>
              <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">Vision</a>
              </li>
              <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="#">Board Members</a>
              </li>
            </ul>

            <div className="lg:flex flex-col md:flex-row md:items-center text-center md:space-x-6 hidden">
              {/* :className="{'hidden':!navbarOpen,'flex':navbarOpen}" */}
              <a
                href="#"
                className="px-6 py-4 bg-green-500 text-white font-semibold text-lg rounded-xl hover:bg-green-700 transition ease-in-out duration-500 mb-5 md:mb-0"
              >
                Join
              </a>

              <a
                href="#"
                className="px-6 py-4 border-2 border-green-500 text-green-500 font-semibold text-lg rounded-xl hover:bg-green-700 hover:text-white transition ease-linear duration-500"
              >
                Become a member
              </a>
            </div>
          </nav>

          <div className="flex flex-col lg:flex-row justify-between space-x-20">
            <div className="text-center lg:text-left mt-40">
              <h1 className="font-Noto font-semibold text-gray-900 text-3xl md:text-6xl leading-normal mb-6">
                እኛ ለኛ እድር
              </h1>
              <h2 className="font-Noto font-semibold text-gray-900 text-2xl md:text-3xl leading-normal mb-6">
                ማንም አይሁን ብቸኛ እያለን እኛ ለእኛ <br />
                ለወገን ደራሽ መጽናኛ
              </h2>

              <p className=" font-light text-gray-400 text-md md:text-lg leading-normal mb-12">
                Ethiopian welfare association. United Kingdom
              </p>

              <button className="px-6 py-4 bg-green-500 font-semibold text-white text-lg rounded-xl hover:bg-green-700 transition ease-in-out duration-500">
                Get started
              </button>
            </div>

            <div className="mt-24">
              <img src="assets/image/home-img.png" alt="Image" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- home section //end --> */}

      {/* <!-- feature section --> */}
      {/* <section className="bg-white py-16 md:mt-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <p className="font-light text-gray-500 text-lg md:text-xl text-center uppercase mb-6">
            Our features
          </p>

          <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-10">
            We believe we can save <br /> more life with you
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 py-6 flex justify-center bg-green-200 bg-opacity-30 text-green-700 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-globe"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
              </div>

              <h4 className="font-semibold text-lg md:text-2xl text-gray-900 mb-6">
                Transparent
              </h4>

              <p className="font-light text-gray-500 text-md md:text-xl mb-6">
                Donations and distributions can be seen transparently
              </p>

              <div className="flex justify-center">
                <a
                  href="#"
                  className="flex items-center gap-5 px-6 py-4 font-semibold text-info text-lg rounded-xl hover:bg-info hover:text-white transition ease-linear duration-500"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 py-6 flex justify-center bg-green-200 bg-opacity-30 text-green-700 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-arrow-up-right"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>

              <h4 className="font-semibold text-lg md:text-2xl text-gray-900 mb-6">
                Quick Fundraise
              </h4>

              <p className="font-light text-gray-500 text-md md:text-xl mb-6">
                The simple and quickest way to make a donation
              </p>

              <div className="flex justify-center">
                <a
                  href="#"
                  className="flex items-center gap-5 px-6 py-4 font-semibold text-info text-lg rounded-xl hover:bg-info hover:text-white transition ease-linear duration-500"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 py-6 flex justify-center bg-green-200 bg-opacity-30 text-green-700 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-clock"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
              </div>

              <h4 className="font-semibold text-lg md:text-2xl text-gray-900 mb-6">
                Real Time
              </h4>

              <p className="font-light text-gray-500 text-md md:text-xl mb-6">
                Reports related to donations and distribution are updated
                directly
              </p>

              <div className="flex justify-center">
                <a
                  href="#"
                  className="flex items-center gap-5 px-6 py-4 font-semibold text-info text-lg rounded-xl hover:bg-info hover:text-white transition ease-linear duration-500"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- feature section //end --> */}

      {/* <!-- donation section --> */}
      {/* <section className="bg-white py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center mb-16">
            Latest to donate
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
              <img
                src="assets/image/donation-1.png"
                alt="Image"
                className="mb-6 hover:opacity-75 transition ease-in-out duration-500"
              />

              <h4 className="font-semibold text-gray-900 text-lg md:text-2xl mb-6">
                Help flood victims in <br /> Indonesia
              </h4>

              <p className="font-light text-gray-400 text-sm md:text-md lg:text-lg mb-10">
                Help flood victims in Indonesia by <br /> donating sincerely,
                regardless of the...
              </p>

              <div className="flex items-center justify-between mb-8">
                <h6 className="font-light text-gray-400 text-sm md:text-lg">
                  Goals :{" "}
                  <span className="font-semibold text-gray-900 text-md md:text-lg">
                    $25000
                  </span>
                </h6>

                <h6 className="font-light text-gray-400 text-sm md:text-lg">
                  Raised :{" "}
                  <span className="font-semibold text-gray-900 text-md md:text-lg">
                    $21000
                  </span>
                </h6>
              </div>

              <div className="hidden md:block lg:flex items-center justify-between mb-8">
                <div>
                  <div className="w-72 h-2 bg-info opacity-10 rounded-lg absolute"></div>

                  <div className="w-56 h-2 bg-info rounded-lg relative"></div>
                </div>

                <p className="font-light text-gray-900 text-md">84%</p>
              </div>

              <button className="w-full py-4 bg-info font-semibold text-white text-lg rounded-xl hover:bg-green-800 transition ease-in-out duration-500">
                Donate
              </button>
            </div>

            <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
              <img
                src="assets/image/donation-2.png"
                alt="Image"
                className="mb-6 hover:opacity-75 transition ease-in-out duration-500"
              />

              <h4 className="font-semibold text-gray-900 text-lg md:text-2xl mb-6">
                Donation for COVID-19 in <br /> Indonesia
              </h4>

              <p className="font-light text-gray-400 text-sm md:text-md lg:text-lg mb-10">
                Donation for COVID-19 in Indonesia by <br /> donating sincerely,
                regardless of the...
              </p>

              <div className="flex items-center justify-between mb-8">
                <h6 className="font-light text-gray-400 text-sm md:text-lg">
                  Goals :{" "}
                  <span className="font-semibold text-gray-900 text-md md:text-lg">
                    $24000
                  </span>
                </h6>

                <h6 className="font-light text-gray-400 text-sm md:text-lg">
                  Raised :{" "}
                  <span className="font-semibold text-gray-900 text-md md:text-lg">
                    $19000
                  </span>
                </h6>
              </div>

              <div className="hidden md:block lg:flex items-center justify-between mb-8">
                <div>
                  <div className="w-72 h-2 bg-info opacity-10 rounded-lg absolute"></div>

                  <div className="w-52 h-2 bg-info rounded-lg relative"></div>
                </div>

                <p className="font-light text-gray-900 text-md">80%</p>
              </div>

              <button className="w-full py-4 bg-info font-semibold text-white text-lg rounded-xl hover:bg-green-800 transition ease-in-out duration-500">
                Donate
              </button>
            </div>

            <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
              <img
                src="assets/image/donation-3.png"
                alt="Image"
                className="mb-6 hover:opacity-75 transition ease-in-out duration-500"
              />

              <h4 className="font-semibold text-gray-900 text-lg md:text-2xl mb-6">
                Help homeless cat to find <br /> home
              </h4>

              <p className="font-light text-gray-400 text-sm md:text-md lg:text-lg mb-10">
                Help homeless cat and the oether <br /> animals by donating
                sincerely regar...
              </p>

              <div className="flex items-center justify-between mb-8">
                <h6 className="font-light text-gray-400 text-sm md:text-lg">
                  Goals :{" "}
                  <span className="font-semibold text-gray-900 text-md md:text-lg">
                    $15000
                  </span>
                </h6>

                <h6 className="font-light text-gray-400 text-sm md:text-lg">
                  Raised :{" "}
                  <span className="font-semibold text-gray-900 text-md md:text-lg">
                    $13000
                  </span>
                </h6>
              </div>

              <div className="hidden md:block lg:flex items-center justify-between mb-8">
                <div>
                  <div className="w-72 h-2 bg-info opacity-10 rounded-lg absolute"></div>

                  <div className="w-60 h-2 bg-info rounded-lg relative"></div>
                </div>

                <p className="font-light text-gray-900 text-md">86%</p>
              </div>

              <button className="w-full py-4 bg-info font-semibold text-white text-lg rounded-xl hover:bg-green-800 transition ease-in-out duration-500">
                Donate
              </button>
            </div>

            <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
              <img
                src="assets/image/donation-4.png"
                alt="Image"
                className="mb-6 hover:opacity-75 transition ease-in-out duration-500"
              />

              <h4 className="font-semibold text-gray-900 text-lg md:text-2xl mb-6">
                Help save poor children in <br /> Pakistan
              </h4>

              <p className="font-light text-gray-400 text-sm md:text-md lg:text-lg mb-10">
                Help save poor children in Pakistas by <br /> donating
                sincerely, regardless of the...
              </p>

              <div className="flex items-center justify-between mb-8">
                <h6 className="font-light text-gray-400 text-sm md:text-lg">
                  Goals :{" "}
                  <span className="font-semibold text-gray-900 text-md md:text-lg">
                    $75000
                  </span>
                </h6>

                <h6 className="font-light text-gray-400 text-sm md:text-lg">
                  Raised :{" "}
                  <span className="font-semibold text-gray-900 text-md md:text-lg">
                    $50000
                  </span>
                </h6>
              </div>

              <div className="hidden md:block lg:flex items-center justify-between mb-8">
                <div>
                  <div className="w-72 h-2 bg-info opacity-10 rounded-lg absolute"></div>

                  <div className="w-48 h-2 bg-info rounded-lg relative"></div>
                </div>

                <p className="font-light text-gray-900 text-md">66%</p>
              </div>

              <button className="w-full py-4 bg-info font-semibold text-white text-lg rounded-xl hover:bg-green-800 transition ease-in-out duration-500">
                Donate
              </button>
            </div>

            <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
              <img
                src="assets/image/donation-5.png"
                alt="Image"
                className="mb-6 hover:opacity-75 transition ease-in-out duration-500"
              />

              <h4 className="font-semibold text-gray-900 text-lg md:text-2xl mb-6">
                Lifeskills for children in <br /> South Africa
              </h4>

              <p className="font-light text-gray-400 text-sm md:text-md lg:text-lg mb-10">
                Donating for children in South Africa <br /> by donating
                sincerely, regardless of...
              </p>

              <div className="flex items-center justify-between mb-8">
                <h6 className="font-light text-gray-400 text-sm md:text-lg">
                  Goals :{" "}
                  <span className="font-semibold text-gray-900 text-md md:text-lg">
                    $45000
                  </span>
                </h6>

                <h6 className="font-light text-gray-400 text-sm md:text-lg">
                  Raised :{" "}
                  <span className="font-semibold text-gray-900 text-md md:text-lg">
                    $22500
                  </span>
                </h6>
              </div>

              <div className="hidden md:block lg:flex items-center justify-between mb-8">
                <div>
                  <div className="w-72 h-2 bg-info opacity-10 rounded-lg absolute"></div>

                  <div className="w-36 h-2 bg-info rounded-lg relative"></div>
                </div>

                <p className="font-light text-gray-900 text-md">50%</p>
              </div>

              <button className="w-full py-4 bg-info font-semibold text-white text-lg rounded-xl hover:bg-green-800 transition ease-in-out duration-500">
                Donate
              </button>
            </div>

            <div className="px-6 py-6 w-full border-2 border-gray-200 rounded-3xl">
              <img
                src="assets/image/donation-6.png"
                alt="Image"
                className="mb-6 hover:opacity-75 transition ease-in-out duration-500"
              />

              <h4 className="font-semibold text-gray-900 text-lg md:text-2xl mb-6">
                Help donate for children <br /> with cancer
              </h4>

              <p className="font-light text-gray-400 text-sm md:text-md lg:text-lg mb-10">
                Help donate for the children with <br /> cancer by donating
                sincerely, regar...
              </p>

              <div className="flex items-center justify-between mb-8">
                <h6 className="font-light text-gray-400 text-sm md:text-lg">
                  Goals :{" "}
                  <span className="font-semibold text-gray-900 text-md md:text-lg">
                    $50000
                  </span>
                </h6>

                <h6 className="font-light text-gray-400 text-sm md:text-lg">
                  Raised :{" "}
                  <span className="font-semibold text-gray-900 text-md md:text-lg">
                    $13000
                  </span>
                </h6>
              </div>

              <div className="hidden md:block lg:flex items-center justify-between mb-8">
                <div>
                  <div className="w-72 h-2 bg-info opacity-10 rounded-lg absolute"></div>

                  <div className="w-20 h-2 bg-info rounded-lg relative"></div>
                </div>

                <p className="font-light text-gray-900 text-md">26%</p>
              </div>

              <button className="w-full py-4 bg-info font-semibold text-white text-lg rounded-xl hover:bg-green-800 transition ease-in-out duration-500">
                Donate
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button className="px-7 py-5 font-semibold bg-gray-100 text-gray-900 rounded-2xl hover:bg-gray-300 hover:text-gray-600 transition ease-in-out duration-500">
              More to donate
            </button>
          </div>
        </div>
      </section> */}
      {/* <!-- donation section //end --> */}

      {/* <!-- feature section --> */}
      {/* <section className="bg-white py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between space-x-16">
            <div className="flex justify-center lg:justify-start">
              <img src="assets/image/feature-img.png" alt="Image" />
            </div>

            <div className="mt-16">
              <h1 className="font-semibold text-gray-900 text-xl md:text-4xl mb-20">
                You can help lots of people by <br /> donating
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-20 mb-16">
                <div className="mb-5 md:mb-0">
                  <div className="w-20 py-6 flex justify-center bg-info bg-opacity-5 rounded-xl mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-sun text-info"
                    >
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                  </div>

                  <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">
                    10000+
                  </h3>

                  <p className="font-light text-gray-400 text-md md:text-lg">
                    Fundraising campaign in <br /> all time
                  </p>
                </div>

                <div>
                  <div className="w-20 py-6 flex justify-center bg-red-500 bg-opacity-5 rounded-xl mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-award text-red-500"
                    >
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>

                  <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">
                    $120M+
                  </h3>

                  <p className="font-light text-gray-400 text-md md:text-lg">
                    Raised and counting <br /> donations in all time
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-20">
                <div className="mb-5 md:mb-0">
                  <div className="w-20 py-6 flex justify-center bg-yellow-500 bg-opacity-5 rounded-xl mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-users text-yellow-500"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>

                  <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">
                    1200+
                  </h3>

                  <p className="font-light text-gray-400 text-md md:text-lg">
                    Our volunteer around the <br /> world
                  </p>
                </div>

                <div>
                  <div className="w-20 py-6 flex justify-center bg-green-500 bg-opacity-5 rounded-xl mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-trending-up text-green-500"
                    >
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                  </div>

                  <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">
                    98%
                  </h3>

                  <p className="font-light text-gray-400 text-md md:text-lg">
                    Positive review from <br /> public
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- feature section //end --> */}

      {/* <!-- join volunters section --> */}
      {/* <section className="bg-white py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="w-full h-full bg-green-500 rounded-2xl md:rounded-3xl relative lg:flex items-center">
            <div className="hidden lg:block">
              <img
                src="assets/image/humans.png"
                alt="Image"
                className="relative z-10"
              />

              <img
                src="assets/image/pattern-2.png"
                alt="Image"
                className="absolute top-14 left-40"
              />

              <img
                src="assets/image/pattern.png"
                alt="Image"
                className="absolute top-0 z-0"
              />
            </div>

            <div className="lg:relative py-4 lg:py-0">
              <h1 className="font-semibold text-white text-xl md:text-4xl text-center lg:text-left leading-normal md:mb-5 lg:mb-10">
                Interested in volunteering? Join <br /> with us now
              </h1>

              <div className="hidden md:block flex items-center text-center lg:text-left space-x-5">
                <input
                  type="text"
                  placeholder="Email"
                  className="px-4 py-4 w-96 bg-gray-50 placeholder-gray-400 rounded-xl outline-none"
                />

                <button className="px-6 py-4 font-semibold bg-gray-50 text-info text-lg rounded-xl hover:bg-green-500 hover:text-white transition ease-in-out duration-500">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- join volunters section //end --> */}

      <footer className="bg-white py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="space-y-7 mb-10 lg:mb-0">
              <div className="flex justify-center lg:justify-start">
                <img src="assets/image/footer-logo.png" alt="Image" />
              </div>

              <p className="font-light text-gray-400 text-md md:text-lg text-center lg:text-left">
                Donate and help others people <br /> around the world
              </p>

              <div className="flex items-center justify-center lg:justify-start space-x-5">
                <a
                  href="#"
                  className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-info hover:text-white transition ease-in-out duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

                <a
                  href="#"
                  className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-info hover:text-white transition ease-in-out duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>

                <a
                  href="#"
                  className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-info hover:text-white transition ease-in-out duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center lg:text-left space-y-7 mb-10 lg:mb-0">
              <h4 className="font-semibold text-gray-900 text-lg md:text-2xl">
                Quick links
              </h4>

              <a
                href="#"
                className="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300"
              >
                Charity Ratings
              </a>

              <a
                href="#"
                className="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300"
              >
                Top-Rated Charities
              </a>

              <a
                href="#"
                className="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300"
              >
                Top Compensation
              </a>

              <a
                href="#"
                className="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300"
              >
                High Asset Charities
              </a>
            </div>

            <div className="text-center lg:text-left space-y-7 mb-10 lg:mb-0">
              <h4 className="font-semibold text-gray-900 text-lg md:text-2xl">
                Company
              </h4>

              <a
                href="#"
                className="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300"
              >
                About Us
              </a>

              <a
                href="#"
                className="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300"
              >
                Journalists / Media
              </a>

              <a
                href="#"
                className="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300"
              >
                Membership
              </a>

              <a
                href="#"
                className="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300"
              >
                Blog
              </a>
            </div>

            <div className="text-center lg:text-left space-y-7 mb-10 lg:mb-0">
              <h4 className="font-semibold text-gray-900 text-lg md:text-2xl">
                Legal
              </h4>

              <a
                href="#"
                className="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300"
              >
                FAQ
              </a>

              <a
                href="#"
                className="block font-light text-gray-400 text-sm md:text-lg hover:text-gray-800 transition ease-in-out duration-300"
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* <script>feather.replace()</script> */}
    </main>

    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-green-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore the Next.js 13 playground.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}
