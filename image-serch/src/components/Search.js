import React from 'react'
import { useState } from 'react'
import "./style.css"
import Unsplash ,{toJson} from "unsplash-js"
// import toJson from "react"
const unsplash= new Unsplash({
    accessKey:"z8nq0FT4HAdCo679QjoYz9WFwD0UX9jOysDKjlH1cQY"
})

const Search = () => {
   const [serch,setSerch]=useState("")
   const [imgg,setImgg]=useState([])
    const getPhoto= async (event)=>{
        event.preventDefault()

        unsplash.search.photos(serch).then(toJson)
        .then((json)=>{
            setImgg(json.results)
        })  
    }
    // const setPho=(event)=>{
    //     let piccc= event.tatget.value
    //     setSerch(piccc)
    // }

  return (
    
         <>
             <form className='bar' onSubmit={getPhoto}> 
             <div><h1>React Image serch</h1> </div>
                
                <div><button className='buttonn'>Bookmarks</button></div>
                
                     <input className='serch-bar'
                      type="text"
                      name='serch'
                      value={serch}
                      placeholder='search for photo' 
                      onChange={(event)=>{setSerch(event.target.value)}}
                      />
                      <button className='buttonn2' type='submit'>Search</button>
             </form  >
             <div className='pic-cont'>
                {imgg.map((pic)=>(
                   <div key={pic.id}>
                    <img 
                    className='img-card'
                    alt=''
                    src={pic.urls.full}

                    ></img>
                   </div>
                   
                ))}
             </div>
        </>
      
    
  )
}

export default Search
