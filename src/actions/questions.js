import { saveQuestion } from "../utils/api"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

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