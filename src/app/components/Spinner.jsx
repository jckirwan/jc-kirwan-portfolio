"use client"
export const Spinner = () => {
    return (
        <svg
            className={`inline-block animate-spin rounded-full border-[1px] border-r-transparent w-10 h-10 my-10`}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            role="progressbar"
        >
            <circle cx="50" cy="50" r="50" fill="none" />
        </svg>
    )
}
Spinner.displayName = 'Spinner';
export default Spinner;