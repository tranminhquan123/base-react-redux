import React from "react";

class DisplayInfo extends React.Component {
  render() {
    console.log(this.props);
    const { name, age } = this.props;
    return (
      <div>
        <div>my name: {name} </div>
        <div>my age: {age}</div>
      </div>
    );
  }
}

export default DisplayInfo;
