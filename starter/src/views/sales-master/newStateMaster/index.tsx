import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { StateMasterForm } from "../stateMasterForm";

const NewStateMaster = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/state')
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    Supplier successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/state");
        }
    };

    return <>
        <StateMasterForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewStateMaster