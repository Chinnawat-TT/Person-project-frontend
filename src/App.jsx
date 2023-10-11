import Router from "./router/Router"
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <Router/>
    <ToastContainer
position="top-center"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  )
}

export default App
