import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Links, Nav } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <div>
      <Nav>
        <Links to="/">Home</Links>
        <Links to="/tweets">Tweets</Links>
      </Nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
