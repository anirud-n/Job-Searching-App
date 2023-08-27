import {Link} from 'react-router-dom'
import './index.css'
import Navbar from '../Navbar/index'

const Home = () => (
  <>
    <div className="home-cont">
      <Navbar />
      <div className="home-bottom-cont">
        <div className="home-content-cont">
          <h1 className="home-heading">Find The Job That Fits Your Life</h1>
          <p className="home-para">
            Millions of people are searching for jobs, salary
            information,company reviews. Find the job that fits your abilities
            and potential.
          </p>
          <Link to="/jobs">
            <button className="find-jobs-btn" type="button">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  </>
)

export default Home
