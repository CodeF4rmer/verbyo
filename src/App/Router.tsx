import { RouteObject, useRoutes } from 'react-router-dom';

import {
  Blog,
  News,
  Subscribe

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
    element: <News />,
    children: [],
  },
  {
    path: "/Subscribe",
    element: <Subscribe />,
    children: [],
  },

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