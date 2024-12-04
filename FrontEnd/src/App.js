import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Home from './Home';
import StudentsView from './compenent/students/StudentsView';
import NavBar from './compenent/common/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudent from './compenent/students/AddStudent';
import EditStudent from './compenent/students/EditStudent';
import StudentProfile from './compenent/students/StudentProfile';

function App() {
  return (
    <main className="container mb - 5"> 
      <Router>
      <NavBar/>
        <Routes>
          <Route 
          exact 
          path='/'
          element = {<Home/>}></Route>
          <Route 
          exact 
          path='/view_allStudents'
          element = {<StudentsView/>}></Route>
          <Route 
          exact 
          path='/add_student'
          element = {<AddStudent/>}></Route>
          <Route
						exact
						path="/edit-students/:id"
						element={<EditStudent />}></Route>
            <Route
						exact
						path="/view-student-profile/:id"
						element={<StudentProfile />}></Route>
        </Routes>
        
      </Router>
    </main>

  );
}

export default App;
