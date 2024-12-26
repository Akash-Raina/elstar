import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { SubForm } from "../subForm";

const NewSub = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/sublist')
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    Sub Group successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/sublist");
        }
    };

    return <>
        <SubForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewSub