import { Table } from "@radix-ui/themes";
import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { NotesContext } from "../../contexts/NotesContext";

// "id":100280,
// "age":72,
// "height":57,
// "eye_color":"brown",
// "hair_color":"red",
// "gender":"male",
// "plate_number":"P24L4U",
// "car_make":"Acura",
// "car_model":"MDX"

type Carteira = {
    id: number;
    age: number;
    height: number;
    eye_color: string;
    hair_color: string;
    gender: string;
    plate_number: string;
    car_make: string;
    car_model: string;
}

const Carteiras = () => {
    const [carteiras, setCarteiras] = useState<Carteira[]>([])

    const [plate, setPlate] = useState('')

    const getCarteiras = async () => {
        const response = await axios.get('https://crimes-api.pamplona.io/carteiras', {
            params: {
                plate_number: plate
            }
        })
        setCarteiras(response.data);
    }

    useEffect(() => {
        getCarteiras()
    }, [plate])

    return (
        <>
            <h1>Carteiras</h1>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Idade</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Altura</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Cor dos Olhos</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Cor do Cabelo</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Gênero</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Marca</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Modelo</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Placa</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {carteiras.map((carteira) => (
                        <Table.Row>
                            <Table.Cell>{carteira.id}</Table.Cell>
                            <Table.Cell>{carteira.age}</Table.Cell>
                            <Table.Cell>{carteira.height}</Table.Cell>
                            <Table.Cell>{carteira.eye_color}</Table.Cell>
                            <Table.Cell>{carteira.hair_color}</Table.Cell>
                            <Table.Cell>{carteira.gender}</Table.Cell>
                            <Table.Cell>{carteira.car_make}</Table.Cell>
                            <Table.Cell>{carteira.car_model}</Table.Cell>
                            <Table.Cell>{carteira.plate_number}</Table.Cell>
                        </Table.Row>   
                    ))}
                </Table.Body>
                </Table.Root>
        </>
    )
}

export default Carteiras
