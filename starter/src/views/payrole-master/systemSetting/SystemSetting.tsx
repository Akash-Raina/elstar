import SystemSettingList from "./components/SystemSettingList"
import { SystemSettingTableTools } from "./components/SystemSettingTableTools"

const SystemSetting = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>System Setting</h3>
        <SystemSettingTableTools/>
    </div>
    <SystemSettingList/>
    </>
}

export default SystemSetting