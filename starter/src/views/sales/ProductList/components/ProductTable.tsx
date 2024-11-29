import { ColumnDef, DataTable } from "@/components/shared"
import Avatar from "@/components/ui/Avatar"
import { FiPackage } from 'react-icons/fi'
import { useEffect, useMemo } from "react"
import Badge from "@/components/ui/Badge"
import { getProducts, setSelectedProduct, setTableData, toggleDeleteConfirmation, useAppDispatch, useAppSelector } from "../store"
import cloneDeep  from "lodash/cloneDeep"
import { ProductDeleteConfirmation } from "./ProductDeleteConfirmation"
import useThemeClass from "@/utils/hooks/useThemeClass"
import { useNavigate } from "react-router-dom"
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"



type Product = {
    product_id: string
    product_name: string
    productCode: string
    img: string
    categories: string
    price: number
    stock: number
    status: number
}

const inventoryStatusColor: Record<
    number,
    {
        label: string
        dotClass: string
        textClass: string
    }
> = {
    0: {
        label: 'In Stock',
        dotClass: 'bg-emerald-500',
        textClass: 'text-emerald-500',
    },
    1: {
        label: 'Limited',
        dotClass: 'bg-amber-500',
        textClass: 'text-amber-500',
    },
    2: {
        label: 'Out of Stock',
        dotClass: 'bg-red-500',
        textClass: 'text-red-500',
    },
}

const ActionColumn = ({row}: {row: Product})=>{
    const dispatch = useAppDispatch()
    const { textTheme } = useThemeClass()
    const navigate = useNavigate()

    const onEdit = ()=>{
        navigate(`/sales-menu-product-edit/${row.product_id}`)
    }

    const onDelete = ()=>{
        dispatch(toggleDeleteConfirmation(true))
        dispatch(setSelectedProduct(row.product_id))
    }

    return (
        <div className="flex justify-end text-lg">
            <span
                className={`cursor-pointer p-2 hover:${textTheme}`}
                onClick={onEdit}
            >
                <HiOutlinePencil />
            </span>
            <span
                className="cursor-pointer p-2 hover:text-red-500"
                onClick={onDelete}
            >
                <HiOutlineTrash />
            </span>
        </div>
    )

}

const ProductColumn = ({ row }: { row: Product }) => {
        const avatar = row.img ? (
            <Avatar src={row.img} />
        ) : (
            <Avatar icon={<FiPackage />} />
        )
    
        return (
            <div className="flex items-center">
                {avatar}
                <span className={`ml-2 rtl:mr-2 font-semibold`}>{row.product_name}</span>
            </div>
        )
}


const ProductTable = () => {
    
        const dispatch = useAppDispatch()

        const { pageSize, pageIndex, total, query} = useAppSelector(
            (state) => state.salesProductList.data.tableData
        )
        const loading = useAppSelector(
            (state) => state.salesProductList.data.loading
        )
    
        const data = useAppSelector(            
            (state) => state.salesProductList.data.productList
        )
    
    
        useEffect(() => {
            dispatch(getProducts(tableData))

            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [pageIndex, pageSize,total])
    
        const tableData = useMemo(
            () => ({pageSize, pageIndex, total, query}),
            [pageSize, pageIndex, total, query]
        )
        
      


    const columns: ColumnDef<Product>[] = useMemo(
        ()=>[
            {
                header: 'Name',
                accessorKey: 'product_name',
                cell:(props)=>{
                    const row = props.row.original
                    return <ProductColumn row={row}/>
                },
            },
            {
                header: 'Category',
                accessorKey: 'categories',
                cell: (props) => {
                    const row = props.row.original
                    return <span className="capitalize">{row.categories}</span>
                },
            },
            {
                header: 'Quantity',
                accessorKey: 'sku',
                sortable: true,

            },
            {
                header: 'Status',
                accessorKey: 'status',
                cell: (props) => {
                    const { status } = props.row.original
                    return (
                        <div className="flex items-center gap-2">
                            <Badge
                                className={
                                    inventoryStatusColor[status].dotClass
                                }
                            />
                            <span
                                className={`capitalize font-semibold ${inventoryStatusColor[status].textClass}`}
                            >
                                {inventoryStatusColor[status].label}
                            </span>
                        </div>
                    )
                },
            },
            {
                header: 'Price',
                accessorKey: 'price',
                cell: (props) => {
                    const { price } = props.row.original
                    return <span>${price}</span>
                },
            },
            {
                header: '',
                id: 'action',
                cell: (props)=> <ActionColumn row={props.row.original}/>
            }
        ],[]
    )

    const onPaginationChange = (page: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageIndex = page
        dispatch(setTableData(newTableData))
    }

    const onSelectChange = (value: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageSize = Number(value)
        newTableData.pageIndex = 1
        dispatch(setTableData(newTableData))
    }

    return(
        <>

            <DataTable 
            columns={columns}
            data={data}
            loading = {loading}
            pagingData={{
                total:tableData.total as number,
                pageSize:tableData.pageSize as number,
                pageIndex: tableData.pageIndex as number
            }}
            onPaginationChange={onPaginationChange}
            onSelectChange={onSelectChange}
            />
            <ProductDeleteConfirmation/>
        </>
    )
}

export default ProductTable

