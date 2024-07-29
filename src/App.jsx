import { useState } from "react";
import './App.css'
import Tours from './Components/Tours';
import Data from './Components/Data';

function App() {

  const [tours, setTours] = useState(Data);

  function remove(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  function refresh () {
    setTours(Data);
  }

  if(tours.length == 0){
    return(
      <div className="flex flex-col items-center justify-center mt-32 space-y-12">
        <h2 className=" w-fit px-5 py-2 font-semibold text-5xl text-[black] bg-gradient-to-r from-purple-400 to-blue-900 rounded-md">No Tours Left</h2>
        <button className=" bg-sky-600 px-8 py-3 text-3xl rounded-2xl hover:text-black font-semibold" onClick={refresh}>Refresh</button>
      </div>
    );
  }

  return (
    <div>
      <Tours tours={tours} remove={remove}></Tours>
    </div>
  )
}

export default App;
