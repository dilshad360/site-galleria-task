import React, { createContext, useContext, useState } from "react";

const QuestionContext = createContext();

export const StateContext = ({ children }) => {
    const [status,setStatus] = useState("")


    return (
        <QuestionContext.Provider
          value={{
           status,
           setStatus
          }}
        >
          {children}
        </QuestionContext.Provider>
      );
};

export const useStateContext = () => useContext(QuestionContext);