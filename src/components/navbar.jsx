import { Flag, Server, FileScan , LogOut } from 'lucide-react';
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
        <div className="fixed top-0 left-0 w-[80px] h-screen shadow-md flex flex-col justify-between items-center bg-white">
            <div className='flex flex-col'>
                <div onClick={goFileScan} className="my-3 rounded bg-white w-12 h-12 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                    <FileScan />
                </div>
                {/* <div onClick={goServerSide} className="my-3 rounded bg-white w-12 h-12 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                    <Server />
                </div> */}
                <div onClick={goFlag} className="my-3 rounded bg-white w-12 h-12 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                    <Flag />
                </div>
            </div>

            <div className='flex flex-col'>
                <div onClick={goLogout} className='my-3 rounded bg-white w-12 h-12 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-300'>
                    <LogOut></LogOut>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
