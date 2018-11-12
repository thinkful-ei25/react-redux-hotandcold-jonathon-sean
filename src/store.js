import {createStore} from 'redux'; 

import {hotColdReducer} from './reducers/reducers'; 

//export default createStore(trelloReducer); 
export default createStore(hotColdReducer); 


