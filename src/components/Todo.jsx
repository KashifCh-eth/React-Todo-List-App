import React from 'react'
import { useState, useEffect } from "react"
import {Trash3Fill , PencilSquare , PlusCircle } from "react-bootstrap-icons"

// const GetLocalTodo = () => {
//     let AllPrviousTodos = localStorage.getItem("list");
//     if (AllPrviousTodos) {
//         return JSON.parse(localStorage.getItem("list"));
//     }
// }

function Todo() {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([
        { id: Math.random(), name: "Check My Projects" },
        {id: Math.random() , name : "Love You Ho Gaya❤"} 
    ]);
    const [updateData, setUpdateData] = useState(null);
    const [IsToggle, setToggle] = useState(true);



    const AddItem = (e) => {
        e.preventDefault();

        if (!input) {
            alert("Please Fill Input Value");
        } else if (input === " ") {
             alert("Please Fill Input Value");
        }
        else if (updateData) {
            setTodo(todo.map((e) => {
                if (e.id === updateData) {
                    return { ...e, name: input }
                }
                return e;
            }))
            setInput('');
            setToggle(true);
            setUpdateData(null);
        } else {
            const AllInput = { id: Math.random(), name: input }
            setTodo([...todo, AllInput]);
            setInput('')
        }
    }
   
    const DeleteItem = (Elme) => {
        const TrashData = todo.filter((e) => {
            return e.id !== Elme.id 
        })
        setTodo(TrashData);
    }


    const EditItem = (Elme) => {
        const UpdateFind = todo.find((e) => {
            return e.id === Elme.id
        })
        setInput(UpdateFind.name);
        setUpdateData(Elme.id);
        setToggle(false);
    }

    // useEffect(() => {
    //     localStorage.setItem("list", JSON.stringify(todo));  
    // },[todo])
  return (
      <div>
          <form className=' formClass d-flex justify-content-center h2 '> 
              <div className='m-2'>
                  <input type="text" placeholder='Today Plan' onChange={(e) => {
                      setInput(e.target.value); 
                  }}  value={input}></input>
              </div>
               <div>
                <button onClick={AddItem}> { IsToggle ? <PlusCircle /> : <PencilSquare /> } </button>
              </div>
          </form>

          <div className='mt-5 h3'>
              {todo?.map((e) => {
                  return (
                      <div key={e.id} className="d-flex justify-content-center" >
                          <div>
                           <input type="text"  value={e.name} disabled/>    
                          </div>
                          <div className='d-flex justify-content-center'>
                               <div>
                                  <button onClick={() => EditItem(e)}> <PencilSquare /> </button>
                               </div>  
                                <div>
                                  <button onClick={()=> DeleteItem(e)}> <Trash3Fill /> </button>
                               </div>  
                          </div>
                     </div>
                  )
              })}
          </div>
     </div>
  )
}

export default Todo
