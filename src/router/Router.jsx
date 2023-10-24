import{ RouterProvider,createBrowserRouter} from 'react-router-dom'
import Layout from '../layout/Layout'
import SignUpPage from '../pages/SignUpPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import MenPage from '../pages/sale/MenPage'
import WomenPage from '../pages/sale/WomenPage'
import KidsPage from '../pages/sale/KidsPage'
import CartPage from '../pages/CartPage'
import ProfilePage from '../pages/ProfilePage'
import RedireactAuthenticated from '../features/auth/RedireactAuthenticated'
import AdminPage from '../features/profile/AdminPage'
import AddProduct from '../features/profile/AddProduct'
import SaleCardItem from '../pages/sale/SaleCardItem'
import AdminLayout from '../layout/AdminLayout'
import AdminAuthenticate from '../features/auth/AdminAuthenticate'
import AdminAllproduct from '../pages/admin/AdminAllProduct'
import AuthContextProvider from '../contexts/AuthContext'

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
            {path : "/kids", element : <KidsPage/>},
            {path : "/profile", element : <ProfilePage/>},
            {path : "/men/saleitem/:itemId",element:<SaleCardItem/>}

        ]
    },{
        path : "/",    
        element : (

                    <AdminAuthenticate>

                        <AdminLayout/>
                    </AdminAuthenticate>

        ),
        children :[
            {path : "",element : <HomePage/>},
            {path : "/login" , element : <LoginPage/> },
            {path : "/men", element : <MenPage/>},
            {path : "/women", element : <WomenPage/>},
            {path : "/kids", element : <KidsPage/>},
            {path : "/admin", element : <AdminPage/>},
            {path : "/admin/addproduct", element : <AddProduct/>},
            {path : "/admin/allproduct", element : <AdminAllproduct/>},
            {path : "/men/saleitem/:itemId",element:<SaleCardItem/>}


        ]
    }
])

export default function Router(){
    return <RouterProvider router={router}/>
}