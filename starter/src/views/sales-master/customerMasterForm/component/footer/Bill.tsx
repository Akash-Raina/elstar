export const Bill = ()=>{

    return <div className="flex flex-col">
        <div className="flex font-semibold border-b-black border p-3">
            <span className="ml-4">Bill Type</span>
            <span className="ml-24">GLPL Code</span>
            <span className="ml-44">GLPL Name</span>
        </div>
        <div className="text-[#c6c6c6] flex pt-3">
            <span className="ml-4">DWGS Sale</span>
            <span className="ml-24">275</span>
            <span className="ml-44">DEBTORS-Grains Code (DWGS)</span>
        </div>
        <div className="text-[#c6c6c6] flex pb-3 mt-2">
            <span className="ml-4">DWGS Sale</span>
            <span className="ml-24">299</span>
            <span className="ml-44">DEBTORS-Grains Code (DWGS)</span>
        </div>  
    </div>
}