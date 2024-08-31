import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const DonePage = () => {
    const {DoneList} = useSelector((state) => state.todo)

    return(
        <div>
            <Link to={'/'}>MAIN</Link>
            <Link to={'/create'}>CREATE</Link>
            {DoneList.map((item) => <div key={item}>
                <h1>{item}</h1>
            </div>)}
        </div>
    )
}

export default DonePage