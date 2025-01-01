// class component
//function component

import React from "react";
import UserInfo from "./Userinfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  //JSX
  render() {
    const myInfo = ["a", "b", "c"];
    return (
      <div>
        <UserInfo />
        <br />
        <DisplayInfo name="tran minh quan" age="18" />
        <hr />
        <DisplayInfo name={"pham van cuong"} age={18} myInfo={myInfo} />
      </div>
    );
  }
}

export default MyComponent;
