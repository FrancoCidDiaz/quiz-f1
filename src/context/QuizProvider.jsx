import { useState,  createContext} from "react";
import { useNavigate } from "react-router-dom";

const QuizContext = createContext()

const QuizProvider = ({children}) => {


    
    const navigate = useNavigate();

const [score, setScore] = useState([])
const [respuestas, setRespuestas] = useState([])

const questions = [
    {
        question: "1. ¿Cuantos campeonatos mundiales tiene Michael Schumacher?",
        choices: ["5","7","6"],
        answer: "7"

    },
    { question: "2. ¿Quien fue el campeon el año 1991?",
    choices: ["Ayrton Senna","Alain Prost","Nigel Mansell"],
    answer: "Ayrton Senna"},
    {
        question: "3. ¿Quien fue el primer campeon el año 1950?",
        choices: ["Juan Manuel Fangio","Alberto Ascari","Giuseppe Farina"],
        answer: "Giuseppe Farina"
    },
    {
        question: "4. ¿Cual de estos pilotos fue el mas joven en su debut?",
        choices: ["Fernando Alonso","Lewis Hamilton","Daniel Ricciardo"],
        answer: "Fernando Alonso"
    },
    {
        question: "5. Piloto retirado el año 2022",
        choices: ["Kimi Räikkönen","Sebastian Vettel","Fernando Alonso"],
        answer: "Sebastian Vettel"
    },
    {
        question: "6. Año del accidente de Ayrton Senna",
        choices: ["1993","1992","1994"],
        answer: "1994"
    },
    {
        question: "7. Escuderia en la que tuvo su debut Michael Schumacher",
        choices: ["Benetton","Jordan","Ferrari"],
        answer: "Jordan"
    },
    {
        question: "8. Piloto campeon el año 1998",
        choices: ["Michael Schumacher","Mika Häkkinen","Damon Hill"],
        answer: "Mika Häkkinen"
    },
    {
        question: "9. Nacionalidad del piloto Emerson Fittipaldi",
        choices: ["Francesa","Brasilera","Italiana"],
        answer: "Brasilera"
    },
    {
        question: "10. Cantidad de campeonatos ganados del piloto Juan Manuel Fangio",
        choices: ["4","3","5"],
        answer: "5"
    }
    
]

const verificarPuntaje =(e) => {
    e.preventDefault()




  questions.map((question, index)=> {
     if(question.answer== respuestas[index]){
       
        console.log(question.answer)
        console.log(respuestas[index])

        setScore(score.push(respuestas[index]))
    
    
     }
     }
  )

 setTimeout(() => {
     navigate("/score")   
 }, 1000);


}


 const volverAJugar = () => {
    setScore([])
    navigate("/")
    setRespuestas([]) 
    
 }




return (
<QuizContext.Provider
value={{
    score,
    setScore,
    questions,
    verificarPuntaje, 
    respuestas,
    setRespuestas,
    volverAJugar
}}>
  


  {children}
</QuizContext.Provider>
)

}



export {
    QuizProvider
}

export default QuizContext