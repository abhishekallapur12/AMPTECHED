import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Programs from './pages/Programs.tsx';
import ProgramDetails from './pages/ProgramDetails.tsx';
import Certifications from './pages/Certifications.tsx';
import Placements from './pages/Placements.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Pricing from './pages/Pricing.tsx';
import Blog from './pages/Blog.tsx';
import TrainingCenters from './pages/TrainingCenters.tsx';
import Achievements from './pages/Achievements.tsx';
import JobPortal from './pages/JobPortal.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'programs',
        element: <Programs />,
      },
      {
        path: 'programs/:id',
        element: <ProgramDetails />,
      },
      {
        path: 'certifications',
        element: <Certifications />,
      },
      {
        path: 'training-centers',
        element: <TrainingCenters />,
      },
      {
        path: 'achievements',
        element: <Achievements />,
      },
      {
        path: 'placements',
        element: <Placements />,
      },
      {
        path: 'job-portal',
        element: <JobPortal />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'blog',
        element: <Blog />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
