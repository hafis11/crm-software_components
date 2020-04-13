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
                <td>Null</td>
                <td>{this.props.gTotal}</td>
            </tr>
        )
    }
}
