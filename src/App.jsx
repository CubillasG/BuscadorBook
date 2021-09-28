import { Cabeza } from "./Cabeza";
import { Grilla } from "./Grilla";
import './App.css'



export function App(){
  return <div className='container'>
          <div className='row'>
         
          
              <Cabeza/>
              <Grilla/>
          
          </div>
        </div>
}

