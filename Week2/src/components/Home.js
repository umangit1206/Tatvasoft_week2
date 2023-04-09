import React, { Component } from 'react';
import Userlist from './Userlist';
import HOC from './HOC';

const users = [
  { id: 12002080501070, name: 'Umang' },
  { id: 12002080501076, name: 'Vrutti' },
  { id: 12102080503073, name: 'Vedant' },
];

const UserListWithHOC = HOC(Userlist, { users });

class Home extends Component {
  render() {
    return (
      <div>
        <UserListWithHOC />
      </div>
    );
  }
}

export default Home;
