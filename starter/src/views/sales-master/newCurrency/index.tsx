import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { CurrencyForm } from "../currencyForm";

const NewMolassesLocal = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/currency')
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
            navigate("/currency");
        }
    };

    return <>
        <CurrencyForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewMolassesLocal