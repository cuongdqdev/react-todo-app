import React, { Component } from 'react'

export class TodoList extends Component {
    _handleEdit = () => {
        this.props.openEditForm()
        this.props.editTask(this.props.taskName, this.props.getIndexTask)
    }

    _handleDelete = () => {
        this.props.deleteTask(this.props.taskName)
    }
    render() {
        return (
            <tr>
                <td>{this.props.taskName}</td>
                <td>
                    <button type="button" className="btn btn-outline-primary" onClick={this._handleEdit}><i className="far fa-edit"></i>Chỉnh sửa</button>
                </td>
                <td>
                    <button type="button" className="btn btn-outline-primary" onClick={this._handleDelete}><i className="fa fa-trash"></i>Xóa</button>
                </td>
            </tr>
        )
    }
}

export default TodoList
