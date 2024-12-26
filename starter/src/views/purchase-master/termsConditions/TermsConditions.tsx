import TermsList from "./components/TermsList"
import { TermsTableTools } from "./components/TermsTableTools"

const TermsConditions = ()=>{

    return <>
    <div className="flex justify-between mb-4">
        <h3>Terms & Condition</h3>
        <TermsTableTools/>
    </div>
    <TermsList/>
</>
}

export default TermsConditions