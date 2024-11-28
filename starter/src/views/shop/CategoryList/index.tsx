import { injectReducer } from "@/store"
import { CategoryTable } from "./components/CategoryTable"
import reducer from "./store"
import CategoryTableTools from "./components/CategoryTableTools"

injectReducer('shopCategoryList',reducer)

const CategoryList = ()=>{


    return <>
            <div className="flex justify-between mb-4">
            <h3>Category List</h3>
            <CategoryTableTools/>
        </div>
        <CategoryTable/>
        </>
}

export default CategoryList