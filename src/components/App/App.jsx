import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Container } from "./App.styled";
const Home = lazy(() => import("pages/Home"));
const Tweets = lazy(() => import("pages/Tweets"));
const SharedLayout = lazy(() => import("components/SharedLayout"));

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} replace />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
