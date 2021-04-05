import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "./AxiosService.js"

class QuestionsService {
  
// NOTE async indicates the function will take an undetermined amount of time, 
//can be waited for or 'fired and forgot'

async getAllQuestions() { 
    // await the response and then set the value
    // res is an AXIOS object
    let res = await api.get()
    // AXIOS will always put the response in the data property
    console.log(res)
    // MAP itterates over the array of results and turns each one into a 
    //'Person' object and returns a new array of Person's
    
    let questions = res.data.results.map(q => new Question(q))
    console.log(questions)
    ProxyState.questions = questions
  }


}



export const questionsService = new QuestionsService();


// {
//     "response_code": 0,
//     "results": [
//       {
//         "category": "Entertainment: Music",
//         "type": "boolean",
//         "difficulty": "easy",
//         "question": "The music group Daft Punk got their name from a negative review they recieved.",
//         "correct_answer": "True",
//         "incorrect_answers": [
//           "False"
//         ]
//       },