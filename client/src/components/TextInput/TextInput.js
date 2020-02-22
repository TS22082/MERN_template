import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

function TextInput() {
  return (
    <InputGroup>
      <FormControl placeholder="Add Todo" />
      <InputGroup.Append>
        <Button variant="outline-primary">Button</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default TextInput;
