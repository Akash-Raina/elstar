import ProductTypeList from "./components/ProductTypeList"
import { ProductTypeTableTools } from "./components/ProductTypeTableTools"


const ProductType = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Product Type</h3>
        <ProductTypeTableTools/>
    </div>
    <ProductTypeList/>
    </>
}

export default ProductType