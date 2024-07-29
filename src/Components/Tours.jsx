import { useState } from 'react';
import Card from './Card'


function Tours({tours, remove}) {

    const [cost, setCost] = useState(0);

    function add(price,id){
        const num = parseInt(price);
        setCost(prevcost => prevcost+num);
        remove(id);
    }

    return(

        <div className='flex flex-col items-center max-md:w-[100vw]'>
            <div>
                <h1 className=' bg-zinc-500 p-8 m-3 brightness-125 font-semibold text-blue-900 w-full border-solid border-red-800 border-4 rounded-3xl text-7xl max-md:text-5xl max-md:scale-110 max-md:mx-auto max-md:p-3 max-md:border-0 max-md:rounded-md max-md:bg-slate-600 max-md:text-white max-md:underline'>Plan The Tour</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-y-2 gap-x-5 max-md:gap-x-1 max-md:gap-y-1'>
                {
                    tours.map(
                        (tour) => {
                            return <Card {...tour} remove={remove} add={add}></Card>
                        }
                    )
                }
            </div>
            <div className=' bg-amber-950 px-8 border-2 border-solid border-white py-2 text-4xl mt-5 scale-125 rounded-lg max-md:text-2xl max-md:px-4'>Total Cost: <span>{cost}</span></div>
        </div>

    );

}


export default Tours;