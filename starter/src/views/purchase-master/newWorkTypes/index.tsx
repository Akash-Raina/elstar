import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { WorkForm } from "../workOrderTypesForm";

const NewWorkTypes = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/workordertypes')
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
            navigate("/workordertypes");
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

export default NewWorkTypes