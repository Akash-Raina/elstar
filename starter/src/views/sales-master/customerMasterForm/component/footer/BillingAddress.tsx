export const BillingAddress = ()=>{

    return <div>
        <div className="grid grid-cols-3 justify-between items-center pl-5 gap-3 py-4 font-semibold border-b">
            <div>
                <label>Address</label>
                <input type="text" className="outline-none border rounded-md w-[196px] h-[33px] ml-[11px]"/>
            </div>
            <div>
                <label>District</label>
                <input type="text" className="outline-none border rounded-md w-[196px] h-[33px] ml-[11px]"/>
            </div>
            <div>
                <label>State</label>
                <input type="text" className="outline-none border rounded-md w-[196px] h-[33px] ml-[11px]"/>
            </div>
            <div className="mt-4">
                <label>Country</label>
                <input type="text" className="outline-none border rounded-md w-[196px] h-[33px] ml-[11px]"/>
            </div>
        </div>
        <div className="grid grid-cols-3 justify-between items-center ml-5 gap-3 my-4 font-semibold">
            <div>
                <label>Pincode</label>
                <input type="text" className="outline-none border rounded-md w-[196px] h-[33px] ml-[12px]"/>
            </div>
            <div>
                <label>Mobile</label>
                <input type="text" className="outline-none border rounded-md w-[196px] h-[33px] ml-[11px]"/>
            </div>
            <div>
                <label>Fax</label>
                <input type="text" className="outline-none border rounded-md w-[196px] h-[33px] ml-[11px]"/>
            </div>
            <div className="mt-4">
                <label>Extension</label>
                <input type="text" className="outline-none border rounded-md w-[196px] h-[33px] ml-[4px]"/>
            </div>
            <div>
                <label>Phone</label>
                <input type="text" className="outline-none border rounded-md w-[196px] h-[33px] ml-[11px]"/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" className="outline-none border rounded-md w-[196px] h-[33px] ml-[11px]"/>
            </div>
            <div className="mt-4">
                <label>Person</label>
                <input type="text" className="outline-none border rounded-md w-[196px] h-[33px] ml-[19px]"/>
            </div>
        </div>
    </div>
}