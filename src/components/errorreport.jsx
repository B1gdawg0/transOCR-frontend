function ErrorReport(props){
    return(
        <div className="flex justify-between items-center bg-white px-5 py-3 rounded shadow-md">
            <div className="columns-1">
                <h1 className="text-[30px]">{props.email}</h1>
                <p className="text-neutral-400">This is from file: {props.fromfile}</p>
            </div>

            <div className="flex justify-between items-center text-white bg-black px-3 py-1 rounded cursor-pointer">Create report email</div>
        </div>
    );
}

export default ErrorReport;