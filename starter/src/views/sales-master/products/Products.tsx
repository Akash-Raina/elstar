import ProductList from "./components/ProductList"
import { ProductTableTools } from "./components/ProductTableTools"

const Products = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Products</h3>
        <ProductTableTools/>
    </div>
    <ProductList/>
    </>
}

export default Products