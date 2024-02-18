import { useState } from "react"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
export default function RightModule({selectedHall, calorieSet, listSet, menuList, currentMenu, diningHallSelected, diningWeekend, diningHallMenuSelect, setDHS}){

   let burger = {
    name: "Burger",
    calories: 400,
    protein: 20,
    count:0,
    cost:3.21 
   }
   let fries = {
    name: "Fries",
    calories: 200,
    protein: 3,
    count: 0,
    cost:1.08

   }
   let shake = {
    name: "shake",
    calories: 300,
    protein: 9,
    count:0,
    cost: 3.04

   }
//    function updateCount(index,add){ 
    
//     if(add){
    
//     }
//     else if(!add & updatedMenu[index].count >= 1 ){
        
//     }      

// }
   const [menu, setMenu] = useState([burger,fries,shake])



   
   
    
    return(<div className="rounded-xl shadow-lg bg-green-900 h-full w-full  m-5">
        <div class="inline-flex m-5">
 <strong className="text-white text-4xl">{selectedHall}</strong>
</div>

{ diningHallSelected ? ( !diningWeekend ?
 <div className="inline-flex m-5"><button className="bg-gray-100 hover:bg-gray-300 transition-all whitespace-nowrap rounded-l-xl text-gray-800 font-bold w-full py-2 px-4" onClick={() => {diningHallMenuSelect("Monday"); setDHS(false)}}>
 Monday
</button>
<button className="bg-gray-100 hover:bg-gray-300 transition-all  text-gray-800 font-bold py-2 w-full px-4" onClick={() => {diningHallMenuSelect("Tuesday"); setDHS(false)}}>
 Tuesday
</button> <button className="bg-gray-100 hover:bg-gray-300 transition-all whitespace-nowrap text-gray-800 font-bold w-full py-2 px-4" onClick={() => {diningHallMenuSelect("Wednesday"); setDHS(false)}}>
Wednesday
</button>

<button className="bg-gray-100 hover:bg-gray-300 transition-all  text-gray-800 font-bold py-2 w-full px-4" onClick={() => {diningHallMenuSelect("Thursday"); setDHS(false)}}>
 Thursday
</button>
<button className="bg-gray-100 hover:bg-gray-300 transition-all rounded-r-xl  text-gray-800 font-bold py-2 w-full px-4" onClick={() => {diningHallMenuSelect("Friday"); setDHS(false)}}>
 Friday
</button>
</div> : <div className="inline-flex m-5">
<button className="bg-gray-100 hover:bg-gray-300 transition-all rounded-l-xl text-gray-800 font-bold py-2 w-full px-4" onClick={() => {diningHallMenuSelect("Saturday"); setDHS(false)}}>
 Saturday
</button>
<button className="bg-gray-100 hover:bg-gray-300 transition-all rounded-r-xl text-gray-800 font-bold py-2 w-full px-4" onClick={() => {diningHallMenuSelect("Sunday"); setDHS(false)}}>
 Sunday
</button>
 </div>)
 :
<div class="w-full text-sm font-medium p-4 text-gray-900 rounded-lg  dark:text-white">
{ Array.isArray(currentMenu) ? currentMenu.map((item, index) =>
    <div className=" px-4 py-2 hover:scale-105 transition-all text-black flex bg-gray-300 border-gray-200 rounded-lg m-3 cursor-pointer ">
        <a href="#" aria-current="true" class="w-full">
       {item.name + "   "} {"$" +  item.price}
       {console.log(item)}
       <p className="text-left"> Calories: {item.calories}{"  "} {item.protein ? "Protein: " + item.protein +"g" :"" } {"  "} {item.fiber ? "Fiber: " + item.fiber +"g" :"" }  {"  "} {item.sugar ? "Sugar: " + item.sugar +"g" :"" }</p>
    </a><div className="justify-end flex items-center">

   </div>
   <button className="text-lg mr-4 float-right hover:scale-150 transition-all" onClick={() => {calorieSet(-item.calories);
console.log(item.calories); listSet(item,index, selectedHall,false)} }> <FaMinus /> </button>
<p className="mt-1 text-lg">{menuList[selectedHall][index]}</p>
<button className="text-lg float-right ml-3 hover:scale-125 transition-all" onClick={() => {calorieSet(item.calories);
console.log(item.calories);  listSet(item,index, selectedHall,true) }}>  <FaPlus/></button>
    </div>)
    :
  Object.entries(currentMenu).map(([key,item], index) =>
    <div className=" px-4 py-2 hover:scale-105 transition-all text-black flex bg-gray-300 border-gray-200 rounded-lg m-3 cursor-pointer ">
        <a href="#" aria-current="true" class="w-full">
       {item[0].name + "   "} {"$" +  item[0].cost}
       {console.log(item)}
       <p className="text-left"> Calories: {item[0].calories}{"  "} {item[0].protein ? "Protein: " + item[0].protein +"g" :"" } </p>
    </a><div className="justify-end flex items-center">

   </div>
   <button className="text-lg mr-4 float-right hover:scale-150 transition-all" onClick={() => {calorieSet(-item.calories);
console.log(item[0].calories); listSet(item[0],index, selectedHall,false)} }> <FaMinus /> </button>
<p className="mt-1 text-lg">{menuList[selectedHall][index]}</p>
<button className="text-lg float-right ml-3 hover:scale-125 transition-all" onClick={() => {calorieSet(item.calories);
console.log(item[0].calories);  listSet(item[0],index, selectedHall,true) }}>  <FaPlus/></button>
    </div>
        )}
</div>
}</div>)



}