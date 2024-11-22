import { injectReducer } from "@/store"
import { ShopProductTable } from "./components/ShopProductTable"
import reducer from "./store"
import { ProductTableTools } from "./components/ProductTableTools"

injectReducer("shopProductList", reducer)

 const ProductList = ()=>{
    return <>
        <div className="flex justify-between mb-4">
            <h3>Product List</h3>
            <ProductTableTools/>
        </div>
        <ShopProductTable/>
    </>
}

export default ProductList