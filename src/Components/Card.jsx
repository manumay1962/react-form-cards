import React from "react";

function Card({user,handleRemove,id}) {
  return (
   
     <div className="w-52 h-full bg-zinc-100 rounded-lg flex  items-center p-2 flex-col">
        <div className="image w-[60px] h-[60px] rounded-full overflow-hidden bg-blue-200">
          <img className="w-full h-full object-cover" src={user.image} alt="" srcset="" />
        </div>
        <h1 className=" mt-2 text-center text-xl font-semibold">{user.name}</h1>
        <h6 className="opacity-50 text-sm font-semibold"> {user.email}</h6>
        <p className=" mt-1 text-sm font-semibold tracking-tight leading-1 text-center">{user.description}</p>
        <button  onClick={()=>handleRemove(id)}className=" mt-4 px-3 py-1 bg-red-600 rounded-md text-sm font-semibold text-white">Remove It</button>
      </div>

) }
    
    
    
  


export default Card;
