import { injectReducer } from "@/store";
import { SubCategoryTable } from "./components/SubCategoryTable";
import reducer from './store/index.'

injectReducer('shopSubCategoryList', reducer)

const SubCategory = ()=>{

    return <>
        <SubCategoryTable/>
    </>
}

export default SubCategory;