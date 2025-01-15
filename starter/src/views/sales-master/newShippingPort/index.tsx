import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { ShippingPortForm } from "../shippingPortForm";

const NewShippingPort = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/shippingport')
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
            navigate("/shippingport");
        }
    };

    return <>
        <ShippingPortForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewShippingPort