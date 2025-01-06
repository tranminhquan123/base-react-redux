// class component
//function component

import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "tran minh quan", age: "18" },
      { id: 2, name: "nguyen quoc bao", age: "19" },
      { id: 3, name: "pham van cuong", age: "21" },
    ],
  };

  handleAddNewUser = (userObj) => {
    this.setState({
      listUser: [userObj, ...this.state.listUser],
    });
  };

  handleDeleteUser = (userID) => {
    // let listUserClone = [... this.state.listUser]
    let listUserClone = this.state.listUser;
    listUserClone = listUserClone.filter((item) => item.id !== userID);
    this.setState({
      listUser: listUserClone,
    });
  };

  //JSX
  render() {
    return (
      <>
        <div className='a'>
          <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
          <br />
          <DisplayInfo
            listUser={this.state.listUser}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
        <div className='b'></div>
      </>
    );
  }
}

export default MyComponent;
