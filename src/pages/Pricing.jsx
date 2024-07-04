import NavBar from "../components/NavBar";
import Header from "../features/pricing/Header";
import PricingTabs from "../features/pricing/PricingTabs";
import { PricingPlan } from "../features/pricing/PricingPlan";
import PricingsContainer from "../features/pricing/PricingsContainer";
import PricingMenu from "../features/pricing/PricingMenu";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const individualPlans = [
  {
    id: "plan_id_1",
    name: "Basic",
    price: 100,
    items: 10,
    downloads: 30,
    users: 1,
    duration: "Month",
    active: false,
  },
  {
    id: "plan_id_2",
    name: "Standard",
    price: 150,
    items: 20,
    downloads: 40,
    users: 1,
    duration: "Month",
    active: true,
  },
  {
    id: "plan_id_3",
    name: "Premium",
    price: 200,
    items: 30,
    downloads: 50,
    users: 1,
    duration: "Month",
    active: false,
  },
];
const businessPlans = [
  {
    id: "plan_id_4",
    name: "Small",
    price: 150,
    items: 10,
    downloads: 40,
    users: 3,
    duration: "Month",
    active: false,
  },
  {
    id: "plan_id_5",
    name: "Medium",
    price: 200,
    items: 20,
    downloads: 50,
    users: 5,
    duration: "Month",
    active: true,
  },
  {
    id: "plan_id_6",
    name: "Large",
    price: 250,
    items: 50,
    downloads: 100,
    users: 10,
    duration: "Month",
    active: false,
  },
];

export default function Pricing() {
  return (
    <>
      <NavBar />
      <section id="header" className="py-24 bg-gray-100">
        <Header />
      </section>
      <section id="pricing" className="pb-32 bg-gray-100">
        <div className="container flex flex-col md:mx-auto items-center justify-center">
          <PricingTabs />
          <PricingMenu>
            <PricingsContainer id="individual" ariaLabelledBy="individual-tab">
              {individualPlans.map((pricing) => (
                <PricingPlan
                  key={pricing.id}
                  id={pricing.id}
                  name="individual_check"
                  pricing={pricing}
                  active={pricing.active}
                />
              ))}
            </PricingsContainer>

            <PricingsContainer id="business" ariaLabelledBy="business-tab">
              {businessPlans.map((pricing) => (
                <PricingPlan
                  key={pricing.id}
                  id={pricing.id}
                  name="business_check"
                  pricing={pricing}
                  active={pricing.active}
                />
              ))}
            </PricingsContainer>
          </PricingMenu>
        </div>
      </section>
      <CTA />
      <Footer />
    </>
  );
}
