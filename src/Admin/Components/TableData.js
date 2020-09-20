import React from 'react';
import { Container, Table, Button } from 'reactstrap';

class TableData extends React.Component {
    render() {
        const { data, key, headTable } = this.props.list;
        return (
            <Container className="mt-5">
                <Table>
                    <thead>
                        <tr>
                            {headTable.map(item => {
                                return (
                                    <th>{item}</th>
                                )
                            })}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => {
                            return (
                                <tr>
                                    {key.map(value => {
                                        return (
                                            <td>{item[value]}</td>
                                        )
                                    })}
                                    <td>
                                        <Button size="sm" color="warning" onClick={() => this.props.edit(item[key[0]])}>EDIT</Button> &nbsp;
                                        <Button size="sm" color="danger" onClick={() => this.props.delete(item[key[0]])}>DELETE</Button> &nbsp;
                                        <Button size="sm" color="secondary" >DETAIL</Button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default TableData;