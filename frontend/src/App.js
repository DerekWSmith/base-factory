import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import HomePage from "./views/HomePage";
import Car1 from "./views/Car1";
import Cat from "./views/Cat";
import NotFound from "./views/NotFound";
import {Row, Col, Container} from "react-bootstrap";
import LogoComponent from "./components/logoComponent";

function App() {
  return (
 <BrowserRouter>
        {/* Your application's navigation */}
        <Container fluid>
          <LogoComponent />
        <Row  className="d-flex justify-content-end">
            <Col sm={12} md={1} lg={1}>
              Home
            </Col>
            <Col sm={12} md={1} lg={1}>
              Car1
            </Col>
            <Col sm={12} md={1} lg={1}>
              <Link to="/Cat">Cat</Link>
            </Col>
        </Row>

        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path="/Car1" element={<Car1 />} />
          <Route path="/Cat" element={<Cat />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NotFound />} />
      </Routes>
          </Container>

    </BrowserRouter>
  );
}

export default App;
