import "./App.css";
import { ToastContainer } from "react-toastify";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Login from "./Pages/Login/Login";
import Notfound from "./Pages/Notfound/Notfound";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import Register from "./Pages/Login/Register/Register";
import Required from "./Pages/Login/Required/Required";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import AddProduct from "./Pages/AddProduct/AddProduct";
import MyProduct from "./Pages/MyProduct/MyProduct";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/detail/:id"
          element={
            <Required>
              <ProductDetail />
            </Required>
          }
        />
        <Route
          path="/manage"
          element={
            <Required>
              <ManageInventory />
            </Required>
          }
        />
        <Route
          path="/addproduct"
          element={
            <Required>
              <AddProduct />
            </Required>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myproduct" element={<MyProduct />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
