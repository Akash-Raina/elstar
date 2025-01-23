import RtgsSettingList from "./components/RtgsSettingList"
import { RtgsSettingTableTools } from "./components/RtgsSettingTableTools"

const RtgsSetting = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>RTGS Settings</h3>
        <RtgsSettingTableTools/>
    </div>
    <RtgsSettingList/>
    </>
}

export default RtgsSetting