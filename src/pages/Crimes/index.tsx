import { Button, Flex, Table, TextField } from "@radix-ui/themes"
import axios from "axios"
import { useEffect, useState } from "react"

type Crime = {
    date: string;
    city: string;
    type: string;
    description: string;
}

const Crimes = () => {
    const [crimes, setCrimes] = useState<Crime[]>([])
    
    const [page, setPage] = useState(1)

    const [city, setCity] = useState('')
    const [type, setType] = useState('')

    const getCrimes = async () => {
        const crimes = await axios.get('https://crimes-api.pamplona.io/crimes', {
            params: {
                page: page,
                city: city,
                type: type
            }
        })
        setCrimes(crimes.data)
    }

    useEffect(() => {
        getCrimes()
    }, [page, city, type])

    useEffect(() => {
        setPage(1)
    }, [city, type])

    return (
        <>
            <h1>Crimes</h1>
            <Flex gap='2' my='2'>
                <TextField.Root 
                    placeholder='city' 
                    onChange={(event) => setCity(event.target.value)} 
                />
                <select onChange={(event) => setType(event.target.value)} >
                    <option value="">Tipo</option>
                    <option value="theft">Assalto</option>
                    <option value="murder">Assassinato</option>
                </select>
            </Flex>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>data</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>cidade</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>tipo</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>descrição</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {crimes.map((crime) => (
                        <Table.Row>
                            <Table.Cell>{crime.date}</Table.Cell>
                            <Table.Cell>{crime.city}</Table.Cell>
                            <Table.Cell>{crime.type}</Table.Cell>
                            <Table.Cell>{crime.description}</Table.Cell>
                        </Table.Row>   
                    ))}
                </Table.Body>
            </Table.Root>

            <Flex gap={'2'} mt={'2'}>
                <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    Anterior
                </Button>

                {page}

                <Button onClick={() => setPage(page + 1)} disabled={crimes.length === 0}>
                    Próxima
                </Button>
            </Flex>
        </>
    )
}

export default Crimes