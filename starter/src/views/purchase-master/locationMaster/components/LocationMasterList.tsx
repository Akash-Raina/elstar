
import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type LocationMasterListType = {
    sub_code: number
    location_head_desc: string
    close_flag: string
}

const mainData = [
    {
        sub_code: '0001001',
        location_head_desc: 'Cane weigh bridge',
        close_flag: 'No'
    },
    {
        sub_code: '0001002',
        location_head_desc: 'Truck tippler 1',
        close_flag: 'No'
    },
    {
        sub_code: '0001003',
        location_head_desc: 'Auxilary cane carrier',
        close_flag: 'No'
    },
    {
        sub_code: '0001004',
        location_head_desc: 'Main cane carrier',
        close_flag: 'No'
    },
]
const LocationMasterList = ()=>{

    const columns: ColumnDef<LocationMasterListType>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'sub_code',
            },
            {
                header: 'Issue type name',
                accessorKey: 'location_head_desc',
            },
            {
                header: 'Type',
                accessorKey: 'close_flag'
            }
        ],[]
    )

    return <>
        <DataTable
            columns={columns}
            data={mainData}
        />
    </>
}

export default LocationMasterList