import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";

import TextInput from "./components/TextInput/TextInput";
import Todo from "./components/Todo/Todo";
import TodoList from "./components/TodoList/TodoList";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ todoArray: [] });

  function getTodos(cb) {
    axios.get("/all").then(response => {
      setLoading(false);
      console.log(response);
      setData({ todoArray: response.data });
      cb();
    });
  }

  useEffect(() => {
    getTodos(() => console.log("finished loading data"));
  }, []);

  function checkLoading() {
    if (loading === true) {
      return <h1>Loading . . . </h1>;
    } else {
      return (
        <div>
          <Jumbotron>
            <Row>
              <Col xs={12} md={{ span: 8, offset: 2 }}>
                <TextInput loading={loading} setLoading={setLoading} />
              </Col>
            </Row>
          </Jumbotron>
          <Container>
            <Row>
              <Col xs={12} md={{ span: 8, offset: 2 }}>
                <TodoList>
                  {data.todoArray.map((element, index) => (
                    <Todo
                      key={index}
                      text={element.text}
                      id={element._id}
                      loading={loading}
                      getTodos={getTodos}
                      setLoading={setLoading}
                    />
                  ))}
                </TodoList>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }

  return <div className="App">{checkLoading()}</div>;
}

export default App;
