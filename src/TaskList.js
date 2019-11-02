import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTask from './AddTask';
import EditTask from './EditTask';

export class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: ['Nhiệm vụ 1', 'Nhiệm vụ 2'],
            showAddForm: false,
            showEditForm: false,
            editTask: { id: -1, taskName: '' }
        }
    }
    // Thêm task mới
    setStatus = () => {
        this.setState({
            showAddForm: true,
        })
    }
    closeForm = () => {
        this.setState({
            showAddForm: false,
            showEditForm: false,
        })
    }
    addTask = (taskName) => {

        const tasks = [...this.state.tasks, taskName]
        this.setState({
            tasks: tasks
        })
        //this.state.tasks.push(taskName)
        this.forceUpdate()
    }

    // Chỉnh sửa task
    openEditForm = () => {
        this.setState({
            showEditForm: true
        })
    }
    editTask = (taskName, index) => {
        this.setState({ editTask: { id: index, taskName: taskName } })
    }
    doEdit = (id, taskName) => {
        const tasks = [...this.state.tasks];
        tasks[id] = taskName;
        this.setState({
            tasks: tasks
        })
        //this.state.tasks[id] = taskName
        this.forceUpdate()
    }

    // Xóa task
    deleteTask = (taskName) => {
        const filteredTask = this.state.tasks.filter(task => {
            return task !== taskName
        })
        this.setState({
            tasks: filteredTask
        })
    }

    render() {
        if (this.state.showAddForm) return (<AddTask addTask={this.addTask} closeForm={this.closeForm} />)
        else if (this.state.showEditForm) return (<EditTask doEdit={this.doEdit} closeForm={this.closeForm} editItem={this.state.editTask} />)
        else return (
            <div className="container">
                <h1>Tạo ứng dụng Todo với ReactJS</h1>
                <br />
                <br />
                <button type="button" className="btn btn-success" onClick={this.setStatus} >@ Thêm task</button>
                <h2>Danh sách các task</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Tên của task</th>
                            <th>Chỉnh sửa</th>
                            <th>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tasks.map((taskName, index) => {
                                return <TodoList
                                    key={`info-${taskName}`} taskName={taskName}
                                    openEditForm={this.openEditForm}
                                    getIndexTask={index}
                                    editTask={this.editTask}
                                    deleteTask={this.deleteTask}
                                />
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskList