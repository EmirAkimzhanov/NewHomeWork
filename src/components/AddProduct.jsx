import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function AddProduct({ handleClose, show, handleProduct }) {
  let [name, setName] = useState("");
  let [lastname, setLastname] = useState("");
  let [descr, setDescr] = useState("");
  let [image, setImage] = useState("");

  const handleAdd = () => {
    if (!name.trim() || !lastname.trim() || !descr.trim() || !image.trim()) {
      alert("zapolnite vse polya");
      return;
    }
    let newObj = {
      name,
      lastname,
      descr,
      image,
      id: Date.now(),
    };

    // console.log(newObj);
    handleProduct(newObj);
    setName("");
    setLastname("");
    setDescr("");
    setImage("");
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <Form.Control
              className="inp"
              value={name}
              size="lg"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control
              className="inp"
              size="lg"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              placeholder="Lastname"
            />
            <Form.Control
              className="inp"
              value={descr}
              onChange={(e) => setDescr(e.target.value)}
              size="lg"
              type="text"
              placeholder="Description"
            />
            <Form.Control
              className="inp"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              size="lg"
              type="text"
              placeholder="Image"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProduct;
