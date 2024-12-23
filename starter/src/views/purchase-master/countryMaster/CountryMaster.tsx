import CountryList from "./components/CountryList"
import { CountryTableTools } from "./components/CountryTableTools"

const CountryMaster = ()=>{

    return <>
        <div className="flex justify-between mb-4">
            <h3>Country Master</h3>
            <CountryTableTools/>
        </div>
        <CountryList/>
    </>
}

export default CountryMaster