import React from 'react'
import useQuiz from '../context/UseQuiz'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";


const Puntaje = () => {


    const {volverAJugar, score } = useQuiz()
   
   


    const porcentaje = localStorage.getItem("score")*10


  return (
 <div className='text-white d-flex flex-column justify-content-center align-items-center'>
    <div>
        <h1 className=' mt-5'>Tu puntaje es {localStorage.getItem("score")? localStorage.getItem("score"): "0"}</h1></div>
    <div className='w-10 mt-5'>
    <CircularProgressbar
             styles={buildStyles({
              pathColor: '#000000',
              trailColor: '#ffffff',
              textColor: '#ffffff',
              backgroundColor: '#3e98c7',
            
             
        




             } )}
         
          percentage={localStorage.getItem("score")*10}
           value={porcentaje}
           text={ `${localStorage.getItem("score") ? localStorage.getItem("score") :0}/ 10` }/>
           </div>
    
    <div className='mt-5'>
            <button className='btn boton' onClick={volverAJugar} type='submit'>Volver a jugar </button>
   </div>
  </div>
  )
}

export default Puntaje