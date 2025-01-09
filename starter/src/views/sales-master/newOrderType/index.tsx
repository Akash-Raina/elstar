
import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { OrderTypeForm } from "../orderTypeForm";

const NewOrderType = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/order')
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
            navigate("/order");
        }
    };

    return <>
        <OrderTypeForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewOrderType