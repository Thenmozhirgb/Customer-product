import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class DailyDeliveryTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    deleteCustomer() {
        axios.delete('http://localhost:4000/Customers/delete-Customer/' + this.props.obj._id)
            .then((res) => {
                console.log('Customer successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{new Date().toLocaleString('en-US')}</td>
                <td>{this.props.obj.c_name}</td>
                <td>
                    <Button onClick={this.deleteCustomer} size="sm" variant="danger">Delivered</Button>
                </td>
            </tr>
        );
    }
}
// add details