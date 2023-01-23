import React from 'react'
import useQuiz from '../context/UseQuiz'

const Question = () => {

const {questions, respuestas, setRespuestas } = useQuiz()



  return (
<div className='mt-5 w-75 m-auto'> 

    {questions.map((question, index) => (
       
 <div  key={index} className='mt-5 border border-white rounded-3 p-3'>
 <div className='mb-3'>{question.question}</div>

 
 <div className='d-flex flex-column gap-3'>
    
     <div>
    <input onChange={ (e) => setRespuestas([...respuestas, e.target.value])} value={question.choices[0]} className='me-2' type="radio" name={index} id={index} />
    <label htmlFor={index}>{question.choices[0]}</label></div>
    <div>
    <input onChange={ (e) => setRespuestas([...respuestas, e.target.value])} value={question.choices[1]}  className='me-2' type="radio" name={index} id={index} />
    <label htmlFor={index}>{question.choices[1]}</label></div>
    <div>
    <input onChange={ (e) => setRespuestas([...respuestas, e.target.value])} value={question.choices[2]} className='me-2' type="radio" name={index} id={index} />
    <label htmlFor={index}>{question.choices[2]}</label></div>
 </div>
 
 </div>
    )
        ) }

</div>

    
   

  )
}

export default Question