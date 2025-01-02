import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { LocationForm } from "../locationCategoryForm";

const NewLocationCategory = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/locationcategory')
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    District successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/locationcategory");
        }
    };

    return <>
        <LocationForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewLocationCategory