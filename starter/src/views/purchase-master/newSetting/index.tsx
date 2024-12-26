import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { SettingForm } from "../settingForm";

const NewSetting = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/settinglist')
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    Order successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/setinglist");
        }
    };

    return <>
        <SettingForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewSetting