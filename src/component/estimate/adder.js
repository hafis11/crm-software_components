import React, { Component } from "react"

export default class Adder extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    onClickHandler() {
        this.props.deleteAction(this.props.deleteID)
    }
    render() {
        return (
            <tr>
                <td>{this.props.product}</td>
                <td>{this.props.units}</td>
                <td>{this.props.price}</td>
                <td>{Number(this.props.units) * Number(this.props.price)}</td>
                <td class="fa fa-minus-circle text-danger"onClick = {()=>this.onClickHandler()}></td>
            </tr>
        )
    }
}