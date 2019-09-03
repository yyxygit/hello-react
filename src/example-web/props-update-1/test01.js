import React from 'react';

class UserInput extends React.Component {

    state = {
        user: this.props.user
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            user: nextProps.user
        });
    }

    handleChange = (e) => {
        this.setState({
            user: {
                ...this.state.user,
                name: e.target.value
            }
        });
    }

    render() {
        const { onConfirm } = this.props;
        const { user } = this.state;
        return (
            <div>
                <input value={user.name || ''} onChange={this.handleChange} />
                <button onClick={() => { onConfirm(user) }}>确定</button>
            </div>
        );
    }
}

export default class extends React.Component {
    state = {
        users: [
            { id: 0, name: 'bruce' },
            { id: 1, name: 'frank' },
            { id: 2, name: 'tony' }
        ],
        targetUser: {}
    }

    onConfirm = (user) => {
        const { users } = this.state;
        const target = users.find(u => u.id === user.id);

        if (target) {
            this.setState({
                users: [
                    ...users.slice(0, users.indexOf(target)),
                    user,
                    ...users.slice(users.indexOf(target) + 1)
                ]
            });
        } else {
            const id = Math.max(...(users.map(u => u.id))) + 1;
            this.setState({
                users: [
                    ...users,
                    {
                        ...user,
                        id
                    }
                ]
            });
        }
    }

    render() {
        const { users, targetUser } = this.state;
        return (
            <div>
                <UserInput user={targetUser} onConfirm={this.onConfirm} />
                <ul>
                    {
                        users.map(u => (
                            <li key={u.id}>
                                {u.name}
                                <button onClick={() => { this.setState({ targetUser: u }) }}>编辑</button>
                            </li>
                        ))
                    }
                </ul>
                <button onClick={() => { this.setState({ targetUser: {} }) }}>新建</button>
            </div>
        )
    }
}