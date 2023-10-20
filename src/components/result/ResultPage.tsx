import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectResults,
  loadResults,
} from "../../features/results/resultsSlice";
import { Title, Wrapper } from "../auth/style";

const ResultPage = () => {
  const dispatch = useDispatch();
  const results = useSelector(selectResults);

  useEffect(() => {
    dispatch(loadResults());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>All Results</Title>
      {results ? (
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {results?.map((result) => (
              <tr key={result?.id}>
                <td>{result?.user}</td>
                <td>{result?.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Title>Loading rezults...</Title>
      )}
    </Wrapper>
  );
};

export default ResultPage;
