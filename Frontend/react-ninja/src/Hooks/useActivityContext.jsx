import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";

export const useActivitysContext = ()=>{
    const context =useContext (ActivityContext)

    if (!context){
        throw Error ("useactivityContext must be used inside ActivityContextProvider");
    }
    return context
}

// import React, { useContext } from "react";
// import { ActivityContext } from "../context/ActivityContext";

// export const useActivityContext = () => {
//   const context = useContext(ActivityContext);

//   if (!context) {
//     throw new Error("useActivityContext must be used inside ActivityContextProvider");
//   }

//   return context;
// };
