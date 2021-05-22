import { FC } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
} from "reactstrap";

const Login: FC = () => {
  return (
    <Col xs="12" sm="6" md="6" lg="6" xl="6" className="mx-auto">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input type="text" name="username" id="username" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Col>
  );
};

export default Login;
