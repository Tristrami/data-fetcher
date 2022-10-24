import React from "react";

const RequestButton = ({ buttonText, requestResource, currentResource, setResource }) => {
  return (
    <button
      className={requestResource === currentResource ? "selected" : null}
      onClick={() => setResource(requestResource)}
    >
      {buttonText}
    </button>
  )
}

export default RequestButton;