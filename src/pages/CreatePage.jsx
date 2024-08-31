import { useState } from "react"
import { useDispatch } from "react-redux"
import { addtodoAction } from "../store/todo/todo.action"
import { Link } from "react-router-dom"

const CreatePage = () => {
    const [value,setvalue] = useState('')
    const dispatch = useDispatch()
    const onsubmit = (e) => {
        e.preventDefault()
        dispatch(addtodoAction(value))
        setvalue('')
    }

    return (
        <form onSubmit={onsubmit}>
            <Link to={'/'}>MAIN</Link>
            <Link to={'/done'}>DONE</Link>
            <input type="text" value={value} onChange={(e) => setvalue(e.target.value)} />
            <button type="submit">submit</button>
        </form>
    )
}

export default CreatePage