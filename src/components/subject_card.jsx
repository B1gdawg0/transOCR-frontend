import React from 'react';

const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
    'bg-orange-500',

];

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


const CourseCard = ({ id, name, unit, grade }) => {
    return (
        <div className='w-full my-4'>
            <div className="bg-white rounded-lg shadow-md border border-gray-300 mx-[200px]">
                <div className='flex flex-row rounded-lg'>
                    <div className={`flex-0 w-2 ${colorMap[name]} h-44 rounded-l-lg`}></div>
                    <div className='flex-1 p-4'>
                        <div className='text-[16px] text-gray-500 '>กลุ่มสาระการเรียนรู้</div>
                        <div className='text-3xl font-bold my-[10px]'>{name}</div>
                        <div className='flex justify-between mt-4'>
                            <div>
                                <div className='text-[16px] text-gray-500 '>หน่วยกิตรวม</div>
                                <div className='font-bold'>{unit}</div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-[30px] my-[45px]'>
                        <div className='text-[16px] text-gray-500 '>เกรดเฉลี่ยรวม</div>
                        <div className='font-bold text-[24px]'>{grade}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
