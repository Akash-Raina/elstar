import { injectReducer } from "@/store"
import { ShopProductTable } from "./components/ShopProductTable"
import reducer from "./store"

injectReducer("shopProductList", reducer)

 const ProductList = ()=>{
    return <>
        <ShopProductTable/>
    </>
}

export default ProductList