
import { SalesTableTools } from "./components/SalesTableTools"
import SalesList from "./components/SalesList"

const SalesInvoice = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Sales Invoice Bank Details</h3>
        <SalesTableTools/>
    </div>
    <SalesList/>
    </>
}

export default SalesInvoice