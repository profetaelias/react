import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import {logout} from '../../auth/authActions'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    changeOpen() {
        this.setState({open: !this.state.open})
    }

    render() {
        const {name, email} = this.props.user
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li onMouseLeave={() => this.changeOpen()}
                        className={`dropdown user user-menu ${this.state.open ? 'open' : ''}`}>
                            <a href="javascript:;" onClick={() => this.changeOpen()}
                                aria-expanded={this.state.open ? 'true' : 'false'}
                                className="dropdown-toggle"
                                data-toggle="dropdown">
                                    <img src="https://media.licdn.com/dms/image/C4D03AQEgVU5JGcz2Aw/profile-displayphoto-shrink_200_200/0?e=1580342400&v=beta&t=GHeVBjzYTxKt3SZRMMzmGt973tJg0Gr9hcX39ScBHkI"
                                        className="user-image" alt="User Image"/> 
                                    <span className="hidden-xs">{name}</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="user-header">
                                    <img src="https://media.licdn.com/dms/image/C4D03AQEgVU5JGcz2Aw/profile-displayphoto-shrink_200_200/0?e=1580342400&v=beta&t=GHeVBjzYTxKt3SZRMMzmGt973tJg0Gr9hcX39ScBHkI"
                                        className="img-circle" alt="Usuário" />
                                    <p>{name}<small>{email}</small></p> 
                                </li>
                                <li className="user-footer">
                                    <div className="pull-right">
                                        <a href="#" onClick={this.props.logout}
                                        className="btn btn-default btn-flat">Sair</a>
                                    </div>
                                </li>
                            </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({user: state.auth.user})
const mapDispatchToProps = dispatch => bindActionCreators({logout}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)