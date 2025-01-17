import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"

type CountryType = {
    code: number  
    product_name: number
    type: string
    status: string
}

const countryData = [
    {
        code: 5001,  
        product_name: 'Sugar',
        type: 'Product',
        status: 'Active'
    },
    {
        code: 5002,  
        product_name: 'Ethanol',
        type: 'By Product',
        status: 'Inactive'
    }
]
const ProductList = ()=>{

    const columns: ColumnDef<CountryType>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'code',
            },
            {
                header: 'Product Name',
                accessorKey: 'product_name',
            },
            {
                header: 'Type',
                accessorKey: 'type'
            },
            {
                header: 'Status',
                accessorKey: 'status',
                cell:(props)=>{
                    const row = props.row.original;
                    return <div>
                        {   row.status === 'Active' ? <div className="text-red-500">{row.status}</div>
                            : <div className="text-green-600">
                                {row.status}
                            </div>
                        }
                    </div>
                }, 
            }
        ],[]
    )

    return <>
        <DataTable
            columns={columns}
            data={countryData}
        />
    </>
}

export default ProductList