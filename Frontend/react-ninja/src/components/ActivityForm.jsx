// import { useState } from "react"

// const ActivityForm = ()=>{
//     const [titile, setTitle] =useState('')
//     const [description, setDescription] =useState('')
//     const [activityType, setActivityType] =useState('')
//     const [duration, setDuration] =useState('')
//     const [date, setDate] =useState('')
//     const [createdAt, setCreatedAt] =useState('')
//     const [error, setError] =useState(null)

//     const handleSubmit =async (e) =>{
//         e.preventDefault()

//         const activity ={titile,description,activityType,duration,date,createdAt}

//         const response =await fatch('http://localhost:4040/api/activity',{
//             method: 'POST',
//             body: JSON.stringify(activity),
//             Headers:{
//                 'Content-Type':'application/json'
//             }
//         })
//         const json =await response.json()

//         if(!response.ok){
//             setError(json.error)
//         }
//         if (response.ok){
//             setTitle('')
//             setDescription('')
//             setActivityType('')
//             setDuration('')
//             setDate('')
//             setCreatedAt('')
//             setError(null)
//             console.log('new work out',json)
//         }
//     }
//     return(
//       <form className="create" onSubmit={handleSubmit}>
//         <h3>Add a New Workout</h3>

//         <label>Excersize title:</label>
//         <input 
//         type="text"
//         onChange={(e)=> setTitle(e.target.value)}
//         value={titile}
//          />

//         <label>Description:</label>
//          <input 
//          type="texr"
//          onChange={(e)=> setDescription(e.target.value)}
//          value={description}
//          />
//           <label>ActivityType:</label>
//          <input 
//          type="texr"
//          onChange={(e)=> setActivityType(e.target.value)}
//          value={activityType}
//          />
//            <label>Duration:</label>
//          <input 
//          type="time"
//          onChange={(e)=> setDuration(e.target.value)}
//          value={duration}
//          />
//            <label>Date:</label>
//          <input 
//          type="date"
//          onChange={(e)=> setDate(e.target.value)}
//          value={date}
//          />
//             <label>CreatedAt:</label>
//          <input 
//          type="text"
//          onChange={(e)=> setCreatedAt(e.target.value)}
//          value={createdAt}
//          />
//         <button>Add Activity</button>
//         {error && <div className="error">{error}</div>}
//       </form>
//     )

// }
// export default ActivityForm


import { useState } from "react";
import {  useActivitysContext} from "../Hooks/useActivityContext";

const ActivityForm = () => {
    const {dispatch } = useActivitysContext()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [activityType, setActivityType] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [error, setError] = useState(null);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const activity = { title, description, activityType, duration, date, };

    //     const response = await fetch('http://localhost:4040/api/activity', {
    //         method: 'POST',
    //         body: JSON.stringify(activity),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     const json = await response.json();

    //     if (!response.ok) {
    //         setError(json.error);
    //     } else {
    //         // setError(null);
    //         setTitle('');
    //         setDescription('');
    //         setActivityType('');
    //         setDuration('');
    //         setDate('');
    //         setCreatedAt('');
    //         console.log('new workout', json);
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const activity = {
            activityTitle: title, // Use 'activityTitle' instead of 'title'
            description,
            activityType,
            duration,
            date,
            createdAt,
        };
    
        const response = await fetch('http://localhost:4040/api/activity', {
            method: 'POST',
            body: JSON.stringify(activity),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
    
        if (!response.ok) {
            setError(json.error);
        } else {
            // setError(null);
            setTitle('');
            setDescription('');
            setActivityType('');
            setDuration('');
            setDate('');
            setCreatedAt('');
            console.log('new workout', json);
            dispatch({type: 'CREATE_ACTIVITYS', payload: json})
        }
    };
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Description:</label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <label>ActivityType:</label>
            <input
                type="text"
                onChange={(e) => setActivityType(e.target.value)}
                value={activityType}
            />
            <label>Duration:</label>
            <input
                type="number"
                onChange={(e) => setDuration(e.target.value)}
                value={duration}
            />
            <br></br>
            <label>Date:</label>
            <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
            />
            <br></br>
            {/* <label>CreatedAt:</label>
            <input
                type="text"
                onChange={(e) => setCreatedAt(e.target.value)}
                value={createdAt}
            /> */}
            <button>Add Activity</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default ActivityForm;
