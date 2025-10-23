import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root/Root';
import Home from '../Pages/Home/Home';
import ProjectDetails from '../Components/Projects/ProjectDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: '/projectDetails/:id',
        Component: ProjectDetails,
      },
    ],
  },
]);
