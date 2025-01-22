import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"
import { useNavigate } from "react-router-dom"
import useThemeClass from "@/utils/hooks/useThemeClass"
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"

type CountryType = {
    no: number  
    applicable_income_amount_from: number
    applicable_income_amount_to: number
    status: string
}

const countryData = [
    {
        no: 1,  
        applicable_income_amount_from: 5000,
        applicable_income_amount_to: 5000,
        status: 'Active'
    },
    {
        no: 2,  
        applicable_income_amount_from: 10000.00,
        applicable_income_amount_to: 10000.00,
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
const DeductionHeadandSlabList = ()=>{

    const columns: ColumnDef<CountryType>[] = useMemo(
        ()=>[
            {
                header: 'No',
                accessorKey: 'no',
            },
            {
                header: 'Applicable Income Amount From',
                accessorKey: 'applicable_income_amount_from',
            },
            {
                header: 'Applicable Income Amount to',
                accessorKey: 'applicable_income_amount_to',
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

export default DeductionHeadandSlabList