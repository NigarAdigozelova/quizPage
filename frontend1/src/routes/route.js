import MainRoot from "../components/MainRoot"
import About from "../pages/About"
import Blog from "../pages/Blog"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Projects from "../pages/Projects"
import Services from "../pages/Services"

const ROUTES=[
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'projects',
                element:<Projects/>
            },
            {
                path:'services',
                element:<Services/>
            },
            {
                path:'blog',
                element:<Blog/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
            {
                path:'*',
                element:<NotFound/>
            }
        ]
    }
]
export default ROUTES