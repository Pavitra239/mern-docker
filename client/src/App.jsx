import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import UserDetail from './pages/UserDetail';
import CreateUser from './pages/CreateUser';
const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home Page</div>,
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
