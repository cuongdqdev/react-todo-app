import React, { Component } from 'react'

export class EditTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editItem: this.props.editItem
        }
    }
    _handleEditTask = () => {
        this.props.doEdit(this.state.editItem.id, this.state.editItem.taskName)
        this.props.closeForm()
    }
    _handleChangeName = (e) => {
        this.setState({
            editItem: { id: this.props.editItem.id, taskName: e.target.value }
        })
    }
    render() {
        return (
            <>
                <div className="container">
                    <h2>Chỉnh sửa task</h2>
                    <div className="form-group">
                        <label>Tên của task</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Nhập vào tên của task"
                            defaultValue={this.state.editItem.taskName}
                            onChange={this._handleChangeName} />
                    </div>
                    <button type="submit" style={{ marginRight: 5 + 'px' }} className="btn btn-warning" onClick={this._handleEditTask}>@ Chỉnh sửa</button>
                    <button type="button" className="btn btn-primary" onClick={this.props.closeForm}>Trở về</button>
                </div>
            </>
        )
    }
}

export default EditTask
