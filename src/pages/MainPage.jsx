import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { deletetodoAction, donetodoAction } from "../store/todo/todo.action"

const MainPage = () => {
    const {UsersList} = useSelector(state => state.todo)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const ondelete = (user) => {
        dispatch(deletetodoAction(user))
    }

    const donetask = (user) => {
        dispatch(donetodoAction(user))
        navigate('/done')
    }



    return (
        <div>
            <Link to={'/create'}>CREATE</Link>
            <Link to={'/done'}>DONE</Link>
            {UsersList.map((user) => <div key={user}>
                <h1>{user}</h1>
                <button onClick={() => ondelete(user)}>DELETE</button>
                <button onClick={() => donetask(user)}>DONE</button>
            </div>)}
        </div>
    )
}

export default MainPage