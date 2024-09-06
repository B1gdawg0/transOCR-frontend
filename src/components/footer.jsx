const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 mt-10">
            <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-lg font-bold">TransOCR</h1>
                </div>

                <div className="flex space-x-6 text-sm">
                    <a href="#about" className="hover:underline">About</a>
                    <a href="#how-it-works" className="hover:underline">How It Works</a>
                    <a href="#technologies" className="hover:underline">Technologies</a>
                    <a href="#member-section" className="hover:underline">Members</a>
                </div>

                <div className="mt-4 md:mt-0 text-sm">
                    © 2024 TransOCR. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer