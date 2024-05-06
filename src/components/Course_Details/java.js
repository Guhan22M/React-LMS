// import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useContext} from 'react';
import authContext from './context';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* eslint-disable jsx-a11y/anchor-is-valid */

function Java(){
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
                    <img src="/assats/java.jpeg" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>Java</h3>
                    <p className="fw-bold">Java is a popular programming language, created in 1995.</p>
                    <p className="fw-bold">It is owned by Oracle, and more than 3 billion devices run Java.</p>
                    <p className="fw-bold">It is used for:</p>
                    <p className="fw-bold">    i)Mobile applications (specially Android apps)</p>
                    <p className="fw-bold">    i)Desktop applications</p>
                    <p className="fw-bold">    iii)Web servers and application servers,etc..</p>
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
                            <span className='me-5'>2 Hours 30 Minutes</span>
                            <Link to ="https://youtu.be/eIrMbAQSU34?si=BtoUHUyYLW6-gbrL"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={()=>addToCart("Java","Programming with Mosh","https://youtu.be/eIrMbAQSU34?si=BtoUHUyYLW6-gbrL")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>FreeCodeCamp 
                        <span className='float-end'>
                            <span className='me-5'>4 Hours </span>
                            <Link to ="https://youtu.be/A74TOX803D0?si=SxsU_uFR1FCQHqFA"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={()=>addToCart("Java","FreeCodeCamp","https://youtu.be/A74TOX803D0?si=SxsU_uFR1FCQHqFA")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>SimpliLean 
                        <span className='float-end'>
                            <span className='me-5'>11 Hours</span>
                            <Link to ="https://www.youtube.com/live/CFD9EFcNZTQ?si=rzI38CSQyQiCtfJg"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={()=>addToCart("Java","SimpliLean","https://www.youtube.com/live/CFD9EFcNZTQ?si=rzI38CSQyQiCtfJg")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>BroCode 
                        <span className='float-end'>
                            <span className='me-5'>12 Hours </span>
                            <Link to ="https://youtu.be/xk4_1vDrzzo?si=GVF3iZCMTqSswXvy"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={()=>addToCart("Java","BroCode","https://youtu.be/xk4_1vDrzzo?si=GVF3iZCMTqSswXvy")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>Telusko 
                        <span className='float-end'>
                            <span className='me-5'>12 Hours 30 minutes</span>
                            <Link to ="https://youtu.be/BGTx91t8q50?si=zdi2JEPxtfSPqh2E"><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                            <button onClick={()=>addToCart("Java","Telusko","https://youtu.be/BGTx91t8q50?si=zdi2JEPxtfSPqh2E")} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
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

export default Java; 