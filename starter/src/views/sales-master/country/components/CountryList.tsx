import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"

type CountryType = {
    country_code: number  
    country_name: string
}

const countryData = [
    {
        country_code: 1,
        country_name: 'India',
    },
    {
        country_code: 2,
        country_name: 'India',
    },
]
const CountryList = ()=>{

    const columns: ColumnDef<CountryType>[] = useMemo(
        ()=>[
            {
                header: 'Country Code',
                accessorKey: 'country_code',
            },
            {
                header: 'Country Name',
                accessorKey: 'country_name',
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

export default CountryList