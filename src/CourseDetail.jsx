import React, { useState, useEffect } from 'react';

const CourseDetail = () => {
    const [groupedCourses, setGroupedCourses] = useState({});
    // const dataSource = localStorage.getItem('filename');
    const dataSource = 'picture4.png'

    console.log(dataSource)
    useEffect(() => {
        const loadDataSource = async () => {
            let data;
            try {
                switch (dataSource) {
                    case 'picture1.png':
                        data = await import('./assets/output1.json');
                        break;
                    case 'picture3.png':
                        data = await import('./assets/output3.json');
                        break;
                    case 'picture4.png':
                        data = await import('./assets/output4.json');
                        break;
                    default:
                        console.error('Unknown data source');
                        return;
                }

                const groupMap = {
                    'ท': 'ภาษาไทย',
                    'ส': 'สังคมศึกษา',
                    'ค': 'คณิตศาสตร์',
                    'ว': 'วิทยาศาสตร์',
                    'อ': 'ภาษาต่างประเทศ',
                    'พ': 'สุขศึกษาและพลศึกษา',
                    'ศ': 'ศิลปะ',
                    'ง': 'การงานอาชีพ',
                    'I': 'การศึกษาค้นคว้าด้วยตนเอง',
                    'ญ': 'ภาษาต่างประเทศ',
                    'จ': 'ภาษาต่างประเทศ',
                    'ฝ': 'ภาษาต่างประเทศ',
                    'ย': 'ภาษาต่างประเทศ'
                };



                const grouped = Object.values(data.default.data).reduce((groups, course) => {
                    var groupKey = groupMap[course.id.charAt(0)];
                    if (['ญ', 'อ', 'จ', 'ฝ', 'ย'].includes(groupKey)) {
                        groupKey = 'อ';
                    }
                    console.log("Group key is " + groupKey)

                    if (!groups[groupKey]) {
                        groups[groupKey] = [];
                    }
                    groups[groupKey].push(course);
                    return groups;
                }, {});

                setGroupedCourses(grouped);
            } catch (error) {
                console.error('Error loading data source:', error);
            }
        };

        loadDataSource();
    }, [dataSource]);

    const colorMap = {
        'ภาษาไทย': 'bg-red-500',
        'สังคมศึกษา': 'bg-green-500',
        'คณิตศาสตร์': 'bg-yellow-500',
        'วิทยาศาสตร์': 'bg-blue-500',
        'ภาษาต่างประเทศ': 'bg-purple-500',
        'สุขศึกษาและพลศึกษา': 'bg-pink-500',
        'ศิลปะ': 'bg-orange-500',
        'การงานอาชีพ': 'bg-teal-500',
        'การศึกษาค้นคว้าด้วยตนเอง': 'bg-indigo-500',
    };

    return (
        <div className="p-8 min-h-screen font-sans ml-[140px] mr-2 my-10 rounded-xl shadow-2xl bg-white">
            {
                Object.entries(groupedCourses).map(([group, courses]) => (
                    <div key={group} className="mb-12">
                        <h2 className="text-3xl font-bold text-black mb-6 border-b-4 pb-2" style={{ borderColor: colorMap[group] }}>
                            {group}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {courses.map((course, index) => (
                                <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 mb-4">
                                    <div className={`p-4 text-white ${colorMap[group]} shadow-sm`}>
                                        <div className="font-bold text-xl mb-2 tracking-wide">{course.id}</div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-800 text-lg mb-2">
                                            <span className="font-semibold">หน่วยกิต: </span>{course.unit}
                                        </p>
                                        <p className="text-gray-800 text-lg">
                                            <span className="font-semibold">เกรด: </span>{course.grade}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default CourseDetail;
