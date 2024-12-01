import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function SearchOrder() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate(`/order/${query}`);
        setQuery('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="py-1 px-2 rounded-full w-28 sm:focus:w-72 duration-300 sm:w-64 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50" placeholder="Seach order #" value={query} onChange={e => setQuery(e.target.value)} />
        </form>
    )
}