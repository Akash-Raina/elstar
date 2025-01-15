
import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { ItemMasterForm } from "../itemMasterForm";

const NewItemMaster = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/itemmaster')
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
            navigate("/itemmaster");
        }
    };

    return <>
        <ItemMasterForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewItemMaster