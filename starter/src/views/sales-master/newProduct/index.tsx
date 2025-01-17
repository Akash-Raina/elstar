import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { ProductForm } from "../ProductsForm";

const NewProduct = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/product')
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
            navigate("/product");
        }
    };

    return <>
        <ProductForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewProduct