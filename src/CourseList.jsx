import React, { useState, useEffect } from 'react';
import CourseCard from './components/course_card';
import { useNavigate } from 'react-router-dom';

const CoursesList = () => {
    const navigate = useNavigate();
    const [groupedCourses, setGroupedCourses] = useState({});
    const [categoryData, setCategoryData] = useState({});
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        const loadDataSource = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/getavg/${localStorage.getItem("email")}`);
    
                if (response.ok) {
                    const { message, data } = await response.json();

                    console.log(data)

                    setGroupedCourses(data);
                    setCategoryData(data.categoryData);
                    setCategoryList(data.categoryList);
                }
            } catch (error) {
                console.error('Error loading data source:', error);
            }
        };
    
        loadDataSource();
    }, []);
    
    const handleClick = () => {
        navigate('/detail');
    };

    return (
        <div className='w-full h-auto' id='data-bg'>
            <div className='bg-white op ml-28 mr-28 my-10 rounded-3xl shadow-2xl'>
            <div className='columns-1 align-middle p-8'>
                {
                    categoryList.map((category, index) => (
                        <div key={index}>
                            {categoryData[category]? (
                               <CourseCard
                                    key={index}
                                    id={index + 1}
                                    name={category}
                                    unit={categoryData[category].unit}
                                    grade={categoryData[category].gpax}
                                />
                            ) : (
                                <p>No subjects available for {category}</p>
                            )}
                        </div>
                    ))
                }
                <div className='w-full text-right'>
                    <button
                        onClick={handleClick}
                        className="bg-green-950 text-white px-4 py-2 rounded mx-[200px] my-[20px] text-lg">
                        ดูเกรดแต่ละรายวิชา
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CoursesList;
