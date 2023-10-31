export default function Dashboard() {
    return (
        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>Bezeichnung</th>
                <th>Preis</th>
                <th>Verfügbar</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Apfel</td>
                <td>1.99</td>
                <td>ja</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Birne</td>
                <td>2.99</td>
                <td>nein</td>
            </tr>
            </tbody>
        </table>
    );
}
