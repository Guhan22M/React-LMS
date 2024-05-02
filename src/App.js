//import logo from './logo.svg';
import './App.css';
import Main from './components/main'


function App() {
  return (
    <Main />

  );
}

export default App;



// CourseContext.js
// import React, { createContext, useState } from 'react';

// export const CourseContext = createContext();

// export const CourseProvider = ({ children }) => {
//     const [courses, setCourses] = useState([]);

//     return (
//         <CourseContext.Provider value={{ courses, setCourses }}>
//             {children}
//         </CourseContext.Provider>
//     );
// };

// // Python.js
// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { CourseContext } from "../CourseContext";

// function Python() {
//     const { courses, setCourses } = useContext(CourseContext);

//     // Rest of your component code...

//     return (
//         <CourseContext.Provider value={{ courses, setCourses }}>
//             {/* Your component JSX */}
//         </CourseContext.Provider>
//     );
// }

// export default Python;

// // MyCourses.js
// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { CourseContext } from "../CourseContext";

// function MyCourses() {
//     const { courses } = useContext(CourseContext);

//     // Rest of your component code...

//     return (
//         <div>
//             {/* Your component JSX */}
//         </div>
//     );
// }

// export default MyCourses;

// // Main.js
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { CourseProvider } from './CourseContext';
// import Header from './header';
// import Home from './home';
// import Python from './Course_Details/python';
// import C from './Course_Details/c';
// import MySql from './Course_Details/my_sql';
// import Html from './Course_Details/html';
// import Css from './Course_Details/css';
// import Mongodb from './Course_Details/mongodb';
// import Javascript from './Course_Details/javascript';
// import R from './Course_Details/r';
// import Java from './Course_Details/java';
// import Php from './Course_Details/php';
// import Login from './User/login';
// import Register from './User/register';
// import Dashboard from './User/dashboard';
// import MyCourses from './User/mycourses';
// import FavouriteCourse from './User/favourite_course';
// import About from './about';
// import Footer from './footer';

// function Main() {
//     return (
//       <div className="App">
//         <Header/>
//         <CourseProvider>
//           <Routes>
//             <Route path="/" element={<Home />}></Route>
//             <Route path="/about" element={<About />}></Route>
//             <Route path="/python" element={<Python />}></Route>
//             <Route path="/c" element={<C />}></Route>
//             <Route path="/mysql" element={<MySql />}></Route>
//             <Route path="/html" element={<Html />}></Route>
//             <Route path="/css" element={<Css />}></Route>
//             <Route path="/mongodb" element={<Mongodb />}></Route>
//             <Route path="/javascript" element={<Javascript />}></Route>
//             <Route path="/r" element={<R />}></Route>
//             <Route path="/java" element={<Java />}></Route>
//             <Route path="/php" element={<Php />}></Route>
//             <Route path="/user-login" element={<Login />}></Route>
//             <Route path="/user-register" element={<Register />}></Route>
//             <Route path="/user-dashboard" element={<Dashboard />}></Route>
//             <Route path="/user-mycourses" element={<MyCourses />}></Route>
//             <Route path="/user-favourite_course" element={<FavouriteCourse />}></Route>
//           </Routes>
//         </CourseProvider>
//         <Footer />
//       </div>
//     );
// }

// export default Main; 

