import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSelectedTest,
  selectTestResults,
  loadTestResults,
} from "../../features/tests/testsSlice";

const TestPage = () => {
  const dispatch = useDispatch();
  const selectedTest = useSelector(selectSelectedTest);
  const testResults = useSelector(selectTestResults) as Result[];

  useEffect(() => {
    if (selectedTest && selectedTest) {
      dispatch(loadTestResults(selectedTest));
    }
  }, [dispatch, selectedTest]);

  type Result = {
    id: string;
    user: string;
    score: number;
  };

  return (
    <div>
      <h2>Test: {selectedTest ? selectedTest : "Loading..."}</h2>
      <h3>Test Results</h3>
      <ul>
        {testResults.map((result: Result) => (
          <li key={result?.id}>
            {result?.user}: {result?.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;
