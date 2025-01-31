
import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { From16SettingForm } from "../from16SettingForm";

const NewForm16Setting = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/from16setting')
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
            navigate("/from16setting");
        }
    };

    return <>
        <From16SettingForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewForm16Setting