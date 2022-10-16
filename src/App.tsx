import "./App.css";
import Dictionary from "./pages/Dictionary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Results from "./pages/Results";
import Sidebar from "./component/SideBar/Sidebar";
import styled from "@emotion/styled";
import AddWord from "./pages/AddWord";
import TestPage from "./pages/TestPage";
import Header from "./component/Header/Header";

const AppWrapper = styled.div(() => ({
  display: "grid",
  gridTemplateColumns: "215px 6fr",
  backgroundColor: "rgb(230, 230, 255)",
  minHeight: "100vh",
}));

const Content = styled.div(() => ({
  padding: "70px 10px 10px 10px",
}));

function App(): JSX.Element {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Sidebar />
        <Content>
          <Routes>
            <Route path="" element={<Dictionary />} />
            <Route path="test" element={<TestPage />} />
            <Route path="results" element={<Results />} />
            <Route path="new-word" element={<AddWord />} />
          </Routes>
        </Content>
      </AppWrapper>
    </Router>
  );
}

export default App;
