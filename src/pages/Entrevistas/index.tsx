import { Flex, Table, TextField } from "@radix-ui/themes";
import axios from "axios"
import { useEffect, useState } from "react";

// "id": 25400,
// "name": "Brandon Montaluo",
// "license_id": 770897,
// "address_number": 1700,
// "address_street_name": "Sedgehurst Circle",
// "ssn": "622371888"

type Entrevista = {
    person_id: number;
    transcript: string;
}

const Entrevistas = () => {
    const [entrevistas, setEntrevistas] = useState<Entrevista[]>([])

    const [id, setId] = useState('')

    const getEntrevistas = async () => {
        const response = await axios.get('https://crimes-api.pamplona.io/entrevistas', {
            params: {
                person_id: id
            }
        })
        setEntrevistas(response.data);
    }

    useEffect(() => {
        getEntrevistas()
    }, [id])

    return (
        <>
            <h1>Entrevistas</h1>
            <Flex gap='2' my='2'>
                <TextField.Root 
                    placeholder='id da pessoa' 
                    onChange={(event) => setId(event.target.value)} 
                />
            </Flex>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Id da Pessoa</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Transcrição</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {entrevistas.map((entrevista) => (
                        <Table.Row>
                            <Table.Cell>{entrevista.person_id}</Table.Cell>
                            <Table.Cell>{entrevista.transcript}</Table.Cell>
                        </Table.Row>   
                    ))}
                </Table.Body>
            </Table.Root>
        </>
    )
}

export default Entrevistas
