import React, { useState } from "react";

const Tasks = ()=>{
  const[tasks, setTasks]= useState([]);
  const[add, setAdd]= useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  function addTask(e){
      e.preventDefault();
      console.log("Prueba")
      setTasks([...tasks, add])
      setAdd('');
      console.log(tasks)
      
  };

  const deleteTask = (index) => {
    const newList = [...tasks];
    newList.splice(index,1);
    setTasks(newList);
  };

  return (
    <>
      <div className="container">
        <h1>To do list</h1>
          <div>
            <form onSubmit={addTask}>
            <input placeholder="Escribe la tarea" value={add} onChange={(e) => {setAdd(e.target.value);}}/>
            </form>
            <ul>
            {tasks.map((item,id) => <li className="list-item" 
                                        key={id} 
                                        onMouseEnter={() => setHoveredIndex(id)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        >
                    {item}
                    {hoveredIndex === id && (
                    <button onClick={() => deleteTask(id)}>x</button>
                    )}
                    </li>
            )}
            </ul>
          </div>
     </div>
    </>
  );
}

 export default Tasks;
