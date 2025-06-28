import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root/Root';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import ProjectDetails from '../Components/Projects/ProjectDetails';
import ContactPage from '../Pages/Contact/ContactPage';

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
        path: '/about',
        Component: About,
      },
      {
        path: '/contact',
        Component: ContactPage,
      },
      {
        path: '/projectDetails/:id',
        Component: ProjectDetails,
      },
    ],
  },
]);
