export const ScopeSupply = ()=>{

    return <div className="flex flex-col gap-2 text-[#787878] pl-4 pt-[7px] pb-[22px]">
        <span className="font-semibold">Description</span>
        <div className="flex gap-2">
            <input type="checkbox" />
            <label>Products</label>
        </div>
        <div className="flex gap-2">
            <input type="checkbox" />
            <label>By Product</label>
        </div>
        <div className="flex gap-2">
            <input type="checkbox" />
            <label>General</label>
        </div>
    </div>
}