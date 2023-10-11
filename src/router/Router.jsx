import{ RouterProvider,createBrowserRouter} from 'react-router-dom'
import Layout from '../layout/Layout'
import SignUpPage from '../pages/SignUpPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import MenPage from '../pages/sale/MenPage'
import WomenPage from '../pages/sale/WomenPage'
import KidsPage from '../pages/sale/KidsPage'
import CartPage from '../pages/CartPage'

const router = createBrowserRouter([
    {
        path : "/",    
        element : (
            
            <Layout/>
        ),
        children :[
            {path : "",element : <HomePage/>},
            {path : '/cart', element : <CartPage/>},
            {path : "/signup" , element : <SignUpPage/>},
            {path : "/login" , element : <LoginPage/> },
            {path : "/men", element : <MenPage/>},
            {path : "/women", element : <WomenPage/>},
            {path : "/kids", element : <KidsPage/>}

        ]
    }
])

export default function Router(){
    return <RouterProvider router={router}/>
}