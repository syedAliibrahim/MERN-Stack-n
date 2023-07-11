import { useEffect, useState } from "react"

const Home=() =>{

  const [cont,setcont] =useState(0);
  const handle=()=>setcont(cont+1);
  useEffect(() =>{
    console.log('inside use effect')
  },[])
  return (
    <div className='home'>
        <h2>
            Home
        </h2>
        <button onClick={handle}>click me</button>
        {cont}
    </div> 
  )
}

export default Home