import { CountryTableTools } from "@/views/purchase-master/countryMaster/components/CountryTableTools"
import CountryList from "./components/CountryList"

const Country = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Country Master</h3>
        <CountryTableTools/>
    </div>
    <CountryList/>
    </>
}

export default Country