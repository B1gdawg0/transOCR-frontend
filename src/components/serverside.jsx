import ErrorReport from "./errorreport";

function Serverside(){
    return(
        <div className="ml-[130px] pt-6 pr-6">
            <h1 className="text-[50px]">DashBoard</h1>
            <p className="text-neutral-400">หน้าต่าง dashboard สำหรับเช็ค error จากการ OCR และสร้าง email</p>
            <br />
            <div className="w-full h-[2px] bg-neutral-500"></div>
            <br />

            <ErrorReport email={"pinpawat.l@ku.th"} fromfile={"A.png"}></ErrorReport>
        </div>
    );
}

export default Serverside;