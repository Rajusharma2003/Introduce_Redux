import { combineReducers, createStore } from "redux";

function todoReducer(state=[] , action) {
    if(action.type == "add_todo"){
        const todoText = action.payload.todoText;

        return [
            ...state ,
             {text : todoText  , isFinished : false , id : (state.length == 0) ? 1 : state[ state.length -1].id +1}
            ]

    }else if(action.type == "delete_todo"){
        const todoId = action.payload.todoId;
        return state.filter(t => t.id != todoId)

    }else if(action.type == "edit_todo"){
        const todo = action.payload.todo;
        const todoText = action.payload.todoText

        return state.map( t => {
            if(t.id == todo.id){
               t.text = todoText
            }
            return t
        })
    }
    return state


}


function userReducer(state =[] , action){

    if(action.type == 'add_user'){
        const userName = action.payload.userName

        return [
            ...state,
            {name : userName , id : (state.length == 0) ? 1 : state[state.length -1].id +1 }
        ]
    }
    return state
}


// create action Object 
const addtodo = (todoText) => ( {type : 'add_todo' , payload : {todoText}})
const adduser = (userName) => ({type : "add_user" , payload : {userName}})

// --------------------------------------------------------------------------
const reduc = combineReducers({todo : todoReducer , users : userReducer})
//-----------------------------------------------------------------------------


const {dispatch , subscribe , getState , replaceReducer } = createStore(reduc)
subscribe( () => console.log(getState()))
/** kuy ki createStore mai ek hi reducer funtion aa skta hai iss liye 
 *       ++++ combineReducer ++++ ka use karte hai
 */


// dispatch( {type : 'add_todo' , payload : {todoText: 'todo todo'}})
dispatch(addtodo('created succesfully'))
dispatch(adduser('jone doe'))
console.log(getState());




