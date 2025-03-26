import React, { useState } from 'react'
import Form from './Components/Form'
import Cards from './Components/Cards'

function App() {
   const [users,setusers]=useState([]);

   const formhandlesubmitdata=(data)=>{
    setusers([...users,data]);
   }

   const handleRemove=(id)=>{
    setusers(()=>users.filter((item,index)=>index !=id))
   }
  return (
    <div className='w-full h-screen bg-zinc-200  justify-center flex items-center '>
      <div className='container mx-auto'>
        <Cards  handleRemove={handleRemove} users={users}/>
        <Form  formhandlesubmitdata={formhandlesubmitdata }/>
      </div>
      
    </div>
  )
}

export default App