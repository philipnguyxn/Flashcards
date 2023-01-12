//Node Modules
import { Routes, Route, NavLink } from 'react-router-dom';

//routes
import routes from '../constants/routes'; //child routes
import TopicRoutes from '../routes/TopicRoutes/TopicRoutes';
import QuizRoutes from '../routes/QuizRoutes/QuizRoutes';

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={routes.topicsRoute()} activeClassName="active">
              Topics
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.quizzesRoute()} activeClassName="active">
              Quizzes
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.newQuizRoute()} activeClassName="active">
              New Quiz
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/topics" element={<TopicRoutes />} />
        <Route path="/quizzes" element={<QuizRoutes />} />
      </Routes>
    </>
  );
};

export default App;
