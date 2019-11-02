import React, { Component } from 'react';
import TaskList from './TaskList';

export class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTaskList: false,
            taskName: ''
        }
    }

    _handleChangeName = (e) => {
        this.setState({
            taskName: e.target.value
        })
    }

    _handleBackToList = () => {
        this.props.closeForm();
    }

    _handleAddTask = (e) => {
        this.props.addTask(this.state.taskName)
        this._handleBackToList()
    }

    render() {
        if (this.state.showTaskList) return (<TaskList />)
        else return (
            <>
                <div className="container">
                    <h2>Thêm task mới</h2>
                    <div className="form-group">
                        <label>Tên task</label>
                        <input type="text" className="form-control" placeholder="Nhập vào tên của task" onChange={this._handleChangeName} />
                    </div>

                    <button type="submit" style={{ marginRight: 5 + 'px' }} className="btn btn-default" onClick={this._handleAddTask}>Thêm mới</button>
                    <button type="button" className="btn btn-default" onClick={this._handleBackToList}>Trở về</button>
                </div>
            </>
        )
    }
}

export default AddTask
