import UnitList from "./components/UnitList"
import { UnitTableTools } from "./components/UnitTableTools"


const MeasuringUnit = ()=>{

    return <>
        <div className="flex justify-between mb-4">
            <h3>Measuring Unit</h3>
            <UnitTableTools/>
        </div>
        <UnitList/>
    </>
}

export default MeasuringUnit