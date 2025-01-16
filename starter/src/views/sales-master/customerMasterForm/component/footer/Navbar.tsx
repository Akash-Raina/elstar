import { useState } from "react";
import { Bill } from "./Bill";
import { DeliveryAddress } from "./DeliveryAddress";
import { ContactDetails } from "./ContactDetails";
import { BillingAddress } from "./BillingAddress";


const Navbar = () => {
  const [activeTab, setActiveTab] = useState<"billing" | "delivery" | "shipping" | "contact"  | "tax" | "bill" | null>("bill");

  const tabs = [
    { label: "Billing Address", key: "billing", component: <BillingAddress/>},
    { label: "Delivery Address", key: "delivery", component: <DeliveryAddress/>},
    { label: "Shipping Address", key: "shipping", component: <BillingAddress/>},
    { label: "Contact Details", key: "contact", component: <ContactDetails/>},
    { label: "Tax Details", key: "tax", component: <ContactDetails/>},
    { label: "Bill Type Wise GLPL", key: "bill", component: <Bill/> },
  ];

  return (
    <div className="flex flex-col border-[#787878] rounded-sm border items-center">
      <div className="flex gap-2 w-full border-[#787878] border-b h-10 items-center justify-around font-semibold cursor-pointer">
        {tabs.map((tab) => (
          <span
            key={tab.key}
            className={`${activeTab === tab.key ? "text-red-500" : ""}`}
            onClick={() => setActiveTab(tab.key as "billing" | "delivery" | "shipping" | "contact"  | "tax" | "bill" | null)}
          >
            {tab.label}
          </span>
        ))}
      </div>

      <div className="w-full">
        {tabs.find((tab) => tab.key === activeTab)?.component || null}
      </div>
    </div>
  );
};

export default Navbar;
