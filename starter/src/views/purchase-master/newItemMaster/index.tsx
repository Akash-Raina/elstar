import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { IssueForm } from "../issueForm";
import { ItemMasterForm } from "../itemMasterForm";

const NewIssue = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/itemlist')
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    Issue successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/itemlist");
        }
    };

    return <>
        <ItemMasterForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewIssue