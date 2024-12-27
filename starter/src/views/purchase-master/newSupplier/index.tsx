import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { SupplierForm } from "../supplierForm";

const NewSupplier = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/supplierlist')
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
            navigate("/supplierlist");
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

export default NewSupplier