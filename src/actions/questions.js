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
        dispatch(addAnswer(answerInfo))


        return saveQuestionAnswer(answerInfo)
            .then(() => console.log('answer saved'))
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

export function handleAddQuestion(question) {
    return (dispatch) => {
        // dispatch(showLoading())

        return saveQuestion(question)
            .then((question) => dispatch(addQuestion(question)))
            .catch((error) => console.log({ error }))
        // .then(() => dispatch(hideLoading()))
    }
}