// import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useContext} from 'react';
import authContext from './context';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* eslint-disable jsx-a11y/anchor-is-valid */

function Html(){
    // const {course_id}=useParams();
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
                    <img src="/assats/html.jpeg" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>HTML</h3>
                    <p className="fw-bold">HTML stands for Hyper Text Markup Language</p>
                    <p className="fw-bold">HTML is the standard markup language for creating Web pages</p>
                    <p className="fw-bold">HTML describes the structure of a Web page</p>
                    <p className="fw-bold">HTML consists of a series of elements</p>
                    <p className="fw-bold">HTML elements tell the browser how to display the content</p>
                    <p className="fw-bold">HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</p>
                </div>
            </div>
            {/* Course Videos */}
            <div className="card mt-4">
                <div className="card-header">
                    <h3>Course Videos</h3>
                </div>
                <ul className="list-group list-group-flush">
                    <li className='list-group-item'>Free Code Camp 
                        <span className='float-end'>
                            <span className='me-5'>4 Hours</span>
                            <Link to ="https://youtu.be/kUMe1FH4CHE?si=AZAeqsbbnWJpKVKN"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={()=>addToCart("HTML","Free Code Camp","https://youtu.be/kUMe1FH4CHE?si=AZAeqsbbnWJpKVKN")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>SuperSimpleDev 
                        <span className='float-end'>
                            <span className='me-5'>6 Hours 30 Minutes</span>
                            <Link to ="https://youtu.be/G3e-cpL7ofc?si=cdMdzVHGgUH8YkNz"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={()=>addToCart("HTML","SuperSimpleDev","https://youtu.be/G3e-cpL7ofc?si=cdMdzVHGgUH8YkNz")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>BROCODE
                        <span className='float-end'>
                            <span className='me-5'>1 Hour</span>
                            <Link to ="https://youtu.be/HD13eq_Pmp8?si=03uEDjPC2TwmuiyS"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={()=>addToCart("HTML","BROCODE","https://youtu.be/HD13eq_Pmp8?si=03uEDjPC2TwmuiyS")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>Simplilearn
                        <span className='float-end'>
                            <span className='me-5'>5 Hours </span>
                            <Link to ="https://youtu.be/OUjU--gVylE?si=yo5K7hoBNF4kUoPS"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={()=>addToCart("HTML","Simplilearn","https://youtu.be/OUjU--gVylE?si=yo5K7hoBNF4kUoPS")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                </ul>
            </div>
            <h3 className="border-bottom pb-1 mt-4">Related Courses </h3> 
            <div className="row">
                <div className="col-12 col-md-3 col-sm-6">
                    <div className="card ">
                        <Link to='/detail/1'><img src="/assats/html.jpeg" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                        <Link to="/detail/1" className="btn btn-primary float-end">React</Link> 
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-sm-6">
                    <div className="card">
                    <Link to='/detail/1'><img src="/assats/css.jpeg" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                        <Link to="/detail/1" className="btn btn-primary float-end">React</Link>
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

export default Html; 