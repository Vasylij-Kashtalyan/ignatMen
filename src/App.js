import { AppBar } from "./components/AppBarr/AppBarr";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MenPage } from "./components/MenPage/MenPage";

function App() {
  return (
    <>
      <AppBar />
      <Suspense>
        <Routes>
          <Route path="/" element={<MenPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
