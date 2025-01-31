import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"
import { useNavigate } from "react-router-dom"
import useThemeClass from "@/utils/hooks/useThemeClass"
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"

type CountryType = {
    no: number  
    leave_type: number
    short_name: number
    min_no: number
    max_no: number
    status: string
}

const countryData = [
    {
        no: 1,
        leave_type: 123,
        short_name: 22,
        min_no: 22,
        max_no: 22,
        status: 'Active'
    },
    {
        no: 2,
        leave_type: 123,
        short_name: 14,
        min_no: 14,
        max_no: 14,
        status: 'Inactive'
    },
]


const ActionColumn = ({row}: {row: any})=>{
    const navigate = useNavigate();
    const { textTheme } = useThemeClass()

    const onEdit = ()=>{

        console.log(`/category/editcategory/${row.id}`)
    }

    const onDelete = ()=>{
            console.log("testing delete")
    }

    return (
        <>
        <div className="flex justify-end text-lg">
            <span
                className={`cursor-pointer p-2 hover:${textTheme}`}
                onClickCapture={(e)=>{
                    e.stopPropagation();
                    onEdit()
                }}
            >
                <HiOutlinePencil />
            </span>
            <span
                className="cursor-pointer p-2 hover:text-red-500"
                onClickCapture={(e)=>{
                    e.stopPropagation();
                    onDelete()
                }}
            >
                <HiOutlineTrash />
            </span>
        </div>
            
        </>
        
    )

}
const LeaveTypeList = ()=>{

    const columns: ColumnDef<CountryType>[] = useMemo(
        ()=>[
            {
                header: 'No',
                accessorKey: 'no',
            },
            {
                header: 'Leave Type',
                accessorKey: 'leave_type',
            },
            {
                header: 'Short Name',
                accessorKey: 'short_name',
            },
            {
                header: 'Min.No',
                accessorKey: 'min_no',
            },
            {
                header: 'Max No',
                accessorKey: 'max_no',
            },
            {
                header: 'Status',
                accessorKey: 'status',
                cell:(props)=>{
                    const row = props.row.original;
                    return <div>
                        {   row.status === 'Inactive' ? <div className="text-red-500">{row.status}</div>
                            : <div className="text-green-600">
                                {row.status}
                            </div>
                        }
                    </div>
                }
            },
            {
                header: '',
                id: 'action',
                cell: (props:any)=> <ActionColumn row={props.row.original}/>
            },
        ],[]
    )

    return <>
        <DataTable
            columns={columns}
            data={countryData}
        />
    </>
}

export default LeaveTypeList