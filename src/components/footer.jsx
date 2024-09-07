const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 mt-10">
            <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-lg font-bold">TransOCR</h1>
                    <p className="text-xs">Power by bigdog and team</p>
                </div>

                <div className="flex space-x-6 text-sm">
                    <a href="https://www.ku.ac.th/th" className="hover:underline">Kasetsart U.</a>
                    <a href="https://www.google.com/search?client=safari&rls=en&q=comsci+ku&ie=UTF-8&oe=UTF-8" className="hover:underline">Comsci</a>
                    <a href="#" className="hover:underline">8E5</a>
                    <a href="https://cs.sci.ku.ac.th/personnel/academic/d1404/" className="hover:underline">Prof.Somchoke</a>
                </div>

                <div className="mt-4 md:mt-0 text-sm">
                    © 2024 TransOCR. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer