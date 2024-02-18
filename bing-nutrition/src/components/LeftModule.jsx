import { useState } from "react";
import TimePicker from "react-time-picker";
export default function LeftModule({openList, hallSelect, setPlan, handleDay, setDHS, wkndDining}){

    let diningList = openList;
    const [hall, setHall] = useState("")
    return(<div className="rounded-xl shadow-lg bg-green-900 h-full  m-5">
        <div class="inline-flex m-5">
  <button className="bg-gray-100 hover:bg-gray-300 transition-all whitespace-nowrap rounded-l-xl text-gray-800 font-bold w-full py-2 px-4" onClick={() => {handleDay(true)}}>
    Weekdays
  </button>

  <button className="bg-gray-100 hover:bg-gray-300 transition-all rounded-r-xl text-gray-800 font-bold py-2 w-full px-4" onClick={() => {handleDay(false)}}>
    Weekend
  </button>
</div>

<div className="ml-5">
<button className="rounded-xl bg-gray-100 py-2 px-4 hover:bg-gray-300 font-semibold text-gray-800 text-sm transition"
onClick={()=> {hallSelect(""); setPlan(true)}}
> Show Plan</button>
<div>
     
    </div>
</div>

<div class="max-w-xs flex flex-col bg-slate-100 m-5 rounded-xl">
 {diningList.map(place =>  <button type="button" onMouseEnter={() => {setHall(place)}}  onClick={() => {hallSelect(hall); setPlan(false); setDHS(hall); wkndDining();}} class="inline-flex items-center gap-x-2 py-3 px-4 text-sm text-start font-semibold text-gray-800 hover:bg-slate-300 transition-all -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg focus:z-10 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700" >
    {place}
  </button>)}
 
 
</div>




    </div>)



}