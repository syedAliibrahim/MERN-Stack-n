// import { useEffect, useState } from "react";
// import ActivityDetails from "../components/activity";
// import ActivityForm from "../components/ActivityForm";
//   const Home = () => {
//     const [activities, setActivities] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:4040/api/activity/");
//         const json = await response.json();
//         setActivities(json);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <div className='home'>
//       <div className="activity">
//         {activities && activities.map((activity) => ( 
//           // <p key={activitie._id}>{activitie.title}</p>
//           <ActivityDetails key={activity._id} activity = {activity}/>
//         ))}
//       </div>
//       <ActivityForm />
//     </div> 
//   );
// };
// export default Home;


// import { useEffect, useState } from "react";
// import {  useActivitysContext} from "../Hooks/useActivityContext";
// //component
// import ActivityDetails from "../components/activity";
// import ActivityForm from "../components/ActivityForm";


// const Home = () => {
//   // const [activities, setActivities] = useState(null);
//   const {activities,dispatch}= useActivitysContext ()

//   useEffect(() => {
//     const fetchData = async () => {
//     //   try {
//     //     const response = await fetch("http://localhost:4040/api/activity/");
//     //     const json = await response.json();
//     //     setActivities(json);
//     //   } catch (error) {
//     //     console.error("Error fetching data:", error);
//     //   }
//     // };
    
//       const response = await fetch("http://localhost:4040/api/activity/");
//       const json = await response.json();
    
//       if(response.ok){
//         dispatch({type: 'SET_ACTIVITYS',payload: json})
//       }
//   };

//     fetchData();
//   }, [dispatch]);

//   return (
//     <div className='home'>
//       <div className="activity">
//         {activities && activities.map((activity) => ( 
//           // Use 'activity._id' as the key, since it's consistent with what is passed to the ActivityDetails component.
//           <ActivityDetails key={activity._id} activity={activity} />
//         ))}
//       </div>
//       <ActivityForm />
//     </div> 
//   );
// };

// export default Home;

import { useEffect } from "react";
import { useActivitysContext } from "../Hooks/useActivityContext";
import ActivityDetails from "../components/activity";
import ActivityForm from "../components/ActivityForm";

const Home = () => {
  const { activities, dispatch } = useActivitysContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4040/api/activity/");
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: 'SET_ACTIVITYS', payload: json });
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch]); // Include 'dispatch' in the dependency array

  return (
    <div className='home'>
      <div className="activity">
        {activities && activities.map((activity) => (
          <ActivityDetails key={activity._id} activity={activity} />
        ))}
      </div>
      <ActivityForm />
    </div>
  );
};

export default Home;
