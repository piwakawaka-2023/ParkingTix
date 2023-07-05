import { Route, Routes } from 'react-router-dom'

import AddDispute from './AddDispute'
import AddUser from './AddUser'
import DisputesList from './DisputesList'
import Header from './Header'
import Home from './Home'
import Nav from './Nav'
import { CssBaseline } from '@mui/material'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Footer from './Footer'
import AddReviewsForm from './AddReviews'
import NotFoundPage from './NotFoundPage'
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
        <Nav />
        <IfAuthenticated>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disputes" element={<DisputesList />} />
            <Route path="/disputes/add" element={<AddDispute />} />
            <Route path="/test" element={<EmailTest />} />
            <Route path="/signup" element={<AddUser />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/gmailAuthLanding" element={<GmailAuthLanding />} />
            <Route path="/AddReviewForm" element={<AddReviewsForm/>} />
          </Routes>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* <Route path="/signup" element={<AddUser />} /> */}
          </Routes>
        </IfNotAuthenticated>
      </section>
    </>
  )
}

export default App
