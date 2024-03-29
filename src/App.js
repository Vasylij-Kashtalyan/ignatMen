import { TopBarr } from "./components/TopBarr/TopBarr";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MenPage } from "./components/MenPage/MenPage";

function App() {
  return (
    <>
      <TopBarr />
      <Suspense>
        <Routes>
          <Route path="/" element={<MenPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
