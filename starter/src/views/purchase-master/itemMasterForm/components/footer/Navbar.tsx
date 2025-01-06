import { useState } from "react";
import { Rates } from "./Rates";


const Navbar = () => {
  const [activeTab, setActiveTab] = useState<"godown" | "rates" | "reorder" | "percurrent"  | "other" | "hsn" | null>("rates");

  const tabs = [
    { label: "Godown", key: "godown", component: ''},
    { label: "Rates", key: "rates", component: <Rates/>},
    { label: "Re-order Level", key: "reorder", component: ''},
    { label: "Percurrent Details", key: "percurrent", component: ''},
    { label: "Other Details", key: "other", component: ''},
    { label: "HSN Details", key: "hsn" },
  ];

  return (
    <div className="flex flex-col border-[#787878] rounded-sm border items-center">
      <div className="flex gap-2 w-full border-[#787878] border-b h-10 items-center justify-around font-semibold cursor-pointer">
        {tabs.map((tab) => (
          <span
            key={tab.key}
            className={`${activeTab === tab.key ? "text-red-500" : ""}`}
            onClick={() => setActiveTab(tab.key as "godown" | "rates" | "reorder" | "percurrent"  | "other" | "hsn" | null)}
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
