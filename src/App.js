import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm/index'
import Home from './components/Home/index'
import Jobs from './components/Jobs/index'

// These are the lists used in the application. You can move them to any component needed.
const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

// Replace your code here
const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/" component={Home} />
        <Route exact path="/jobs" component={Jobs} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
