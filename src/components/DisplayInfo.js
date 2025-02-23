import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";

const DisplayInfo = (props) => {
  const { listUsers } = props;

  const [isShowHideListUSer, setShowHideListUSer] = useState(true);
  const handleShowHideListUser = () => {
    setShowHideListUSer(!isShowHideListUSer);
  };

  console.log(">>>call me render");

  useEffect(() => {
    console.log(">>>call me useEffect");
    if (listUsers.length === 0) {
      alert("Delete all users");
    }
  }, [listUsers]);

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
