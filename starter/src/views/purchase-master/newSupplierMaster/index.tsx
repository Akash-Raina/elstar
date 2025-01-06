import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { SupplierForm } from "../supplierMasterForm";

const NewSupplierMaster = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/suppliermasterlist')
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
            navigate("/suppliermasterlist");
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

export default NewSupplierMaster