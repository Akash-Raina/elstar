import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { PressmudSettingForm } from "../pressmudSettingForm";

const NewPressmudSetting = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/pressmudsetting')
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
            navigate("/pressmudsetting");
        }
    };

    return <>
        <PressmudSettingForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewPressmudSetting