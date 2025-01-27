import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { OverTimeTypeForm } from "../overTimeTypeForm";
import { PlSanctionSettingForm } from "../plSanctionSettingForm";
import { ReasonForm } from "../reasonForm";

const NewReason = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/reason')
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
            navigate("/reason");
        }
    };

    return <>
        <ReasonForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewReason