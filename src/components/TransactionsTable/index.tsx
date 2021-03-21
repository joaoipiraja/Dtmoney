import { Container } from "./styles";


export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="title">Desenvolvimento de website</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento 👨‍💻</td>
                        <td>12/03/2021</td>
                    </tr>

                    <tr>
                        <td className="title">Aluguel</td>
                        <td className="withdraw">- R$ 2.000</td>
                        <td>Casa 🏠</td>
                        <td>12/03/2021</td>
                    </tr>
                </tbody>

            </table>
        </Container>
    );

}