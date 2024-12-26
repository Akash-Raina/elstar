import MainList from "./components/MainList"
import { MainTableTools } from "./components/MainTableTools"


const MainGroup = ()=>{

    return <>
        <div className="flex justify-between mb-4">
            <h3>Main Group</h3>
            <MainTableTools/>
        </div>
        <MainList/>
    </>
}

export default MainGroup