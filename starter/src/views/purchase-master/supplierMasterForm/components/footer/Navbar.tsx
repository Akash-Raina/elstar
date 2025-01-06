import { useState } from "react";
import { OfficeAd } from "./OfficeAd";
import { WorkAd } from "./WorkAd";
import { ContactDetails } from "./ContactDetails";
import { Supplierlocation } from "./SupplierLocation";
import { ScopeSupply } from "./ScopeSupply";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState<"office" | "work" | "contact" | "supplier"  | "scope" |null>("office");

  const tabs = [
    { label: "Office Add", key: "office", component: <OfficeAd /> },
    { label: "Work Add", key: "work", component: <WorkAd /> },
    { label: "Supplier Location", key: "supplier", component: <Supplierlocation />   },
    { label: "Contact Details", key: "contact", component: <ContactDetails/> },
    { label: "Scope of Supply", key: "scope", component: <ScopeSupply/>  },
    { label: "Tax Details", key: "tax" },
    { label: "Account Details", key: "account" },
  ];

  return (
    <div className="flex flex-col border-[#787878] rounded-sm border items-center">
      <div className="flex gap-2 w-full border-[#787878] border-b h-10 items-center justify-around font-semibold cursor-pointer">
        {tabs.map((tab) => (
          <span
            key={tab.key}
            className={`${activeTab === tab.key ? "text-red-500" : ""}`}
            onClick={() => setActiveTab(tab.key as "office" | "work" | "contact" | "supplier" | "scope" | null)}
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
