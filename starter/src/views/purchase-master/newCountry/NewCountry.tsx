import { useNavigate } from "react-router-dom"
import { CountryForm } from "../countryForm"
import { toast, Notification } from "@/components/ui";

const NewCountry = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/countrylist')
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    Country successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/countrylist");
        }
    };

    return <>
        <CountryForm
            type="new"
            onFormSubmit={()=>{ifSuccess(true)}}
            onDiscard={handleDiscard}
        />
    </>
}

export default NewCountry