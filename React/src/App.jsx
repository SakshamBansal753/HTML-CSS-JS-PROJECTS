import React, { useEffect, useState } from 'react';
import Search from './reactcompo/Search.jsx';
import MovieCard from './reactcompo/MovieCard.jsx';

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjM3MjMzNGIxMjQyZTQyNzE4ZjkyZGYxMzAxY2QyYSIsIm5iZiI6MTc1MDA2Njc5Mi40NzYsInN1YiI6IjY4NGZlNjY4MmNlZGFjNjExOTVjODIyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rGmFLzrO25UPmriQGLSv9PUzfSnabaguv4Is8AjvoAE';

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [SearchTerm, setSearchTerm] = useState('');
  const [errormessage, seterrormessage] = useState('');
  const [movieList, setmovieList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const Fetchmovie = async () => {
    setisLoading(true)
    seterrormessage('');
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if(!response.ok){
        throw new Error("FAiled")
      }
      const data = await response.json();
      if(data.Response==='False'){
        seterrormessage(data.Error||"FAIELED TO FETCH")
        setmovieList([]);
        return;
      }
      setmovieList(data.results||[]);
    } catch (e) {
      console.log(e);
      seterrormessage("Error fetching movies");
    }finally{
      setisLoading(false);
    }
  };

  useEffect(() => {
    Fetchmovie();
  }, []);

  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>
        <header>
          <img src="/logo.jpeg" className='h-35'/>
          <img src="/Hero.png" />
          <h1>
            A Free <span className='text-gradient'>Movie</span> Website Love it
          </h1>
          <Search SearchTerm={SearchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className='all-movies'>
          <h2 className='mt-[50px]'>ALL MOVIES</h2>
          {isLoading?(
<div role="status">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>
):errormessage?(<p className='text-white'>{errormessage}</p>):(<ul>{movieList.map((movie)=>(<MovieCard key={movie.id} movie={movie}/>))}</ul>)}
        </section>
      </div>
    </main>
  );
};

export default App;
