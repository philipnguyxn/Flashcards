// Node Modules
import { Route, useMatches } from 'react-router-dom';

// Components
import NewTopicForm from '../components/NewTopicForm';
import Topics from '../features/topics/Topics';
import Topic from '../features/topics/Topic';

const TopicRoutes = () => {
  let match = useMatches();

  return (
    <>
      <Route path={`${match.path}/new`} element={<NewTopicForm />} />
      <Route path={`${match.path}/:topicId`} element={<Topic />} />
      <Route path={`${match.path}`} element={<Topics />} />
    </>
  );
};

export default TopicRoutes;
