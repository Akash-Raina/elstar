import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { LocationForm } from "../locationMasterForm";

const LocationMaster = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/locationmaster')
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    Location Master successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/locationmaster");
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

export default LocationMaster