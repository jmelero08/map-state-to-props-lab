
import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {

    const users = this.props.users.map((u, i) => <li key={i}>{u.username}</li>)

    return (
      <div>
        <ul>
          Users!
          <ul>
            {users}
          </ul>
          <p>{this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}


export default connect(mapStateToProps)(Users)