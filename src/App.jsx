
import Router from "./router/Router"
import { ToastContainer } from 'react-toastify';
import { useAuth } from "./hooks/use-Auth"
import Loading from "./components/Loading"
function App() {

const { intialLoading } = useAuth()
if(intialLoading){
  return <Loading/>
}else {
  return (
    <>
    <Router/>
    <ToastContainer position="top-center" autoClose={2000} theme="dark" />
    </>
  )
}
}



export default App
