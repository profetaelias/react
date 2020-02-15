import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

//5
import { connect } from 'react-redux' 

//16
import { bindActionCreators } from 'redux'
import { getSummary } from './dashboardActions'

class Dashboard extends Component {

    //19
    componentWillMount() {
        this.props.getSummary()
    }

    render() {        
        //8
        const {credit, debt} = this.props.summary

        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'/>
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' 
                            //9
                            value={`R$ ${credit}`} text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' 
                            //9
                            value={`R$ ${debt}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' 
                            //9
                            value={`R$ ${credit-debt}`} text='Valor Consolidado' />
                    </Row>    
                </Content>
            </div>
        )
    }
}

//6
const mapStateToProps = state => ({summary: state.dashboard.summary})

//17
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

//7
//export default connect(mapStateToProps)(Dashboard)

//18
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)