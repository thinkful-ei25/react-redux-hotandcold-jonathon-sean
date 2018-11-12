

//reset game
export const RESET_GAME ='RESET_GAME'; 

export const resetGame = ()=> ({ 
  type: RESET_GAME
}); 

//info
export const INFO = 'INFO'; 
export const info = () => ({ 
  type: INFO
}); 

//guess
export const GUESS = 'GUESS'; 
export const guess = (guess) => ({ 
  type : GUESS, 
  guess
}); 