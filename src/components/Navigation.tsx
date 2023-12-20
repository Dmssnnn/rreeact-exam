import React from 'react'
import TodoApp from '../pages/TodoApp'
import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <div>
        <div className='navContainer'>
           
            <button> <Link to={"/"}>first Page</Link></button>
            <button> <Link to={"/secondPage"}>SecondPage</Link> </button>
            <button><Link to={"/ThirdPage"}>Third Page</Link></button>
        </div>
         
    </div>
   
  )
}
