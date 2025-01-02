import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type ChallanList = {
    challan_code: string
    chalan_type: string
    order_no: number
    sales_type: string
}

const challanData = [
    {
        challan_code: "001",
        challan_type: "Cane handling & milling",
        order_no: 41,
        sales_type: "Plant & Machinery - Sugar",
    },
    {
        challan_code: "002",
        challan_type: "Boiling house & evoporation",
        order_no: 41,
        sales_type: "Plant & Machinery - Sugar",
    },
    {
        challan_code: "003",
        challan_type: "ETP",
        order_no: 41,
        sales_type: "Plant & Machinery - Sugar",
    },
    {
        challan_code: "004",
        challan_type: "CPU",
        order_no: 41,
        sales_type: "Plant & Machinery - Sugar",
    },
]
const ChallanList = ()=>{

    const columns: ColumnDef<ChallanList>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'challan_code',
            },
            {
                header: 'Member Type',
                accessorKey: 'challan_type',
            },
            {
                header: 'Order No',
                accessorKey: 'order_no'
            },
            {
                header: 'Sales Type',
                accessorKey: 'sales_type'
            }
        ],[]
    )

    return <>
        <DataTable
            columns={columns}
            data={challanData}
        />
    </>
}

export default ChallanList