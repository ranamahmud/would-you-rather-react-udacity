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

      let replyingTo = {}
      if (answerInfo.replyingTo !== null) {
        replyingTo = {
          [answerInfo.replyingTo]: {
            ...state[answerInfo.replyingTo],
            replies: state[answerInfo.replyingTo].replies.concat([answerInfo.id])
          }
        }
      }

      return {
        ...state,
        ...replyingTo,
        [action.answer.id]: action.answer,
      }
    default:
      return state
  }
}