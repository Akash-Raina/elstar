import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { MainForm } from "../mainForm";

const NewMain = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/orderlist')
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
            navigate("/orderlist");
        }
    };

    return <>
        <MainForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewMain