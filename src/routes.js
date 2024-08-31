import CreatePage from "./pages/CreatePage";
import DonePage from "./pages/DonePage";
import MainPage from "./pages/MainPage";

const route = [
    {
        element:<MainPage/>,
        path:'/'
    },
    {
        element:<CreatePage/>,
        path:'create'
    },
    {
        element:<DonePage/>,
        path:'done'
    }
]

export default route