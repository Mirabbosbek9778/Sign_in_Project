import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  selectUser,
  selectError,
} from "../../features/auth/authSlice";
import { Button, FormBox, Inputs, Title, Wrapper } from "./style";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const error = useSelector(selectError);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(loginUser(formData));
  };

  return (
    <Wrapper>
      <Title>Login</Title>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <FormBox onSubmit={handleSubmit}>
        <Inputs
          type="text"
          name="username"
          value={formData?.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <Inputs
          type="password"
          name="password"
          value={formData?.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <Button type="submit">Login</Button>
      </FormBox>
      {user && <p>Logged in as: {user?.username}</p>}
    </Wrapper>
  );
};

export default Login;
