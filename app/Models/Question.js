export default class Question {
    constructor({ question, correct_answer, incorrect_answers }) {
        this.question = question
        this.correctAnswer = correct_answer
        this.incorrectAnswers = incorrect_answers
    }

    get Template() {

        return /*html*/ `
    <div class="col-md-4 col-12 my-3">
        <div class="card">
            <div class="card-header">
               ${this.question}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item" onclick="" id="correct"></li>
                <li class="list-group-item" onclick="" id="incorrect"></li>
            </ul>
        </div>
    </div>`
    }

    get Answers(){
        
    }


}



