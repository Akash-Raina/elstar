import IssueList from "./components/IssueList"
import { IssueTableTools } from "./components/IssueTableTools"

const IssueType = ()=>{

    return <>
    <div className="flex justify-between mb-4">
        <h3>Issue Type</h3>
        <IssueTableTools/>
    </div>
    <IssueList/>
</>
}

export default IssueType