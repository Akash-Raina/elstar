import ItemMasterList from "./components/ItemMasterList"
import { ItemMasterTableTools } from "./components/ItemMasterTableTools"

const ItemMaster = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Item Master</h3>
        <ItemMasterTableTools/>
    </div>
    <ItemMasterList/>
    </>
}

export default ItemMaster