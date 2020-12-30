import { saveQuestion } from "../utils/api"
import { saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'
export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

// export function addQuestion(info) {
//     return dispatch => {
//         return dispatch(saveQuestion(info))
//             .then(question => console.log('success'))
//             .catch(err => console.log(err))
//     }
// }


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
    return (dispatch) => {
        // const { authedUser } = getState()
        // dispatch(showLoading())

        return saveQuestionAnswer(answerInfo)
            .then((answerInfo) => dispatch(addAnswer(answerInfo)))
            // .then(() => dispatch(hideLoading()))
            .catch(err => console.log(err))
    }
}

// new question action


function addQuestion(infoQuestion) {
    return {
        type: ADD_QUESTION,
        infoQuestion,
    }
}

export function handleAddQuestion(text, replyingTo) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        // dispatch(showLoading())

        return saveQuestion({
            text,
            author: authedUser,
            replyingTo
        })
            .then((tweet) => dispatch(addQuestion(tweet)))
        // .then(() => dispatch(hideLoading()))
    }
}