import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function PageNotFound() {
  return (
    <>
      <NavBar />
      <section className="relative z-10 py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[50px] font-bold leading-none text-veryDarkViolet sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-veryDarkViolet">
                  Oops! That page cant be found
                </h4>
                <p className="mb-8 text-lg text-veryDarkViolet">
                  The page you are looking for it maybe deleted
                </p>
                <a
                  href="#"
                  className="inline-block rounded-lg border border-veryDarkViolet px-8 py-3 text-center text-base font-semibold text-veryDarkViolet transition hover:bg-veryDarkViolet hover:text-white"
                >
                  Go To Home
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div className="flex h-full w-1/3">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
