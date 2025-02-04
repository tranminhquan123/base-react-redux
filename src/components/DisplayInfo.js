import React, { useState } from "react";
import "./DisplayInfo.scss";
// import logo from "./../logo.svg";
// class DisplayInfo extends React.Component {
//   render() {
//     console.log(">>> call me render");
//     // console.log(this.props);
//     //destructuring arr/obj
//     const { listUser } = this.props;
//     // const listUser = this props.listUser
//     return (
//       <div className='display-info-container'>
//         {true && (
//           <>
//             {listUser.map((user, index) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>
//                     <div>My name is {user.name} </div>
//                     <div>My age is {user.age} </div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       DELETE
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfo = (props) => {
  const { listUsers } = props;

  const [isShowHideListUSer, setShowHideListUSer] = useState(true);
  const handleShowHideListUser = () => {
    setShowHideListUSer(!isShowHideListUSer);
  };
  return (
    <div className='display-info-container'>
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUSer == true ? "Hide List User" : "Show List User"}
        </span>
      </div>
      {isShowHideListUSer && (
        <>
          {listUsers.map((user, index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>
                  <div>My name is {user.name} </div>
                  <div>My age is {user.age} </div>
                </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
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
};

export default DisplayInfo;
