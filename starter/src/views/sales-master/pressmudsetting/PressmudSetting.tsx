import PressmudSettingList from "./components/PressmudSettingList"
import { PressudSettingTableTools } from "./components/PressudSettingTableTools"

const PressmudSetting = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Pressmud Sale Setting - Customer</h3>
        <PressudSettingTableTools/>
    </div>
    <PressmudSettingList/>
    </>
}

export default PressmudSetting