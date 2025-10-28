
import React from "react";
const Meetings =async ({params} : {params : {id : string}}) => {
	const {id} = params
  return (
	<div>Meetings Room # <span className='text-2xl font-bold'>{id}</span></div>
  )
}

export default Meetings;
