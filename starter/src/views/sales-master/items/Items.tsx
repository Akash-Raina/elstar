import ItemList from "./components/ItemsList"
import { ItemTableTools } from "./components/ItemTableTools"

const Items = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Items</h3>
        <ItemTableTools/>
    </div>
    <ItemList/>
    </>
}

export default Items