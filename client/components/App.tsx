import { Route, Routes } from 'react-router-dom'

import AddDispute from './AddDispute'
import AddUser from './AddUser'
import DisputesList from './DisputesList'
import Header from './Header'
import Home from './Home'
import Nav from './Nav'
import { CssBaseline } from '@mui/material'

// Temp/hardcoded user id of 1. This will change when we get Auth0 set up
export const userId = 1

function App() {
  
  // Authenticated/Not Authenticated thingies go in this component
  // Db called to get user data from Home component once authenticated

  return (
    <>
      <CssBaseline />
      {/* <header className="header">
        <h1>Parking • Tix </h1>
      </header> */}
      <section className="main">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<AddUser />} />
          <Route path="/disputes" element={<DisputesList />} />
          <Route path="/disputes/add" element={<AddDispute />} />
        </Routes>
      </section>
    </>
  )
}

export default App
