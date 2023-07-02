import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Go to Home</Link>
        </li>
        <li>
          <Link to="/disputes">Go to Disputes</Link>
        </li>
        <li>
          <Link to="/disputes/add">Add Disputes</Link>
        </li>
      </ul>
    </>
  )
}

export default Nav
