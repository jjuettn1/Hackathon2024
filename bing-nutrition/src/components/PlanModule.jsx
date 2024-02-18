import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
export default function PlanModule({calorieCount,totalCost,proteinCount, fiberCount, sugarCount, itemList}) {
    


    let data = [
        {
          name: "Calories",
          calories: Math.trunc((calorieCount/2000)*100),
    
          
          
        },
        {
            name: "Protein",
            Protein: Math.trunc((proteinCount/51)*100),
      
            
            
          },
          {
            name: "Fiber",
            Protein: Math.trunc((fiberCount/27)*100),
      
            
            
          },
          {
            name: "Sugar",
            Protein: Math.trunc((fiberCount/36)*100),
      
            
            
          },
       
       
      ];
      




    return(<div className="rounded-xl bg-green-900 h-full w-full  shadow-lg m-5">
    <div class="inline-flex ml-5 mt-5">
    <strong className="text-white text-4xl">Current Plan </strong>
   
    </div>
    <br></br>
    <div className="text-white text-xl text-left px-5 pb-5">
    <p className="m-2">{"\n"}{"Total spent: $" + Math.round(100*totalCost)/100}</p>
    <p className="m-2">{"\n"}Calorie count: {calorieCount}, Protein: {Math.trunc(proteinCount)}g, Fiber: {Math.trunc(fiberCount)}g, Sugar: {Math.trunc(sugarCount)}g</p>
  
    <div className="flex text-white justify-center w-full p-5 mb-3 bg-slate-50 rounded-xl pt-7 shadow-lg">

    <strong className="text-black">{"Daily Value (%)"}</strong>

    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5

      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="calories" fill="#8884d8" />
      <Bar dataKey="Protein" fill="#8884d8" />
    </BarChart>
    </div>
    <p className="ml-3">Items:</p>
    <div className=" container grid grid-cols-3">
   
    {itemList.map(item => 

    <a href="#" class="block max-w-sm p-3 bg-gray-100 transition-all text-black m-2 rounded-lg shadow hover:bg-gray-200 ">

    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{item.name}</h5>
    <p class="font-normal text-sm text-gray-700 ">{item.calories} calories</p>
    </a>


    )}
    </div>
    </div>
    </div>)
}