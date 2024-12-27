import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { SupplierForm } from "../supplierForm";

const NewTender = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/tenderlist')
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    Tender successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/tenderlist");
        }
    };

    return <>
        <SupplierForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewTender