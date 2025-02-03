import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { SystemSettingForm } from "../systemSettingForm";

const NewSystemSetting = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/systemsetting')
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
            navigate("/systemsetting");
        }
    };

    return <>
        <SystemSettingForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewSystemSetting