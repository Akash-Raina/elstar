import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { BagasseForm } from "../balasseSaleSettingForm";

const NewBalasseSale = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/bagassesale')
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
            navigate("/bagassesale");
        }
    };

    return <>
        <BagasseForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewBalasseSale