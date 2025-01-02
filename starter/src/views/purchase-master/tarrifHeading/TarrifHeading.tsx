import TarrifList from "./components/TarrifList"
import { TarrifTableTools } from "./components/TarrifTableTools"

const TarrifHeading = ()=>{

    return <>
    <div className="flex justify-between mb-4">
        <h3>Tarrif Heading Desc</h3>
        <TarrifTableTools/>
    </div>
    <TarrifList/>
</>
}

export default TarrifHeading