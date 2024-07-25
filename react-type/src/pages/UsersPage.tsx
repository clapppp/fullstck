import { users } from "../data/users";
import { Link, useSearchParams } from "react-router-dom";


export function UsersPage() {
    const [searchParams] = useSearchParams();
    function getFilteredProducts() {
        const search = searchParams.get('search');
        if (search === null || search === '') {
            return users;
        } else {
            return users.filter(
                (user) => user.id
                    .toLowerCase()
                    .indexOf(search.toLowerCase()) > -1
            );
        }
    }
    return (
        <div className="text-center p-5">
            <h2 className="text-xl text-slate-500">
                Look Down
            </h2>
            <ul className="py-3 m-0">
                {getFilteredProducts().map((user) => (
                    <li key={user.seq} className="p-1 text-base text-slate-800">
                        <Link to={`${user.seq}`}>{user.id}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}