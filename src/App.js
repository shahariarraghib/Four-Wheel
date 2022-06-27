import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/ShareFile/Navbar/Navbar';
import DeshBoard from './Pages/DeshBoard/DeshBoard/DeshBoard';
import AdminAddProducts from './Pages/DeshBoard/AdminAddProducts/AdminAddProducts';
import ManageAllProduucts from './Pages/DeshBoard/ManageAllProduucts/ManageAllProduucts';
import UpdateProduct from './Pages/DeshBoard/UpdateProduct/UpdateProduct';
import Login from './Pages/Login/Login/Login';
import Authprovider from './Context/AuthProvider/Authprovider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import Booking from './Pages/Booking/Booking/Booking';
import MyOrders from './Pages/Booking/MyOrders/MyOrders';
import AllOrders from './Pages/Booking/AllOrders/AllOrders';
import MakeAdmin from './Pages/DeshBoard/MakeAdmin/MakeAdmin';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import Footer from './Pages/ShareFile/Footer/Footer';
import PageNotFound from './Pages/ShareFile/PageNotFound/PageNotFound';



function App() {
  return (
    // <div className="App">
    <Authprovider>
      <Router>
        <Navbar></Navbar>
        <Routes>

          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>

          </Route>
          <Route path="/dashboard" element={<PrivateRoute>
            <DeshBoard />
          </PrivateRoute>

          }>

            <Route path={`/dashboard/adminaddproducts`} element={<AdminAddProducts></AdminAddProducts>}></Route>
            <Route path={`/dashboard/manageallproduucts`} element={<ManageAllProduucts></ManageAllProduucts>}></Route>
            <Route path={`/dashboard/updateproduct/:id`} element={<UpdateProduct></UpdateProduct>}></Route>
            <Route path={`/dashboard/myorders`} element={<MyOrders></MyOrders>}></Route>
            <Route path={`/dashboard/allorders`} element={<AllOrders></AllOrders>}></Route>

            <Route path={`/dashboard/makeadmin`} element={<AdminRoute>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>}></Route>
          </Route>

          <Route path={`/booking/:id`} element={<PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>}></Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}>
          </Route>
          {/* 
        
        <Route exact path="/" element={<Home />}>
        </Route> */}
        </Routes>
        <Footer></Footer>
      </Router>
    </Authprovider>
    // </div>
  );
}

export default App;
