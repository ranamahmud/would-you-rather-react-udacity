import { ADD_QUESTION, ADD_ANSWER } from '../actions/questions'

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
    case ADD_QUESTION:
      return {
        ...state,
        ...action.infoQuestion,
      }

    case ADD_ANSWER:
      const { tweet } = action

      let replyingTo = {}
      if (tweet.replyingTo !== null) {
        replyingTo = {
          [tweet.replyingTo]: {
            ...state[tweet.replyingTo],
            replies: state[tweet.replyingTo].replies.concat([tweet.id])
          }
        }
      }

      return {
        ...state,
        ...replyingTo,
        [action.tweet.id]: action.tweet,
      }
    default:
      return state
  }
}