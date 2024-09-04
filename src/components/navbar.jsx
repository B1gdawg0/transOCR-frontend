import { Flag, Server, FileScan, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

    function goFileScan() {
        navigate('/scan');
    }

    function goServerSide() {
        navigate('/serverside');
    }

    function goFlag() {
        navigate('/report');
    }

    function goLogout() {
        localStorage.removeItem('transOCR_client_email');
        navigate('/');
    }

    return (
        <div className="fixed top-0 left-0 w-full h-[50px] shadow-md flex justify-between items-center bg-white">
            <div className='flex'>
                <div onClick={goFileScan} className="mx-3 rounded  w-12 h-12 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                    <FileScan />
                </div>
                <div onClick={goServerSide} className="mx-3 rounded  w-12 h-12 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                    <Server />
                </div>
                <div onClick={goFlag} className="mx-3 rounded  w-12 h-12 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                    <Flag />
                </div>
            </div>

            <div className='flex'>
                <div onClick={goLogout} className='mx-3 rounded  w-12 h-12 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-300'>
                    <LogOut />
                </div>
            </div>
        </div>
    );
}

export default NavBar;
