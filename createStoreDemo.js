import { bindActionCreators, createStore } from "redux";


function todoReaducer(state , action) {

    if(action.type == "add_todo"){
        const todoText = action.payload.todoText;

        return [...state , {text : todoText  , isFinished : false , id : (state.length == 0) ? 1 : state[ state.length -1].id +1}]

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



// const response = createStore(todoReaducer , [])
// console.log(response);
/**  output of the response :
 * {
  dispatch: [Function: dispatch],
  subscribe: [Function: subscribe],
  getState: [Function: getState],
  replaceReducer: [Function: replaceReducer],
  
}
 */
// console.log(response.getState()); //example => This is showing the current state is and the current state is =>[]

/** yaha per destructuring kiya hai */
// const {dispatch , subscribe , getState , replaceReducer} = createStore(todoReaducer , [])

// subscribe( () => console.log(getState()))   // when anytime there is any change in state this subscribe is always call. 

// dispatch({ type : 'add_todo' , payload: {todoText : 'todo 1'}})   // this is a action object
// console.log(getState());


// dispatch( {type : 'add_todo' , payload : {todoText : "this is second todo"}})
// console.log(getState());

// dispatch( {type : 'delete_todo' , payload : {todoId: 2}})
// console.log(getState());





/** this is the example of action creator and the bindactioncreator */

// action object ko => action method mai convert karne ko (action creator)
const addtodo = (todoText) => ({ type : 'add_todo' , payload: {todoText}})
const deletetodo = (id) => ({ type : 'delete_todo' , payload: {todoId: id}})

const {dispatch , subscribe , getState , replaceReducer} = createStore(todoReaducer , [])

subscribe( () => console.log(getState()))   // when anytime there is any change in state this subscribe is always call. 

dispatch(addtodo('action_creators'))   // this is the action creater example.

dispatch(addtodo('action_creators2'))   // this is the action creater example.

dispatch(deletetodo(2))



/** example of : bindActionCreator */

const {action} = bindActionCreators( {addtodo ,deletetodo} , dispatch)

action.addtodo('bind_todo 1')
action.addtodo('bind_todo 2')
action.deletetodo(2)

