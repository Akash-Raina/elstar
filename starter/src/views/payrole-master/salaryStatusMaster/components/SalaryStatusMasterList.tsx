import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"
import { useNavigate } from "react-router-dom"
import useThemeClass from "@/utils/hooks/useThemeClass"
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"

type CountryType = {
    no: number  
    status_code: number
    status_desc: number
    calculate_salary: number
    status: string
}

const countryData = [
    {
        no: 1,  
        status_code: 123,
        status_desc: 22,
        calculate_salary: 22,
        status: 'Active'
    },
    {
        no: 2,  
        status_code: 123,
        status_desc: 14,
        calculate_salary: 14,
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
const SalaryStatusMasterList = ()=>{

    const columns: ColumnDef<CountryType>[] = useMemo(
        ()=>[
            {
                header: 'No',
                accessorKey: 'no',
            },
            {
                header: 'Status Code',
                accessorKey: 'status_code',
            },
            {
                header: 'Status Desc.',
                accessorKey: 'status_desc',
            },
            {
                header: 'Calculate Salary',
                accessorKey: 'calculate_salary',
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

export default SalaryStatusMasterList