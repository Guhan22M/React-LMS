// import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useContext} from 'react';
import authContext from './context';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* eslint-disable jsx-a11y/anchor-is-valid */

function Mongodb(){
    const {setCourse, user}= useContext(authContext)
   
    const addToCart = (course, name, link) =>{
        const CourseExist = user.find(i => i.name === name)
        if(!CourseExist){
            setCourse([...user,{course, name, link}]);
            toast.success('Course Added Successfully!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip
                });
        }else{
            toast.error('Course Already Exist !!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip
                });
        }
    };
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/assats/mongodb.jpeg" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>Mongodb</h3>
                    <p className="fw-bold">MongoDB is a document database. It stores data in a type of JSON format called BSON.</p>
                    <p className="fw-bold">MongoDB is a document database and can be installed locally or hosted in the cloud.</p>
                </div>
            </div>
            {/* Course Videos */}
            <div className="card mt-4">
                <div className="card-header">
                    <h3>Course Videos</h3>
                </div>
                <ul className="list-group list-group-flush">
                    <li className='list-group-item'>FreeCodeCamp 
                        <span className='float-end'>
                            <span className='me-5'>3 Hours </span>
                            <Link to ="https://youtu.be/xh4gy1lbL2k?si=kbiU_-MCZGFl3bs7"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={()=>addToCart("Mongo DB","FreeCodeCamp","https://youtu.be/xh4gy1lbL2k?si=kbiU_-MCZGFl3bs7")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>Brocode
                        <span className='float-end'>
                            <span className='me-5'>12 Hours </span>
                            <Link to ="https://youtu.be/XKHEtdqhLK8?si=pWHeDxXuu9Fc8nQD"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={()=>addToCart("Mongo DB","Brocode","https://youtu.be/XKHEtdqhLK8?si=pWHeDxXuu9Fc8nQD")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>CodeIO
                        <span className='float-end'>
                            <span className='me-5'>2 Hours</span>
                            <Link to ="https://youtu.be/xErUnOKQbFw?si=YijdGEzYYlmjyX6o"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={()=>addToCart("Mongo DB","CodeIO","https://youtu.be/xErUnOKQbFw?si=YijdGEzYYlmjyX6o")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>Freecodecamp
                        <span className='float-end'>
                            <span className='me-5'>4 Hours 30 Minutes</span>
                            <Link to ="https://youtu.be/rfscVS0vtbw?si=EzdZKJ4O7j5pICxn"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={()=>addToCart("Mongo DB","Freecodecamp","https://youtu.be/rfscVS0vtbw?si=EzdZKJ4O7j5pICxn")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>Simplilearn
                        <span className='float-end'>
                            <span className='me-5'>12 Hours</span>
                            <Link to ="https://youtu.be/ITSMDeOgXxw?si=IXemhfJENQB_e_9w"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={()=>addToCart("Mongo DB","Simplilearn","https://youtu.be/ITSMDeOgXxw?si=IXemhfJENQB_e_9w")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                </ul>
            </div>
            <h3 className="border-bottom pb-1 mt-4">Related Courses </h3> 
            <div className="row">
                <div className="col-12 col-md-3 col-sm-6">
                    <div className="card ">
                        <Link to='../html'><img src="/assats/html.jpeg" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                        <Link to="../html" className="btn btn-primary float-end">HTML</Link> 
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-sm-6">
                    <div className="card">
                    <Link to='../css'><img src="/assats/css.jpeg" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                        <Link to="../css" className="btn btn-primary float-end">CSS</Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Flip}
        />
        </div>
    );
}

export default Mongodb; 