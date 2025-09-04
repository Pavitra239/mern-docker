import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import UserDetail from './pages/UserDetail';
import CreateUser from './pages/CreateUser';
import Home from './pages/Home';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/users',
    element: <UsersPage />,
  },
  {
    path: '/users/:id',
    element: <UserDetail />,
  },
  {
    path: '/create-user',
    element: <CreateUser />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
