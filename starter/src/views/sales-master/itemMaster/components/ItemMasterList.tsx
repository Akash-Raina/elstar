import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"

type CountryType = {
    trans_id: number  
    item_name: number
    unit: string
    maintain_inventory: string
    status: string
}

const countryData = [
    {
        trans_id: 21,  
        item_name: 21,
        unit: 'x123',
        maintain_inventory: 'Yes',
        status: 'Active'
    },
    {
        trans_id: 57,  
        item_name: 57,
        unit: 'z369',
        maintain_inventory: 'No',
        status: 'Inactive'
    },
]
const ItemMasterList = ()=>{

    const columns: ColumnDef<CountryType>[] = useMemo(
        ()=>[
            {
                header: 'Trans Id',
                accessorKey: 'trans_id',
            },
            {
                header: 'Item Name',
                accessorKey: 'item_name',
            },
            {
                header: 'Unit',
                accessorKey: 'unit'
            },
            {
                header: 'Maintain Inventory',
                accessorKey: 'maintain_inventory',
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

export default ItemMasterList