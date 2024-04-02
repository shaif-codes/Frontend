import './App.css';
import AdminDashBoard from './Components/Admin/AdminDashboard';
import Login from './Components/Common/Login';
import Home from './Components/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import StudentDashboard from './Components/Student/StudentDashboard';
import TeacherDashboard from './Components/Teacher/TeacherDashboard';
// import Header from './Components/Navigation/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/home" element = {<Home/>}/>
      <Route path="/admin" element = {<AdminDashBoard/>}/>
      <Route path="/student" element = {<StudentDashboard/>}/>
      <Route path="/teacher" element = {<TeacherDashboard/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
