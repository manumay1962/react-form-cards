import React from 'react'
import Card from './Card'
function Cards({users,handleRemove}) {
  return (
    <div className='w-full flex-wrap max-h-60  overflow-auto mb-4 p-4 gap-5 justify-center flex '>
        {users.map((item,index)=>{
           return  <Card key={index} id={index} handleRemove={handleRemove} user={item}/>
        })}
       
        
      
        </div>
  )
}

export default Cards