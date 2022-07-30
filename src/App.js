import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";
function App() {
  // Modal for adding
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // modal for editing
  const [edit, setEdit] = useState(false);
  const handleEditClose = () => setEdit(false);
  const handleEditShow = () => setEdit(true);
  // state for array with products

  const [products, setProducts] = useState([]);
  const handleProduct = (newObj) => {
    let newProducts = [...products];
    newProducts.push(newObj);
    setProducts(newProducts);
  };

  const handleDelete = (id) => {
    let newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  };

  const [editProduct, setEditProducts] = useState({});
  const handleEdit = (id) => {
    let obj = products.filter((item) => item.id === id);
    console.log(editProduct);
    handleEditShow();
    setEditProducts(obj[0]);
  };

  const handleSave = (obj) => {
    let newProducts = products.map((item) => {
      if (item.id == obj.id) {
        return obj;
      }
      return item;
    });
    setProducts(newProducts);
    handleEditClose();
  };
  return (
    <>
      <Header handleShow={handleShow} />
      <AddProduct
        show={show}
        handleClose={handleClose}
        handleProduct={handleProduct}
      />
      <ProductList
        products={products}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

      {edit && (
        <EditProduct
          handleEditClose={handleEditClose}
          edit={edit}
          editProduct={editProduct}
          handleSave={handleSave}
          products={products}
        />
      )}
    </>
  );
}

export default App;
