import { Route, Routes } from 'react-router-dom'
import AddDisputes from './AddDisputes'
import DisputesList from './DisputesList'
import Header from './Header'
import Home from './Home'
import Nav from './Nav'

function App() {
  return (
    <>
      <header className="header">
        <h1>Parking • Tix </h1>
      </header>
      <section className="main">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disputes" element={<DisputesList />} />
          <Route path="/adddispute" element={<AddDisputes />} />
        </Routes>
      </section>
    </>
  )
}

export default App
