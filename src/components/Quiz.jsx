import React from 'react'
import { useEffect } from 'react'
import Question from './Question'
import useQuiz from '../context/UseQuiz'


const Quiz = () => {

    const {verificarPuntaje, score } = useQuiz()

     useEffect(() => {
 

    
    localStorage.setItem("score", score)

       
                                        
     }, [score]) 

 
    
    

    


    
  return (
    <>
    <Question/>
    <form className='d-flex flex-col justify-content-center'  onSubmit={verificarPuntaje}>
        <button className='btn boton my-5'  type='submit'>Verificar Puntaje</button>
    </form>
    
    </>
  )
}

export default Quiz