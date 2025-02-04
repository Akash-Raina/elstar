import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { OverTimeForm } from "../overtimeForm";

const NewOverTime = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/overtime')
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
            navigate("/overtime");
        }
    };

    return <>
        <OverTimeForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewOverTime