import {Link} from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";
import Username from "../features/user/Username.jsx";

export default function Header() {
    return (
        <header className=" flex justify-between items-center border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
            <Link className=" tracking-widest" to='/menu'>Fast React Pizza co.</Link>
            <SearchOrder/>
            <Username/>
        </header>
    )
}