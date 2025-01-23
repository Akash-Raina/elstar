import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { OverTimeTypeForm } from "../overTimeTypeForm";

const NewOverTimeType = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/overtimetype')
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
            navigate("/overtimetype");
        }
    };

    return <>
        <OverTimeTypeForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewOverTimeType