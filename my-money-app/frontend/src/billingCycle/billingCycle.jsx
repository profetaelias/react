import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectTab, showTabs } from '../common/tab/tabActions'
import List from '../billingCycle/billingCycleList'

export class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate');
    }
    
    render() {
        return (
            <div>
                <ContentHeader title='Ciclo de Pagamentos' small='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                           <TabHeader label='Listar' icon='bars' target='tabList'/>
                           <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                           <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
                           <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <List/>
                            </TabContent>
                            <TabContent id="tabCreate">
                                
                            </TabContent>
                            <TabContent id="tabUpdate">
                                
                            </TabContent>
                            <TabContent id="tabDelete">
                                
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)