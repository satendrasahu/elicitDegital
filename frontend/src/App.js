import { Routes, Route } from "react-router-dom";
import { routes } from "./navigator/routes";
function App() {
  const modifyUserRoutes = [...routes?.modifyUser?.path];
  return (
    <Routes>
      <Route path={routes?.home?.path} element={<routes.home.Component />} />
      <Route path={routes?.user?.path} element={<routes.user.Component />} />
      {modifyUserRoutes?.map((path, index) => (
        <Route
          path={path}
          element={<routes.modifyUser.Component />}
          key={index}
        />
      ))}
    </Routes>
  );
}

export default App;
