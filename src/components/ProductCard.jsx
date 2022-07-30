import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProductCard = ({ item, handleDelete, handleEdit }) => {
  // console.log(item);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Title>{item.lastname}</Card.Title>
        <Card.Text>{item.descr}</Card.Text>
        <Button
          className="btn btn-success"
          variant="primary"
          onClick={() => handleEdit(item.id)}
        >
          EDIT
        </Button>
        <Button
          className="btn btn-danger mx-1"
          variant="primary"
          onClick={() => handleDelete(item.id)}
        >
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
