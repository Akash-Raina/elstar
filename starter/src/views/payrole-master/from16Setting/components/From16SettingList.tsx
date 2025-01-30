import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"
import { useNavigate } from "react-router-dom"
import useThemeClass from "@/utils/hooks/useThemeClass"
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"

type CountryType = {
    no: number  
    pan_deducator: number
    issuing_authority_name: number
    date: string
    status: string
}

const countryData = [
    {
        no: 1,  
        pan_deducator: 123,
        issuing_authority_name: 22,
        date: '01/02/24',
        status: 'Active'
    },
    {
        no: 2,  
        pan_deducator: 123,
        issuing_authority_name: 22,
        date: '05/09/24',
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
const From16SettingList = ()=>{

    const columns: ColumnDef<CountryType>[] = useMemo(
        ()=>[
            {
                header: 'No',
                accessorKey: 'no',
            },
            {
                header: 'Pan Deducator',
                accessorKey: 'pan_deducator',
            },
            {
                header: 'Issuing Authority Name',
                accessorKey: 'issuing_authority_name',
            },
            {
                header: 'Date',
                accessorKey: 'date',
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

export default From16SettingList