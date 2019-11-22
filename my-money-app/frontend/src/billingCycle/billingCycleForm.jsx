import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleActions'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {

    calculateSummary(debts, credits) {
        const sum = (t, v) => t + v
        
        return {
            sumOfDebts: debts ? debts.map(d => +d.value || 0).reduce(sum) : 0,
            sumOfCredits: credits ? credits.map(c => +c.value || 0).reduce(sum) : 0
        }
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfDebts, sumOfCredits } = this.calculateSummary(debts, credits)
        
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput} 
                        label='Nome' cols='12 4' placeholder='Informe o nome' readOnly={readOnly}/>
                    <Field name="month" component={LabelAndInput} type='number'
                        label='Mês' cols='12 4' placeholder='Informe o mês' readOnly={readOnly}/>
                    <Field name="year" component={LabelAndInput} type='number'
                        label='Ano' cols='12 4' placeholder='Informe o ano' readOnly={readOnly}/>
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    
                    <ItemList cols='12 6' list={credits} readOnly={readOnly} titulo='Créditos' field='credits' showStatus={false}/>
                    <ItemList cols='12 6' list={debts} readOnly={readOnly} titulo='Débitos' field='debts' showStatus={true}/>
                </div>
                <div className="box-footer">
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)