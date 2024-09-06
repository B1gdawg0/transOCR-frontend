import React, { useState, useEffect } from 'react';
import CourseCard from './components/course_card';
import { useNavigate } from 'react-router-dom';

const CoursesList = () => {
    const [courses, setCourses] = useState([]);
    const dataSource = localStorage.getItem('filename');
    const navigate = useNavigate();

    // useEffect(() => {
    //     const loadDataSource = async () => {
    //         let data;
    //         try {
    //             switch (dataSource) {
    //                 case 'picture1.png':
    //                     data = await import('./assets/output1.json');
    //                     break;
    //                 case 'picture3.png':
    //                     data = await import('./assets/output3.json');
    //                     break;
    //                 case 'picture4.png':
    //                     data = await import('./assets/output4.json');
    //                     break;
    //                 default:
    //                     console.error('Unknown data source');
    //                     return;
    //             }

    //             const groupMap = {
    //                 'ท': 'ภาษาไทย',
    //                 'ส': 'สังคมศึกษา',
    //                 'ค': 'คณิตศาสตร์',
    //                 'ว': 'วิทยาศาสตร์',
    //                 'อ': 'ภาษาต่างประเทศ',
    //                 'พ': 'สุขศึกษาและพลศึกษา',
    //                 'ศ': 'ศิลปะ',
    //                 'ง': 'การงานอาชีพ',
    //                 'I': 'การศึกษาค้นคว้าด้วยตนเอง',
    //                 'ญ': 'ภาษาต่างประเทศ',
    //                 'จ': 'ภาษาต่างประเทศ',
    //                 'ฝ': 'ภาษาต่างประเทศ',
    //                 'ย': 'ภาษาต่างประเทศ'
    //             };
    //             const processedCourses = Object.values(data.default.data).reduce((acc, course) => {
    //                 let groupKey = course.id.charAt(0);
    //                 if (['ญ', 'อ', 'จ', 'ฝ', 'ย'].includes(groupKey)) {
    //                     groupKey = 'อ'; // Normalize to 'อ' as the common key
    //                 }
    //                 if (!acc[groupKey]) {
    //                     acc[groupKey] = {
    //                         name: groupMap[groupKey],
    //                         totalUnits: 0,
    //                         totalGradePoints: 0
    //                     };
    //                 }

    //                 acc[groupKey].totalUnits += parseFloat(course.unit);
    //                 acc[groupKey].totalGradePoints += parseFloat(course.unit) * parseFloat(course.grade);

    //                 return acc;
    //             }, {});

    //             const toFixed = (n, fixed) => `${n}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`))[0];

    //             const groupedCourses = Object.values(processedCourses).map(course => ({
    //                 name: course.name,
    //                 totalUnits: course.totalUnits,
    //                 gpax: toFixed(course.totalGradePoints / course.totalUnits, 2)
    //             }));

    //             setCourses(groupedCourses);
    //         } catch (error) {
    //             console.error('Error loading data source:', error);
    //         }
    //     };

    //     loadDataSource();
    // }, [dataSource]);

    const handleClick = () => {
        navigate('/detail');
    }

    return (
        <div className='bg-white ml-44 mr-5 my-5 rounded-3xl'>
            <div className='columns-1 align-middle p-8'>
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        id={index + 1}
                        name={course.name}
                        unit={course.totalUnits}
                        grade={course.gpax}
                    />
                ))}
                <div className='w-full text-right'>
                    <button
                        onClick={handleClick}
                        className="bg-green-950 text-white px-4 py-2 rounded mx-[200px] my-[20px] text-lg " >
                        ดูเกรดแต่ละรายวิชา
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoursesList;
