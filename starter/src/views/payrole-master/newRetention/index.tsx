import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { RetentionForm } from "../retentionForm";

const NewRetention = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/retention')
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
            navigate("/retention");
        }
    };

    return <>
        <RetentionForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewRetention