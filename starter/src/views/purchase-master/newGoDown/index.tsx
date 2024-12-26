import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { GoDownForm } from "../goDownForm";

const GoDown = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/godown')
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    Godown successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/godown");
        }
    };

    return <>
        <GoDownForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default GoDown