import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { DistrictForm } from "../districtForm";

const NewDistrict = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/districtlist')
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
            navigate("/districtlist");
        }
    };

    return <>
        <DistrictForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewDistrict