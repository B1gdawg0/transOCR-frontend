import { Flag, Server, FileScan } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

    function goFileScan() {
        navigate('/');
    }

    function goServerSide() {
        navigate('/serverside');
    }

    function goFlag() {
        navigate('/report');
    }

    return (
        <div className="fixed top-0 left-0 w-[80px] h-screen shadow-md flex flex-col items-center bg-white">
            <div onClick={goFileScan} className="my-3 rounded bg-white w-12 h-12 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                <FileScan />
            </div>
            <div onClick={goServerSide} className="my-3 rounded bg-white w-12 h-12 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                <Server />
            </div>
            <div onClick={goFlag} className="my-3 rounded bg-white w-12 h-12 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                <Flag />
            </div>
        </div>
    );
}

export default NavBar;
