import SettingList from "./components/SettingList";
import { SettingTableTools } from "./components/SettingTableTools";

const GlSetting = ()=>{

    return <>
        <div className="flex justify-between mb-4">
            <h3>District Master</h3>
            <SettingTableTools/>
        </div>
        <SettingList/>
    </>
}

export default GlSetting;