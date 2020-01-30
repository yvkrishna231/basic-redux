import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleGetData } from './Store/Actions/useAction'

class User extends Component {
    handleData = () => {
        this.props.dispatchHandleData();
    }
    render() {
        return (
            <div>
                <table className='table table-bordered table-hover text-center'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                            <th>address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.loading && <p className='float-left'>loading....</p>}
                        {this.props.data && this.props.data.map(user => {
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address.street} &nbsp; {user.address.suite} &nbsp; {user.address.city} &nbsp;  {user.address.zipcode}</td>
                            </tr>
                        })}
                    </tbody>
                </table>

                <button className='float-right' onClick={this.handleData}>click me</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    data: state.user.data,
    loading: state.user.loading
})


const mapDispatchToProps = (dispatch) => ({
    dispatchHandleData: () => dispatch(handleGetData())
})
export default connect(mapStateToProps, mapDispatchToProps)(User);