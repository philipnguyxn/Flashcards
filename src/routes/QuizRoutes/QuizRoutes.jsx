// Node Modules
import { Route, useMatches } from 'react-router-dom';

//Components
import NewQuizForm from '../components/NewQuizForm';
import Quiz from '../features/quizzes/Quiz';
import Quizzes from '../features/quizzes/Quizzes';

const QuizRoutes = () => {
  let match = useMatches();

  return (
    <>
      <Route path={`${match.path}/new`} element={<NewQuizForm />} />
      <Route path={`${match.path}/:quizId`} element={<Quiz />} />
      <Route path={`${match.path}`} element={<Quizzes />} />
    </>
  );
};

export default QuizRoutes;
