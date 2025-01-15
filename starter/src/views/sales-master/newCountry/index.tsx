import { useNavigate } from "react-router-dom"
import { toast, Notification } from "@/components/ui";
import { CountryForm } from "../countryForm";

const NewCountry = ()=>{

    const navigate =useNavigate();

    const handleDiscard = () => {
        navigate('/country')
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
            navigate("/country");
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