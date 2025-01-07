import MolassesLocalList from "./components/MolassesLocalList"
import { MolassesLocalTableTools } from "./components/MolassesLocalTableTools"

const MolassesLocal = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Molasses sale setting-customer local</h3>
        <MolassesLocalTableTools/>
    </div>
    <MolassesLocalList/>
    </>
}

export default MolassesLocal