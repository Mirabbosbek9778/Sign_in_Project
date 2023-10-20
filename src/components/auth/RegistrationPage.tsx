import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
  selectUser,
  selectError,
} from "../../features/auth/authSlice";
import { Button, FormBox, Inputs, Title, Wrapper } from "./style";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const error = useSelector(selectError);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <Wrapper>
      <Title>Registration</Title>
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
        <Button type="submit">Register</Button>
      </FormBox>
      {user && <p>Registered as: {user?.username}</p>}
    </Wrapper>
  );
};

export default RegistrationPage;
