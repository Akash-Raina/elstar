import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { OverTimeTypeForm } from "../overTimeTypeForm";
import { PlSanctionSettingForm } from "../plSanctionSettingForm";

const NewPlSanctionSetting = ()=>{

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
        <PlSanctionSettingForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewPlSanctionSetting