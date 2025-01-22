import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { BankForm } from "../bankForm";

const NewBank = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/section')
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
            navigate("/section");
        }
    };

    return <>
        <BankForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewBank