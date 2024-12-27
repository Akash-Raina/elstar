import ItemMasterList from "./components/ItemMasterList"
import { ItemMasterTools } from "./components/ItemMasterTools"

const ItemMaster = ()=>{

    return <>
    <div className="flex justify-between mb-4">
        <h3>Supplier Type</h3>
        <ItemMasterTools/>
    </div>
    <ItemMasterList/>
</>
}

export default ItemMaster