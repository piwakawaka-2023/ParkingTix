import { Route, Routes } from 'react-router-dom'

import AddDispute from './AddDispute'
import AddUser from './AddUser'
import DisputesList from './DisputesList'
import Header from './Header'
import Home from './Home'
import Nav from './Nav'
import { CssBaseline } from '@mui/material'
import EmailTest from './EmailTest'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Footer from './Footer'
import NotFoundPage from './NotFoundPage'


// Temp/hardcoded user id of 1. This will change when we get Auth0 set up
export const userId = 1

function App() {
  // Authenticated/Not Authenticated thingies go in this component
  // Db called to get user data from Home component once authenticated

  return (
    <>
      <CssBaseline />
      <section className="main">
        <Header />
        <Nav />
        <IfAuthenticated>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disputes" element={<DisputesList />} />
            <Route path="/disputes/add" element={<AddDispute />} />
            <Route path="/test" element={<EmailTest />} />
            <Route path="/signup" element={<AddUser />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* <Route path="/signup" element={<AddUser />} /> */}
          </Routes>
        </IfNotAuthenticated>
        <Footer />
      </section>
    </>
  )
}

export default App
