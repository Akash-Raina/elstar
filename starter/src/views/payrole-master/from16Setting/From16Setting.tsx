import From16SettingList from "./components/From16SettingList"
import { From16SettingTableTools } from "./components/From16SettingTableTools"

const From16Setting = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>From 16 Setting</h3>
        <From16SettingTableTools/>
    </div>
    <From16SettingList/>
    </>
}

export default From16Setting