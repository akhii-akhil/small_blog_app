import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
const Data = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(null)
  const [error, setError] = useState(null)
  const [loader,setLoader]=useState(false)
 
  const handleCh = () => {
    setLoader(true)
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      setError(false)
      setLoader(false)
           sessionStorage.setItem("id", JSON.stringify( res.data))
           console.log(res.data);
           navigate('/profile')
         })
      .catch((err) => {
             setLoader(false)
             setError(true)
      console.log("error");
    })
    
  }
  return (
    <div>
      
     <div class="mb-6 p-[5%]">
    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter the required Id to get the blogs</label>
        <input type="number" value={id} id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[30%] ml-[36%]" onChange={(e) => {
          setId(e.target.value)
        }} />
        {
          loader && <div className='loader flex'/>
        }
        <br />
        <br />
        
        {
        error && <h1 className='text-red-700 text-2xl'>The Id is Not present</h1>
        }
        <br />
        <br />
        <button className='bg-blue-400 p-4 rounded-2xl' onClick={handleCh}>Get the Data</button>
      </div>
      
      
    </div>
  )
}

export default Data
