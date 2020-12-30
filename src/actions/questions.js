import { saveQuestion } from "../utils/api"
import { saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_ANSWER = 'ADD_ANSWER'
export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestion(info) {
    return dispatch => {
        return dispatch(saveQuestion(info))
            .then(question => console.log('success'))
            .catch(err => console.log(err))
    }
}


// export function addAnswer(info) {
//     return dispatch => {
//         return dispatch(saveQuestionAnswer(info))
//             .then(question => console.log('success'))
//             .catch(err => console.log(err))
//     }
// }



function addAnswer(answerInfo) {
    return {
        type: ADD_ANSWER,
        answerInfo,
    }
}

export function handleAddAnswer(answerInfo) {
    return (dispatch, getState) => {
        // const { authedUser } = getState()
        // dispatch(showLoading())

        return saveQuestionAnswer(answerInfo)
            .then((answerInfo) => dispatch(addAnswer(answerInfo)))
            // .then(() => dispatch(hideLoading()))
            .catch(err => console.log(err))
    }
}