import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { SalesInvoiceForm } from "../salesInvoiceForm";

const NewSalesInvoice = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/salesinvoice')
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
            navigate("/salesinvoice");
        }
    };

    return <>
        <SalesInvoiceForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewSalesInvoice