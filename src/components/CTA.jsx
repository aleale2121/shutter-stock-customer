export default function CTA() {
  return (
    <section id="cta" className="py-16 bg-darkViolet">
      <div className="flex flex-col p-2 space-y-6">
        <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
          Get creative contents today
        </h5>
        <a
          href="./pricing.html"
          className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLlight md:text-base md:py-3 focus:outline-none"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
