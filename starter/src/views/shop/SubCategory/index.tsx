import { injectReducer } from "@/store";
import { SubCategoryTable } from "./components/SubCategoryTable";
import reducer from './store/index.'
import SubCategoryTableTools from "./components/SubCategoryTableTools";

injectReducer('shopSubCategoryList', reducer)

const SubCategory = ()=>{

    return <>
            <div className="flex justify-between mb-4">
            <h3>SubCategory List</h3>
            <SubCategoryTableTools/>
        </div>
        <SubCategoryTable/>
        </>
}

export default SubCategory;