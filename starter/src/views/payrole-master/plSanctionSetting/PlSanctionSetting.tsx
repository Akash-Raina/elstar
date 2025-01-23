import PlSanctionSettingList from "./components/PlSanctionSettingList"
import { PlSanctionSettingTableTools } from "./components/PlSanctionSettingTableTools"

const PlSanctionSetting = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>PL Sanction Setting</h3>
        <PlSanctionSettingTableTools/>
    </div>
    <PlSanctionSettingList/>
    </>
}

export default PlSanctionSetting