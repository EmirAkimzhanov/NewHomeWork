import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ProductCard from "./ProductCard";

const EditProduct = ({ handleEditClose, edit, editProduct, handleSave }) => {
  const [product, setProduct] = useState(editProduct);
  console.log(product);
  const editName = (e) => {
    let newObj = {
      ...product,
      name: e.target.value,
    };
    setProduct(newObj);
  };
  const editLastname = (e) => {
    let newObj = {
      ...product,
      lastname: e.target.value,
    };
    setProduct(newObj);
  };
  const editDescr = (e) => {
    let newObj = {
      ...product,
      descr: e.target.value,
    };
    setProduct(newObj);
  };
  const editImage = (e) => {
    let newObj = {
      ...product,
      image: e.target.value,
    };
    setProduct(newObj);
  };
  return (
    <Modal show={edit} onHide={handleEditClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form">
          <Form.Control
            className="inp"
            value={product.name}
            size="lg"
            type="text"
            placeholder="Name"
            onChange={editName}
          />
          <Form.Control
            className="inp"
            size="lg"
            value={product.lastname}
            onChange={editLastname}
            type="text"
            placeholder="Lastname"
          />
          <Form.Control
            className="inp"
            value={product.descr}
            onChange={editDescr}
            size="lg"
            type="text"
            placeholder="Description"
          />
          <Form.Control
            className="inp"
            value={product.image}
            onChange={editImage}
            size="lg"
            type="text"
            placeholder="Image"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleEditClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleSave(product)}>
          Save product
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProduct;
