import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTests,
  selectLoading,
  selectUser,
  selectError,
  loadTestResults,
} from "../../features/tests/testsSlice";
import { Title, Wrapper } from "../auth/style";

const TestSelectionPage = () => {
  const tests = useSelector(selectTests);
  const loading = useSelector(selectLoading);
  const user = useSelector(selectUser);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTestResults());
  }, [dispatch]);

  type Test = {
    id: string;
    user: string;
    score: number;
    name: string;
  };
  return (
    <Wrapper>
      {loading ? <Title>Loading...</Title> : null}
      {error ? <p>Error: {error?.message}</p> : null}
      {user ? (
        <div>
          <h2>Welcome, {user?.username}!</h2>
          <h3>Choose a test:</h3>
          <ul>
            {tests.map((test: Test) => (
              <li key={test?.id}>
                <a href={`/test/${test?.id}`}>{test?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Title size>Please login or register access tests!!!!!!!!!!.</Title>
      )}
    </Wrapper>
  );
};

export default TestSelectionPage;
