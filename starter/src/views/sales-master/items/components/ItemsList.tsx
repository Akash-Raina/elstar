import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"

type CountryType = {
    code: number  
    item_name: number
    type: string
    status: string
}

const countryData = [
    {
        code: 5001,  
        item_name: 'Sugar',
        type: 'Product',
        status: 'Active'
    },
    {
        code: 5002,  
        item_name: 'Ethanol',
        type: 'By Product',
        status: 'Inactive'
    }
]
const ItemList = ()=>{

    const columns: ColumnDef<CountryType>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'code',
            },
            {
                header: 'Item Name',
                accessorKey: 'item_name',
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

export default ItemList