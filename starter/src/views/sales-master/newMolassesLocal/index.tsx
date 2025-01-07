
import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { SalesInvoiceForm } from "../salesInvoiceForm";
import { MolassesLocalForm } from "../molassesLocalForm";

const NewMolassesLocal = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/molasseslocalsetting')
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
            navigate("/molasseslocalsetting");
        }
    };

    return <>
        <MolassesLocalForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewMolassesLocal