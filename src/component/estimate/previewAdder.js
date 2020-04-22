import React, { Component } from 'react'

export default class PreviewAdder extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <tr>
                <td>{this.props.product}</td>
                <td>{this.props.units}</td>
                <td>{this.props.price}</td>
                <td>{Number(this.props.units) * Number(this.props.price)}</td>

            </tr>
        )
    }
}
