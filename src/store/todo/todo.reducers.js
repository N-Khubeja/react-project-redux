const initialstate = {
    UsersList:[],
    DoneList:[]
}

export const todoreducer = (state = initialstate,action) => {
    switch(action.type){
        case'ADD-TODO':
        return {
            UsersList:[...state.UsersList,action.payload],
            DoneList:[]
        }
        case'DELETE-TODO':
        return{
            UsersList:state.UsersList.filter((item) => item !== action.payload),
            DoneList:[]
        }
        case'DONE-TODO':
        return{
            UsersList:state.UsersList.filter((item) => item !== action.payload),
            DoneList:[...state.DoneList,action.payload]
        }
        default:
            return state
    }
        
}