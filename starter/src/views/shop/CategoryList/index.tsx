import { injectReducer } from "@/store"
import { CategoryTable } from "./components/CategoryTable"
import reducer from "./store"

injectReducer('shopCategoryList',reducer)

const CategoryList = ()=>{


    return <>
            <CategoryTable/>
    </>
}

export default CategoryList