import React, {Component} from 'react'


export default class ComponenteClasse extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.valor || 'Nada informado'}</h1>
            </div>
        )
    }
}