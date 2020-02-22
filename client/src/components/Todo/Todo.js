import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";

function Todo(props) {
  function deleteTodo() {
    props.setLoading(true);
    axios
      .delete(`/delete?id=${props.id}`)
      .then(() => props.getTodos(() => props.setLoading(false)));
  }

  return (
    <Card className="text-center mb-4">
      <Card.Body>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="outline-success">Update</Button>{" "}
        <Button onClick={() => deleteTodo()} variant="outline-danger">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Todo;
