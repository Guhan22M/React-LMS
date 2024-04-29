import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CourseContext } from "../Course_Details/python";
function MyCourses() {
    const {courses} = useContext(CourseContext);
    console.log("Courses:", courses);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <h5 className="card-header">My Courses</h5>
                        <div className="card-body">
                            {courses ? (
                                courses.length > 0 ? (
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name</th> 
                                                <th>Link</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {courses.map((course, index) => (
                                                <tr key={index}>
                                                    <td>{course.name}</td>
                                                    <td>
                                                        <Link to={course.link}> 
                                                            Watch Now
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-danger btn-sm active">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p>No courses added yet.</p>
                                )
                            ) : (
                                <p>Length is zero</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCourses;
