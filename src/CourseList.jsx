import React from 'react';
import DataSource from './assets/output.json';
import CourseCard from './components/subject_card';

const CoursesList = () => {
    const groupMap = {
        'ท': 'ภาษาไทย',
        'ส': 'สังคมศึกษา',
        'ค': 'คณิตศาสตร์',
        'ว': 'วิทยาศาสตร์',
        'อ': 'ภาษาต่างประเทศ',
        'พ': 'สุขศึกษาและพลศึกษา',
        'ศ': 'ศิลปะ',
        'ง': 'การงานอาชีพ',
        'I': 'การศึกษาค้นคว้าด้วยตนเอง'
    };

    const courses = Object.values(DataSource.data).reduce((acc, course) => {
        const groupKey = course.id.charAt(0);
        if (!acc[groupKey]) {
            acc[groupKey] = {
                name: groupMap[groupKey],
                totalUnits: 0,
                totalGradePoints: 0
            };
        }

        acc[groupKey].totalUnits += parseFloat(course.unit);
        acc[groupKey].totalGradePoints += parseFloat(course.unit) * parseFloat(course.grade);

        return acc;
    }, {});

    const toFixed = (n, fixed) => `${n}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`))[0];

    // Calculating GPAX for each subject group
    const groupedCourses = Object.values(courses).map(course => ({
        name: course.name,
        totalUnits: course.totalUnits,
        gpax: toFixed(course.totalGradePoints / course.totalUnits, 2)
    }));

    return (
        <div className='columns-1 align-middle'>
            {groupedCourses.map((course, index) => (
                <CourseCard
                    key={index}
                    id={index + 1}
                    name={course.name}
                    unit={course.totalUnits}
                    grade={course.gpax}
                />
            ))}
        </div>
    );
};

export default CoursesList;
