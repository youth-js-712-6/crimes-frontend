import { Button, Flex, Table, TextField } from "@radix-ui/themes";
import axios from "axios"
import { useEffect, useState } from "react";

// "id": 25400,
// "name": "Brandon Montaluo",
// "license_id": 770897,
// "address_number": 1700,
// "address_street_name": "Sedgehurst Circle",
// "ssn": "622371888"

type Pessoa = {
    id: number;
    name: string;
    license_id: number;
    address_number: number;
    address_street_name: string;
    ssn: string;
}

const Pessoas = () => {
    const [pessoas, setPessoas] = useState<Pessoa[]>([])

    const [page, setPage] = useState(1)

    const [name, setName] = useState('')
    const [addressStreetName, setAddressStreetName] = useState('')

    const getPessoas = async () => {
        const response = await axios.get('https://crimes-api.pamplona.io/pessoas', {
            params: {
                page: page,
                name: name,
                address_street_name: addressStreetName
            }
        })
        setPessoas(response.data);
    }

    useEffect(function recuperarNovasPessoas() {
        getPessoas()
    }, [page, name, addressStreetName])
    
    useEffect(function resetarAPaginacaoAoAlterarFiltros() {
        setPage(1)
    }, [name, addressStreetName])
    
    return (
        <>
            <h1>Pessoas</h1>
            <Flex gap={'2'} mb={'2'}>
                <TextField.Root 
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Nome"
                />
                <TextField.Root 
                    onChange={(event) => setAddressStreetName(event.target.value)}
                    placeholder="Rua"
                />
            </Flex>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>CPF</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>CNH</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Rua</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Número</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {pessoas.map((pessoa) => (
                        <Table.Row>
                            <Table.Cell>{pessoa.id}</Table.Cell>
                            <Table.Cell>{pessoa.name}</Table.Cell>
                            <Table.Cell>{pessoa.ssn}</Table.Cell>
                            <Table.Cell>{pessoa.license_id}</Table.Cell>
                            <Table.Cell>{pessoa.address_street_name}</Table.Cell>
                            <Table.Cell>{pessoa.address_number}</Table.Cell>
                        </Table.Row>   
                    ))}
                </Table.Body>
            </Table.Root>
            <Flex gap={'2'} mt={'2'}>
                <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    Anterior
                </Button>

                {page}

                <Button onClick={() => setPage(page + 1)} disabled={pessoas.length === 0}>
                    Próxima
                </Button>
            </Flex>
        </>
    )
}

export default Pessoas
