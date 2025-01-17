
import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { ItemForm } from "../itemForm";

const NewItem = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/items')
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
            navigate("/items");
        }
    };

    return <>
        <ItemForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewItem