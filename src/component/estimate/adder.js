import React, { Component } from "react"

export default class Adder extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    onClickHandler() {
        this.props.deleteAction(this.props.id)
    }
    render() {
        return (
            <tr>
                <td>{this.props.product}</td>
                <td>{this.props.units}</td>
                <td>Null</td>
                <td>{this.props.gTotal}</td>
                <td class="fa fa-minus-circle text-danger"onClick = {()=>this.onClickHandler()}></td>
            </tr>
        )
    }
}