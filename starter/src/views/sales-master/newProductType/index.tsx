
import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { OrderTypeForm } from "../orderTypeForm";
import { ProductTypeForm } from "../productTypeForm";

const NewProductType = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/producttype')
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
            navigate("/producttype");
        }
    };

    return <>
        <ProductTypeForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewProductType