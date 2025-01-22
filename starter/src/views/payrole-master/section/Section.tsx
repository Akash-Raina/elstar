import SectionList from "./components/SectionList"
import { SectionTableTools } from "./components/SectionTableTools"

const Section = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Section</h3>
        <SectionTableTools/>
    </div>
    <SectionList/>
    </>
}

export default Section