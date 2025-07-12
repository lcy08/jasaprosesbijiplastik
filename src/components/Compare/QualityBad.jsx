function QualityBad(props){
    return (
        <li className="flex items-center gap-1">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-red-700 shadow-sm"
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <span className="text-gray-700"> {props.text} </span>
        </li>
    );
}
export default QualityBad;