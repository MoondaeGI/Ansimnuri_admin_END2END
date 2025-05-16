import './App.css'
import {Dashboard, Member, BlackList} from './page'
import {Routes, Route} from 'react-router-dom'
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import {useState} from 'react'


function App() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Container fluid className="App p-0">
      {/* Header */}
      <Navbar expand="md" bg="light" className="py-3" expanded={expanded} onToggle={setExpanded}>
        <Container>
          <Navbar.Brand href="/">안심누리</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">대시보드</Nav.Link>
              <Nav.Link href="/member">회원관리</Nav.Link>
              <Nav.Link href="/blackList">블랙리스트</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Body */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/member" element={<Member />} />
          <Route path="/blackList" element={<BlackList />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="py-4 mt-5 footer bg-dark text-light">
        <Container>
          <Row>
            <Col md={6} className="mb-3 text-center text-md-start mb-md-0">
              <div>안심누리</div>
              <div>© CompanyName. All rights reserved.</div>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <Nav className="justify-content-center justify-content-md-end">
                <Nav.Link href="/">대시보드</Nav.Link>
                <Nav.Link href="/member">회원관리</Nav.Link>
                <Nav.Link href="/blackList">블랙리스트</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  )
}

export default App
