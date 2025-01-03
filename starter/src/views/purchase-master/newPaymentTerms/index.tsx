import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { MainForm } from "../mainForm";
import { PaymentForm } from "../paymentTermsForm";

const NewPaymentTerms = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/paymentterms')
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    Main Group successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/paymentterms");
        }
    };

    return <>
        <PaymentForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewPaymentTerms