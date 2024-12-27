import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { IssueForm } from "../issueForm";

const NewIssue = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/issuelist')
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
            navigate("/issuelist");
        }
    };

    return <>
        <IssueForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewIssue