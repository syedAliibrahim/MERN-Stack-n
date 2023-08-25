// import { createContext, useReducer } from "react";

// export const ActivityContext =createContext()

// export const activitysReducer =(state, action)=>{
//   switch (action.type){
//     case 'SET_ACTIVITYS':
//         return{
//             activitys: action.plyload
//         }
//         case 'CREATE_ACTIVITYS':
//         return{
//             activitys: [action.plyload, ...state.activitys]
//         }
//         default:
//             return state
//   }
// }
// export const ActivityContextProvider = ({ children })=>{
//     const [state, dispatch ] = useReducer(activitysReducer,{
//         activitys: null
//     })

//     // dispatch({type: 'SET_ACTIV'})
//     return (
//         <ActivityContext.Provider value={{state, dispatch}}>
//             { Children}
//         </ActivityContext.Provider>
//     )
// }

// import { createContext, useReducer } from "react";

// export const ActivityContext = createContext();

// export const activitiesReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_ACTIVITIES':
//       return {
//         activities: action.payload
//       };
//     case 'CREATE_ACTIVITY':
//       return {
//         activities: [action.payload, ...state.activities]
//       };
//     default:
//       return state;
//   }
// }

// export const ActivityContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(activitiesReducer, {
//     activities: null
//   });

//   // dispatch({ type: 'SET_ACTIVITIES' });
//   return (
//     <ActivityContext.Provider value={{ state, dispatch }}>
//       {children}
//     </ActivityContext.Provider>
//   );
// }

// import React, { createContext, useReducer } from "react";


// export const ActivityContext = createContext();

// export const ActivitiesReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_ACTIVITIES':
//       return {
//         ...state,
//         activities: action.payload
//       };
//     case 'CREATE_ACTIVITY':
//       return {
//         ...state,
//         activities: [action.payload, ...state.activities]
//       };
//     default:
//       return state;
//   }
// }

// export const ActivityContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(ActivitiesReducer, {
//     activities: []
//   });

//   // dispatch({ type: 'SET_ACTIVITIES', payload: [] }); // Initial dispatch if needed

//   return (
//     <ActivityContext.Provider value={{ state, dispatch }}>
//       {children}
//     </ActivityContext.Provider>
//   );
// };

import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const ActivityContext = createContext();

export const ActivitiesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVITIES':
      return {
        activities: action.payload
      };
    case 'CREATE_ACTIVITY':
      return {
        activities: [action.payload, ...state.activities]
      };
    default:
      return state;
  }
}
export const ActivityContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ActivitiesReducer, {
    activities: []
  });

  // dispatch({ type: 'SET_ACTIVITIES', payload: [] }); // Initial dispatch if needed

  return (
    <ActivityContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ActivityContext.Provider>
  );
};

ActivityContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
