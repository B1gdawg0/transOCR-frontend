import React from 'react';

const colors = [
    'bg-red-500',    // Existing colors
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
    'bg-orange-500',

    // New colors
    'bg-red-600',
    'bg-blue-600',
    'bg-green-600',
    'bg-yellow-600',
    'bg-purple-600',
    'bg-pink-600',
    'bg-indigo-600',
    'bg-teal-600',
    'bg-orange-600',

    'bg-red-400',
    'bg-blue-400',
    'bg-green-400',
    'bg-yellow-400',
    'bg-purple-400',
    'bg-pink-400',
    'bg-indigo-400',
    'bg-teal-400',
    'bg-orange-400',

    'bg-red-700',
    'bg-blue-700',
    'bg-green-700',
    'bg-yellow-700',
    'bg-purple-700',
    'bg-pink-700',
    'bg-indigo-700',
    'bg-teal-700',
    'bg-orange-700',

    'bg-rose-500',
    'bg-lime-500',
    'bg-emerald-500',
    'bg-cyan-500',
    'bg-fuchsia-500',
    'bg-violet-500',
    'bg-amber-500',
    'bg-sky-500',
    'bg-emerald-400',
    'bg-lime-400',
    'bg-cyan-400',
    'bg-fuchsia-400',
    'bg-violet-400',
    'bg-amber-400',
    'bg-sky-400',
    'bg-rose-600',
    'bg-lime-600',
    'bg-emerald-600',
    'bg-cyan-600',
    'bg-fuchsia-600',
    'bg-violet-600',
    'bg-amber-600',
    'bg-sky-600',
];



const CourseCard = ({ id, name, unit, grade }) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(randomColor);
    console.log(` id = ${id}, name = ${name}, unit = ${unit}, grade${grade}`)
    return (
        <div className='w-full my-4'>
            <div className="bg-white rounded-lg shadow-md border border-gray-300 mx-[200px]">
                <div className='flex flex-row rounded-lg'>
                    <div className={`flex-0 w-2 ${randomColor} h-44 rounded-l-lg`}></div>
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
