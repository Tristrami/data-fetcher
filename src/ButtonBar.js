import React from "react";
import RequestButton from "./RequestButton";

const ButtonBar = ({ currentResource, setResource }) => {
  return (
    <div className="buttonBar">
      <form onSubmit={(e) => e.preventDefault()}>
        <RequestButton
          buttonText="users"
          requestResource="users"
          currentResource={currentResource} 
          setResource={setResource}
        />
        <RequestButton
          buttonText="posts"
          requestResource="posts"
          currentResource={currentResource}  
          setResource={setResource}
        />
        <RequestButton
          buttonText="comments"
          requestResource="comments"
          currentResource={currentResource}  
          setResource={setResource}
        />
      </form>
    </div>
  )
}

export default ButtonBar;