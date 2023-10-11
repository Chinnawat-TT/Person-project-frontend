import{ RouterProvider,createBrowserRouter} from 'react-router-dom'
import Layout from '../layout/Layout'
import SignUpPage from '../pages/SignUpPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'

const router = createBrowserRouter([
    {
        path : "/",    
        element : (
            
            <Layout/>
        ),
        children :[
            {path : "",element : <HomePage/>},
            {path : "/signup" , element : <SignUpPage/>},
            {path : "/login" , element : <LoginPage/> }
        ]
    }
])

export default function Router(){
    return <RouterProvider router={router}/>
}