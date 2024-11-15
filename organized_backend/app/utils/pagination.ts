export const pagination = (index:string, size:string)=>{
    const pageIndex = parseInt(index);
    const limit = parseInt(size);
    const offset = (pageIndex - 1) * limit

    return {
        pageIndex, limit, offset
    }
}