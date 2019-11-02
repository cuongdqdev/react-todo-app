import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTask from './AddTask'

export class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: ['Nhiệm vụ 1', 'Nhiệm vụ 2'],
            showAddForm: false,
        }
    }

    setStatus = () => {
        this.setState({
            showAddForm: true,
        })
    }
    closeForm = () => {
        this.setState({
            showAddForm: false,
        })
    }
    addTask = (taskName) => {
        this.state.tasks.push(taskName)
        this.forceUpdate()
    }

    render() {
        if (this.state.showAddForm) return (<AddTask addTask={this.addTask} closeForm={this.closeForm} />)
        else return (
            <div className="container">
                <h1>Tạo ứng dụng Todo với ReactJS</h1>
                <br />
                <br />
                <button type="button" className="btn btn-outline-primary" onClick={this.setStatus} >@ Thêm task</button>
                <h2>Danh sách các task</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Tên của task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tasks.map((taskName, index) => {
                                return <TodoList key={`info-${taskName}`} taskName={taskName}
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