import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { WorkForm } from "../workOrderTypeForm";

const NewWorkType = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/workordertype')
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    Unit Group successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/workordertype");
        }
    };

    return <>
        <WorkForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewWorkType