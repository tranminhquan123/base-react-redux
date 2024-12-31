// class component
//function component

import React from "react";

class  MyComponent extends React.Component {
    
    state = {
        name: 'tran minh quan',
        address: 'viet nam, thanh pho thu duc',
        age: 20
    };

    //JSX 
    render() {
        return (

            <div>

                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}

export default MyComponent