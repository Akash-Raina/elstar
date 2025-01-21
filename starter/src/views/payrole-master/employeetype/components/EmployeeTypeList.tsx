import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"
import { useNavigate } from "react-router-dom"
import useThemeClass from "@/utils/hooks/useThemeClass"
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"

type CountryType = {
    no: number  
    type_code: number
    description: string
    status: string
}

const countryData = [
    {
        no: 1,
        type_code: 123,
        description: 'Dummy Name',
        status: 'Active'
    },
    {
        no: 1,
        type_code: 123,
        description: 'Dummmy Name',
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
const EmployeeTypeList = ()=>{

    const columns: ColumnDef<CountryType>[] = useMemo(
        ()=>[
            {
                header: 'No',
                accessorKey: 'no',
            },
            {
                header: 'Type Code',
                accessorKey: 'type_code',
            },
            {
                header: 'Description',
                accessorKey: 'description',
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

export default EmployeeTypeList