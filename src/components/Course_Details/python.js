// // import { useParams } from "react-router-dom";
// import {Link} from 'react-router-dom';
// import React,{useState, useEffect} from "react";
// import { createContext } from 'react';
// // import MyCourses from '../User/mycourses';
// // import MyCourses from '../User/mycourses';
// /* eslint-disable jsx-a11y/anchor-is-valid */

// export const CourseContext = createContext();

// function Python(){
//     // const {course_id}=useParams();
    
    
//     const [courses, setCourses] = useState([]);
//     useEffect(() => {
//         console.log(courses); // This will log the updated state after it has been set
//     }, [courses]);

//     // const addToCart = (name, link) => {
//     //     const newCourse = {
//     //         name: name,
//     //         link: link
//     //     };
//     //     setCourses([...courses, newCourse]);
//     //     console.log(courses);
//     // };
//     const addToCart = (name, link) => {
//         setCourses(prevCourses => {
//             return [...prevCourses, { name, link }];
//         });
//         console.log(courses); // This will log the previous state due to the asynchronous nature of setCourses
//     };
    
    
//     const handleAddToCart = (name, link, event) => {
//         // console.log("Name:", name);
//         // console.log("Link:", link);
//         event.preventDefault(); 
//         addToCart(name, link);
//         // console.log("Courses after adding:", courses);
//       };

//     return (
//         <CourseContext.Provider value={{courses}}>
//         <div className="container mt-3">
//             <div className="row">
//                 <div className="col-4">
//                     <img src="/assats/Python.jpeg" className="img-thumbnail" alt="..." />
//                 </div>
//                 <div className="col-8">
//                     <h3>Python</h3>
//                     <p className="fw-bold">Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.</p>
//                     <p className="fw-bold">It is used for:</p>
//                     <p className="fw-bold">   i) web development (server-side)</p>
//                     <p className="fw-bold">    ii)software development,</p>
//                     <p className="fw-bold">    iii)mathematics,</p>
//                     <p className="fw-bold">    iv)system scripting.</p>
//                 </div>
//             </div>
//             {/* Course Videos */}
//             <div className="card mt-4">
//                 <div className="card-header">
//                     <h3>Course Videos</h3>
//                 </div>
//                 <ul className="list-group list-group-flush">
//                     <li className='list-group-item'>Programming with Mosh
//                         <span className='float-end'>
//                             <span className='me-5'>6 Hours 15 Minutes</span>
//                             <Link to="https://youtu.be/_uQrJ0TkZlc?si=0et5yNSJtDp7wE94"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
//                             <button onClick={(e) => handleAddToCart("Programming with Mosh","https://youtu.be/_uQrJ0TkZlc?si=0et5yNSJtDp7wE94",e)} className='btn btn-sm btn-primary m-2'>
//                                 <i className='bi bi-cart-plus'></i></button></Link>
//                         </span>
//                     </li>
//                     <li className='list-group-item'>Brocode
//                         <span className='float-end'>
//                             <span className='me-5'>12 Hours </span>
//                             <Link to="https://youtu.be/XKHEtdqhLK8?si=pWHeDxXuu9Fc8nQD"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
//                             <button onClick={(e) => handleAddToCart("Brocode","https://youtu.be/XKHEtdqhLK8?si=pWHeDxXuu9Fc8nQD",e)} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
//                         </span>
//                     </li>
//                     <li className='list-group-item'>CodeIO
//                         <span className='float-end'>
//                             <span className='me-5'>2 Hours</span>
//                             <Link to="https://youtu.be/xErUnOKQbFw?si=YijdGEzYYlmjyX6o"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
//                             <button onClick={(e) => handleAddToCart("CodeIO","https://youtu.be/xErUnOKQbFw?si=YijdGEzYYlmjyX6o",e)} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
//                         </span>
//                     </li>
//                     <li className='list-group-item'>Freecodecamp
//                         <span className='float-end'>
//                             <span className='me-5'>4 Hours 30 Minutes</span>
//                             <Link to="https://youtu.be/rfscVS0vtbw?si=EzdZKJ4O7j5pICxn"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
//                             <button onClick={(e) => handleAddToCart("Freecodecamp","https://youtu.be/rfscVS0vtbw?si=EzdZKJ4O7j5pICxn",e)} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
//                         </span>
//                     </li>
//                     <li className='list-group-item'>Simplilearn
//                         <span className='float-end'>
//                             <span className='me-5'>12 Hours</span>
//                             <Link to="https://youtu.be/ITSMDeOgXxw?si=IXemhfJENQB_e_9w"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button>
//                             <button onClick={(e) => handleAddToCart("Simplilearn","https://youtu.be/ITSMDeOgXxw?si=IXemhfJENQB_e_9w",e)} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button></Link>
//                         </span>
//                     </li>
//                 </ul>
//             </div>
//             <h3 className="border-bottom pb-1 mt-4">Related Courses </h3> 
//             <div className="row">
//                 <div className="col-12 col-md-3 col-sm-6">
//                     <div className="card ">
//                         <Link to='./html'><img src="/assats/html.jpeg" className="card-img-top" alt="..." /></Link>
//                         <div className="card-body">
//                         <Link to="./html" className="btn btn-primary float-end">HTML</Link> 
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-12 col-md-3 col-sm-6">
//                     <div className="card">
//                     <Link to='./css'><img src="/assats/css.jpeg" className="card-img-top" alt="..." /></Link>
//                         <div className="card-body">
//                         <Link to="./css" className="btn btn-primary float-end">React</Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//         </div>
//         </CourseContext.Provider>
    	
//     );
// }

// export default Python;


// import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import React,{useContext} from "react";
import authContext from './context';
/* eslint-disable jsx-a11y/anchor-is-valid */

function Python(){
    // const {course_id}=useParams();
    // const [courses, setCourses] = useState([]);
   
    const {setCourse, user}= useContext(authContext)
   
    const addToCart = (course, name, link) =>{
        const CourseExist = user.find(i => i.name === name)
        if(!CourseExist){
            setCourse([...user,{course, name, link}]);
        }else{
            alert("already exsist course!!!");
        }
    };

    // setCourse(courses)
    return (
        <div>
        
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/assats/Python.jpeg" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>Python</h3>
                    <p className="fw-bold">Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.</p>
                    <p className="fw-bold">It is used for:</p>
                    <p className="fw-bold">   i) web development (server-side)</p>
                    <p className="fw-bold">    ii)software development,</p>
                    <p className="fw-bold">    iii)mathematics,</p>
                    <p className="fw-bold">    iv)system scripting.</p>
                </div>
            </div>
            {/* Course Videos */}
            <div className="card mt-4">
                <div className="card-header">
                    <h3>Course Videos</h3>
                </div>
                <ul className="list-group list-group-flush">
                    <li className='list-group-item'>Programming with Mosh
                        <span className='float-end'>
                            <span className='me-5'>6 Hours 15 Minutes</span>
                            <Link to="https://youtu.be/_uQrJ0TkZlc?si=0et5yNSJtDp7wE94"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={() => addToCart("Python","Programming with Mosh","https://youtu.be/_uQrJ0TkZlc?si=0et5yNSJtDp7wE94")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>Brocode
                        <span className='float-end'>
                            <span className='me-5'>12 Hours </span>
                            <Link to="https://youtu.be/XKHEtdqhLK8?si=pWHeDxXuu9Fc8nQD"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={() => addToCart("Python","Brocode","https://youtu.be/XKHEtdqhLK8?si=pWHeDxXuu9Fc8nQD")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>CodeIO
                        <span className='float-end'>
                            <span className='me-5'>2 Hours</span>
                            <Link to="https://youtu.be/xErUnOKQbFw?si=YijdGEzYYlmjyX6o"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={() => addToCart("Python","CodeIO","https://youtu.be/xErUnOKQbFw?si=YijdGEzYYlmjyX6o")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>Freecodecamp
                        <span className='float-end'>
                            <span className='me-5'>4 Hours 30 Minutes</span>
                            <Link to="https://youtu.be/rfscVS0vtbw?si=EzdZKJ4O7j5pICxn"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={() => addToCart("Python","Freecodecamp","https://youtu.be/rfscVS0vtbw?si=EzdZKJ4O7j5pICxn")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>Simplilearn
                        <span className='float-end'>
                            <span className='me-5'>12 Hours</span>
                            <Link to="https://youtu.be/ITSMDeOgXxw?si=IXemhfJENQB_e_9w"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={() => addToCart("Python","Simplilearn","https://youtu.be/ITSMDeOgXxw?si=IXemhfJENQB_e_9w")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                </ul>
            </div>
            <h3 className="border-bottom pb-1 mt-4">Related Courses </h3> 
            <div className="row">
                <div className="col-12 col-md-3 col-sm-6">
                    <div className="card ">
                        <Link to='./html'><img src="/assats/html.jpeg" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                        <Link to="./html" className="btn btn-primary float-end">HTML</Link> 
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-sm-6">
                    <div className="card">
                    <Link to='./css'><img src="/assats/css.jpeg" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                        <Link to="./css" className="btn btn-primary float-end">React</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Python;