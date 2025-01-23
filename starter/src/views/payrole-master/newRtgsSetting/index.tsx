import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { OverTimeTypeForm } from "../overTimeTypeForm";
import { RtgsSettingForm } from "../rtgsForm";

const NewRtgsSetting = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/rtgssetting')
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
            navigate("/rtgssetting");
        }
    };

    return <>
        <RtgsSettingForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewRtgsSetting