import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type CountryList = {
    country_code: string
    country_name: string
}

const countryData = [
    {
        country_code: 1,
        country_name: 'India'
    },
    {
        country_code: 2,
        country_name: 'England'
    },
    {
        country_code: 3,
        country_name: 'Bangladesh'
    }
]
const CountryList = ()=>{

    const columns: ColumnDef<CountryList>[] = useMemo(
        ()=>[
            {
                header: 'Country Code',
                accessorKey: 'country_code',
            },
            {
                header: 'Country Name',
                accessorKey: 'country_name',
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

export default CountryList