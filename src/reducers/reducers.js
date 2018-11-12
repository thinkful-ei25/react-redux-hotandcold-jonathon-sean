import {INFO, RESET_GAME, GUESS} from '../actions/actions'

const initialState = { 
  guesses: [],
  feedback: 'Make your guess!',
  info: false, 
  correctAnswer: 20
}    

export const hotColdReducer = (state=initialState, action) => { 
  if(action.type === INFO){ 
    return Object.assign({}, state, { info : !state.info})
  }
  else if (action.type === RESET_GAME){ 
    return Object.assign({}, initialState, { correctAnswer : Math.floor(Math.random() * 100) + 1}); 
  }
  else if (action.type === GUESS){ 
    const feedback = findFeedBack(action.guess, state.correctAnswer); 
    //console.log('feedback', feedback);
    return Object.assign(
      {}, state, {guesses : [...state.guesses, action.guess], 
      feedback: feedback})
  }
  return state; 
}; 

function findFeedBack(guess, answer){ 
  const diff = Math.abs(answer - guess); 
  if (diff <= 5 && diff !== 0){ 
    return 'hot'
  }
  else if (diff === 0){ 
    return 'gotcha!!'
  }
  else { 
    return 'cold'; 
  }
}
