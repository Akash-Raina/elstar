import  ProductTable  from "./components/ProductTable"
import { ProductTableTools } from "./components/ProductTableTools"
import { injectReducer } from "@/store"
import reducer from "./store"

injectReducer("salesProductList", reducer)

/** Example purpose only */
const ProductList = () => {

    return <>
        <div className="flex justify-between mb-4">
            <h3>Products</h3>
            <ProductTableTools/>
        </div>
        <ProductTable/>
    </>
}

export default ProductList
