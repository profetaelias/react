import React from 'react'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux';
import Todo from './todo';

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        
        return list.map(item => (
            <tr key={item._id}>
                <td className={item.done ? 'markedAsDone' : ''}>{item.description}</td>
                <td>{item.done ? 'Finalizado' : 'Pendente'}</td>
                <td>
                    <IconButton style="success" icon="check" hide={item.done} 
                        onClick={() => props.handleMarkAsDone(item)}/>
                    <IconButton style="warning" icon="undo" hide={!item.done}
                        onClick={() => props.handleMarkAsPending(item)}/>    
                    <IconButton style="danger" icon="trash-o" 
                        onClick={() => props.handleRemove(item)}/>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    list: state.todo.list    
})

export default connect(mapStateToProps)(TodoList)
