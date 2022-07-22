import { RouteObject, useRoutes } from 'react-router-dom';

import {
  Blog,
  News,
  Help,
  Features,
  Article
} from 'pages';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Blog />,
    children: [],
  },
  {
    path: "/Blog",
    element: <Blog />,
    children: [],
  },
  {
    path: "/News",
    element: <News />,
    children: [],
  },
  {
    path: "/News/:id",
    element: <Article />,
    children: [],
  },
  {
    path: "/Help",
    element: <Help />,
    children: [],
  },
  {
    path: "/Features",
    element: <Features />,
    children: [],
  }
];



const Router: React.FC = () => {
  const routing = useRoutes(routes);
  return (
    <>
      {routing}
    </>
  );

}

export default Router;