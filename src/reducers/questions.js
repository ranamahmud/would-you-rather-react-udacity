import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from '../actions/questions'

// export default function questions(state = {}, action) {
//   switch (action.type) {
//     case RECEIVE_QUESTIONS:
//       return {
//         ...state,
//         ...action.questions
//       }
//     default:
//       return state
//   }
// }

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      console.log('ADD_QUESTION reducer')
      return {
        ...state,
        [action.infoQuestion.id]: action.infoQuestion
      }
    case ADD_ANSWER:
      const { answerInfo } = action
      console.log(action)
      return {
        ...state,
        [action.answerInfo.qid]: {
          ...state[answerInfo.qid],
          [action.answer]: {
            ...state[answerInfo.qid][action.answer],
            votes: state[action.answerInfo.qid][action.answerInfo.answer].votes.concat([action.answerInfo.authedUser])
          }
          // optionTwo: ans
        },
      }

    default:
      return state
  }
}