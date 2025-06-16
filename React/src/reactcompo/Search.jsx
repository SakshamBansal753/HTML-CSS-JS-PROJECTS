import React from 'react'

const Search = ({SearchTerm,setSearchTerm}) => {
  return (
   <div className='search'>
    <div>
        <img src='/search (1).svg'/>
        <input type='text' placeholder='Search Movies' value={SearchTerm} onChange={(event)=>setSearchTerm(event.target.value)}/>
    </div>
   </div> )
}

export default Search