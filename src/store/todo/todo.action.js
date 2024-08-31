export const addtodoAction = (payload) => {
    return{
        type:'ADD-TODO',
        payload
    }
}

export const deletetodoAction = (payload) => {
    return{
        type:'DELETE-TODO',
        payload
    }
}

export const donetodoAction = (payload) => {
    return{
        type:'DONE-TODO',
        payload
    }
}