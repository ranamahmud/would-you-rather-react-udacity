import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from '../actions/questions'
export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.infoQuestion.id]: action.infoQuestion
      }
    case ADD_ANSWER:
      const { answerInfo } = action
      return {
        ...state,
        [action.answerInfo.qid]: {
          ...state[answerInfo.qid],
          [action.answerInfo.answer]: {
            ...state[answerInfo.qid][action.answerInfo.answer],
            votes: state[action.answerInfo.qid][action.answerInfo.answer].votes.concat([action.answerInfo.authedUser])
          }
        },
      }

    default:
      return state
  }
}