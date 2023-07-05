import { Route, Routes } from 'react-router-dom'

import AddDispute from './AddDispute'
import AddUser from './AddUser'
import DisputeList from './dashboard/DisputeList'
import Header from './Header'
import Home from './Home'
import Nav from './Nav'
import { CssBaseline } from '@mui/material'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Footer from './Footer'
import NotFoundPage from './NotFoundPage'
import DashboardLayout from './DashboardLayout'
import DashboardPage from './dashboard/DashboardPage'
import Profile from './dashboard/Profile'
import Settings from './dashboard/Settings'

import GmailAuthLanding from './GmailAuthLanding'
import EmailTest from './EmailTest'
import { useAppSelector } from '../hooks/hooks'

function App() {
  // Authenticated/Not Authenticated thingies go in this component
  // Db called to get user data from Home component once authenticated

  useAppSelector((state) => {
    console.log(state)
  })

  return (
    <>
      <CssBaseline />
      <section className="main">
        <Header />
        {/* <Nav /> */}
        <IfAuthenticated>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Nav />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/dashboard"
              element={
                <>
                  <DashboardLayout>
                    <DashboardPage />
                  </DashboardLayout>
                </>
              }
            />
            <Route
              path="/dashboard/disputes"
              element={
                <>
                  <DashboardLayout>
                    <DisputeList />
                  </DashboardLayout>
                </>
              }
            />
            <Route
              path="/dashboard/disputes/new"
              element={
                <>
                  <DashboardLayout>
                    <AddDispute />
                  </DashboardLayout>
                </>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <>
                  <DashboardLayout>
                    <Profile />
                  </DashboardLayout>
                </>
              }
            />
            <Route
              path="/dashboard/profile/settings"
              element={
                <>
                  <DashboardLayout>
                    <Settings />
                  </DashboardLayout>
                </>
              }
            />

            {/* <Route path="/disputes" element={<DisputeList />} />
            <Route path="/disputes/add" element={<AddDispute />} /> */}
            <Route path="/test" element={<EmailTest />} />
            <Route path="/signup" element={<AddUser />} />
            <Route
              path="*"
              element={
                <>
                  <Nav />
                  <NotFoundPage />
                  <Footer />
                </>
              }
            />

            <Route path="/gmailAuthLanding" element={<GmailAuthLanding />} />
          </Routes>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Nav />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Nav />
                  <Home />
                  <Footer />
                </>
              }
            />
            {/* <Route path="/signup" element={<AddUser />} /> */}
          </Routes>
        </IfNotAuthenticated>
        {/* <Footer /> */}
      </section>
    </>
  )
}

export default App
