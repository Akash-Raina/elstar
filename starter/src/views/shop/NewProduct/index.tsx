import { useNavigate } from "react-router-dom"
import ProductForm from "../ProductForm"


 const NewProduct = ()=>{

    const handleFormSubmit = ()=>{
        console.log("testing submit")
    }

    const navigate = useNavigate()
    const handleDiscard = () => {
        navigate('/productlist/1')
    }

    return (
        <>
            <ProductForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default NewProduct