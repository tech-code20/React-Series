import React, { useEffect, useState } from 'react'
let avatar;
import { useLoaderData } from 'react-router';

function Github() {
  const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/tech-code20")
    //     .then(Response => Response.json())
    //     .then(data => {
    //         // console.log(data)    
    //         setData(data)
    //         avatar = data
    //     })
    // })
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Name: {data.name} <br />
        Github Followers: {data.followers} 
    <img src={data.avatar_url} alt="" width={100} className='rounded-full m-auto' />
    Bio: {data.bio}
    </div>
  )
}
export {avatar};

export default Github

export const githubInfoLoader = async () => {
   const response = await fetch("https://api.github.com/users/tech-code20")
   return response.json()
}