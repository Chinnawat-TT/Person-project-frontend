import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import MenPage from "../pages/sale/MenPage";
import WomenPage from "../pages/sale/WomenPage";
import KidsPage from "../pages/sale/KidsPage";
import CartPage from "../pages/CartPage";
import ProfilePage from "../pages/ProfilePage";
import RedireactAuthenticated from "../features/auth/RedireactAuthenticated";

import AddProduct from "../features/admin/AddProduct";

import AdminLayout from "../layout/AdminLayout";
import AdminAuthenticate from "../features/auth/AdminAuthenticate";

import AuthContextProvider from "../contexts/AuthContext";
import CartContextProvider from "../contexts/CartContext";
import RedirectLogin from "../features/auth/RedirectLogin";
import WishList from "../pages/WishList";
import SaleCardItem from "../components/SaleCardItem";
import AdminPage from "../pages/admin/AdminPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "/cart",
        element: (
          <RedireactAuthenticated>
          <CartContextProvider>
              <CartPage />
          </CartContextProvider>
          </RedireactAuthenticated>
        ),
      },
      { path: "/signup", element: <SignUpPage /> },
      { 
        path: "/login",
         element: 
         <RedirectLogin>

           <LoginPage />
          
         </RedirectLogin>
         },
      { path: "/men", element: <MenPage /> },
      { path: "/women", element: <WomenPage /> },
      { path: "/kids", element: <KidsPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/wishlist" , element : <WishList/>},
      { path: "/men/saleitem/:itemId", element: <SaleCardItem /> },
      { path: "/women/saleitem/:itemId", element: <SaleCardItem /> },
      { path: "/kids/saleitem/:itemId", element : <SaleCardItem /> }
    ],
  },
  {
    path: "",
    element: (
      <AdminAuthenticate>
        <AdminLayout />
      </AdminAuthenticate>
    ),
    children: [
      { path: "/admin", element: <AdminPage /> },
      { path: "/admin/addproduct", element: <AddProduct /> },
      // { path: "/admin/allproduct", element: <AdminAllproduct /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
