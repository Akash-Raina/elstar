import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { PayForm } from "../payTermsForm";

const NewPaymentTerms = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/payterms')
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
            navigate("/payterms");
        }
    };

    return <>
        <PayForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewPaymentTerms