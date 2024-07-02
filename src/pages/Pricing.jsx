import NavBar from "../components/NavBar";
import Header from "../features/pricing/Header";
import Tabs from "../features/pricing/Tabs";
import { PricingLabel } from "../features/pricing/PricingLabel";
import PricingTabMenu from "../features/pricing/PricingTabMenu";

export default function Pricing() {
  return (
    <>
      <NavBar />
      <section id="stats" className="py-24 bg-gray-100">
        <Header />
      </section>
      <section id="pricing" className="pb-32 bg-gray-100">
        <div className="container flex flex-col md:mx-auto items-center justify-center">
          <Tabs />
          <PricingTabMenu>
            <PricingLabel />
            <PricingLabel />
            <PricingLabel />
          </PricingTabMenu>
        </div>
      </section>
    </>
  );
}
