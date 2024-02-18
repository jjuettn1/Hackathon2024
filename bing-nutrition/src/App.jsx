import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftModule from './components/LeftModule'
import RightModule from './components/RightModule'
import PlanModule from './components/PlanModule'
import NavBar from './components/NavBar'
import einstein from './einstien.json'
import menus from './menus.json'
import output from './output.json'


function App() {
  
  const [openList, setOpenList] = useState(["Hinman", "Appalachian", "C4", "Chenango Room" ])
  const [wIndex, setWIndex] = useState(0);
  const [selectedHall, setSelectedHall] = useState("");
  const [showPlan, setShowPlan] = useState(false);
  const [totalCost, setTotalCost] = useState(0)
  const [calorieCount, setCalorieCount] = useState(0);
  const [proteinCount, setProteinCount] = useState(0);
  const [fiberCount, setFiberCount] = useState(0);
  const [sugarCount, setSugarCount] = useState(0);
  const [itemList, setItemList] = useState([]);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [diningHallSelected, setDiningHallSelected] = useState(false);
  const [diningWeekend, setDiningWeekend] = useState(false);
  

  let WeekdayList = ["Hinman", "Appalachian", "C4", "CIW", "Tully's","Einstein Bagels"]
  let WeekendList = ["Hinman", "Appalachian", "C4", "Tully's"]

  // let burger = {
  //   name: "Burger",
  //   calories: 400,
  //   protein: 20,
  //   count:0 
  //  }
  //  let fries = {
  //   name: "Fries",
  //   calories: 200,
  //   protein: 3,
  //   count: 0

  //  }
  //  let shake = {
  //   name: "shake",
  //   calories: 300,
  //   protein: 9,
  //   count:0

  //  }

  
  const[menuList, setMenuList] = useState({
    "Hinman" : new Array(100).fill(0),
    "Appalachian" :new Array(100).fill(0),
    "CIW": new Array(100).fill(0),
    "C4" : new Array(100).fill(0),
    "Chenango Room" : [0,0,0],
    "Einstein Bagels": new Array(100).fill(0),
    "Tully's":new Array(100).fill(0)

  })
  useEffect(() => {
   // console.log(currentMenu)
   console.log(selectedHall);
    console.log(output["ciw"]["D"]["item"])
    

  },[selectedHall]
  
  
  )


  function setDHS(hall){
    if(hall == "Hinman" || hall == "CIW" || hall == "Appalachian" || hall == "C4"){
      setDiningHallSelected(true)
    }
    else{
      setDiningHallSelected(false)
    }
  }
  const protein = (list) =>
  {
    let total = 0;
    if(list){
    for(let i = 0; i <  list.length; i++){
      if(list[i].protein){
     
      total += list[i].protein;
      }
    }
  }
  console.log(Object.keys(einstein).length);
    return total;
  }

  const fiber = (list) =>
  {
    let total = 0;
    if(list){
    for(let i = 0; i <  list.length; i++){
      if(list[i].fiber){
     
      total += list[i].fiber;
      }
    }
  }
  console.log(Object.keys(einstein).length);
    return total;
  }
  const sugar = (list) =>
  {
    let total = 0;
    if(list){
    for(let i = 0; i <  list.length; i++){
      if(list[i].fiber){
     
      total += list[i].fiber;
      }
    }
  }
  console.log(Object.keys(einstein).length);
    return total;
  }

  const calories = (list) =>{
    let total = 0;
    if(list){
    for(let i = 0; i <  list.length; i++){
      if(list[i].calories){
     
      total += list[i].calories;
      }
    }
  }
    return total;
  }
  const cost = (list) => {
    let total = 0;
    if(list){
    for(let i = 0; i <  list.length; i++){
      if(list[i].cost){
     
      total += list[i].cost;
      }
      if(list[i].price){
        total += parseFloat(list[i].price)
      }
    }
  }
    return total;

  }
  function handleDay (select){
    if(select){
      setOpenList(WeekdayList)
      setWIndex(0);
    }
    else{setOpenList(WeekendList); setWIndex(1)}
  }
  function wkndDining(end){
    if(wIndex == 1){
      setDiningWeekend(true)

    }
    else{
      setDiningWeekend(false)
    }
    console.log(openList==WeekdayList)
  }
  function diningHallMenuSelect(day){
    let updated = null;
    let targetHall = selectedHall.toLowerCase();
    if(selectedHall == "Appalachian"){
    targetHall= "app";
    }
     if(output[targetHall]["D"]["day"] == day){
      console.log("found");
      updated = output[targetHall]["D"]["item"];
      console.log(updated)
      setCurrentMenu(updated)
     }
     else if(output[targetHall][day]){
      console.log("found");
      updated = output[targetHall][day];
      console.log(updated)
      setCurrentMenu(updated)
     }
     else{let error  = {"error":[{"name":"Menu Not Found",
      cost:0
     }]}
     setCurrentMenu(error);
    }

  }

  function hallSelect(hall){
    setSelectedHall(hall)
    let updatedHall = menus[hall]
   
    setCurrentMenu(updatedHall)
  }
  function handleMenu(hall, ind, add){
    let newList = menuList;
    if(add){
    newList[hall][ind]++
    
    }
    else if(add == false && newList[hall][ind] > 0){
      newList[hall][ind]--;
      console.log("sub");
     
    }
    setMenuList(newList)
  }
  function setPlan(arg){
    setShowPlan(arg)
  }
  function listSet(item,index,hall, add){
    let itemIndex = itemList.indexOf(item);
    if(add){
     let updatedList = [...itemList];
     updatedList.unshift(item);
     handleMenu(hall,index,true)
     setItemList(updatedList);
     console.log(itemList);
     setProteinCount(protein(updatedList))
    setFiberCount(fiber(updatedList))
    setSugarCount(sugar(updatedList))
     setCalorieCount(calories(updatedList))
     setTotalCost(cost(updatedList))
    }
    else{ 
      let updatedList = [...itemList];
    updatedList.splice(itemIndex,1);
     console.log("removed" + index)
     setItemList(updatedList)
     handleMenu(hall,index,false)
     setProteinCount(protein(updatedList))
     setFiberCount(fiber(updatedList))
    setSugarCount(sugar(updatedList))
     setCalorieCount(calories(updatedList))
     setTotalCost(cost(updatedList))
    }

  }
  function calorieSet(num){
    setCalorieCount(calorieCount+num)
  }
  return (
    <div className='h-full min-h-screen font-newFont bg-gradient-to-b from-slate-50 to-slate-300'>
      <NavBar />
    <div className="flex">
      <LeftModule openList={openList} hallSelect={hallSelect} setPlan={setPlan} handleDay={handleDay} setDHS={setDHS} wkndDining={wkndDining}></LeftModule>
      {selectedHall ? 
      <RightModule selectedHall={selectedHall} calorieSet={calorieSet} listSet={listSet} menuList={menuList} currentMenu={currentMenu} diningHallSelected={diningHallSelected} diningWeekend={diningWeekend} diningHallMenuSelect= {diningHallMenuSelect} setDHS={setDHS}></RightModule> : ""
}
      {
        showPlan ? <PlanModule calorieCount={calorieCount} totalCost={totalCost} proteinCount={proteinCount} fiberCount={fiberCount} sugarCount={sugarCount} itemList={itemList}></PlanModule>: ""
      }
      </div>
    </div>
  )
}

export default App
