import { useState } from "react";


function Card({id, name, info, image, price, remove, add}){

    const [readmore, setReadmore] = useState(false);

    const msg = readmore ? info : `${info.substring(0, 150)}...`;
    const smsg = readmore ? info : `${info.substring(0, 150)}...`;
    

    function clicked(){
        setReadmore(!readmore);
        
    }


    return(
        <div className="card opacity-80 brightness-125  rounded-lg flex flex-col items-center p-4 bg-slate-400 text-black m-3 border-solid border-red-400 border-2 h-fit max-md:mx-7">
            <img className=" w-full aspect-video rounded-lg border-2 border-solid shadow-slate-700 mb-6 shadow-2xl object-cover max-md:mb-2" src={image} alt="" />
            <div className=" min-w-full">
                <div className="mb-3 flex flex-col place-items-start ml-1 gap-y-2 max-md:mb-1">
                    <div className=" text-orange-900 font-bold text-xl max-md:font-semibold"><span className="text-red-600 text-2xl">₹</span> <span className="underline">{price}</span></div>
                    <div className=" bg-fuchsia-950 px-3 py-1 text-zinc-300 font-bold rounded-md text-2xl max-md:font-semibold">{name}</div>
                </div>
            </div>
            <div className="w-full mb-4">
                <h4 className="w-full">
                    {msg}
                    <span className=" cursor-pointer text-blue-700 text-lg font-semibold underline underline-offset-2 decoration-dashed" onClick={clicked}>{readmore ? `Show Less`: `Read More`}</span>
                </h4>
                
            </div>
            <div className="flex justify-between w-[90%]">
                <button className=" text-blue-100 bg-fuchsia-700 bg-opacity-90 px-2 w-36 h-8 font-semibold rounded-lg text-lg max-md:px-0.5 max-md:text-base max-md:w-28" onClick={() => remove(id)}>Not Intrested</button>
                <button className=" text-blue-100 bg-fuchsia-700 bg-opacity-90 px-2 w-36 h-8 font-semibold rounded-lg text-lg max-md:px-0.5 max-md:text-base max-md:w-28" onClick={() => add(price,id)}>Intrested</button>
            </div>
        </div>
    );

}

export default Card;