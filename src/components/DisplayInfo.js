import React from "react";
import "./DisplayInfo.scss";
// import logo from "./../logo.svg";
class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    // console.log(this.props);
    //destructuring arr/obj
    const { listUser } = this.props;
    // const listUser = this props.listUser
    return (
      <div className='display-info-container'>
        {/* <img src={logo} /> */}
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide list user"
              : "Show list user"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <>
            {listUser.map((user, index) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>
                    <div>My name is {user.name} </div>
                    <div>My age is {user.age} </div>
                  </div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      DELETE
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
