import React from 'react';

function ErrorReport(props) {
    function handleClickCreate() {
        window.open(`mailto:${props.email}?subject=กรุณาส่งใบ ปพ. ของใหม่คุณมาอีกครั้ง&body=เรียนเจ้าของ email: ${props.email} ใบ ปพ. ของท่านไม่สามารถใช้งานได้ อาจเกิดได้จากเอกสารของถ่านเอียงหรือมืดหรือเบลอจนเกินไป กรุณาส่งใหม่อีกครั้งที่ www.transOCR.ku.th`);
    }

    function handleClickDone() {
        localStorage.removeItem('errorData');
        window.location.reload();
    }

    return (
        <div className="flex justify-between items-center bg-white px-5 py-3 rounded shadow">
            <div className="columns-1 space-y-2">
                <h1 className="text-[30px]">{props.email}</h1>
                <p className="text-neutral-400">This is from file: {props.fromfile}</p>
            </div>

            <div>
                <div
                    onClick={handleClickCreate}
                    className="flex justify-between items-center text-orange-600 border-[1px] border-orange-500 px-3 py-1 rounded cursor-pointer mb-2"
                >
                    Create report email
                </div>
                <div
                    onClick={handleClickDone}
                    className="flex justify-between text-white bg-green-700 px-3 py-1 rounded cursor-pointer"
                >
                    Done
                </div>
            </div>
        </div>
    );
}

export default ErrorReport;
