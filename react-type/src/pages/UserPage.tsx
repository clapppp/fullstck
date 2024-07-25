import { useParams } from "react-router";
import { users } from "../data/users";

type params = {
    seq: string
}

export function UserPage() {

    const params = useParams<params>();
    const seq = params.seq === undefined ? undefined : parseInt(params.seq);
    const user = users.find((user) => user.seq === seq);

    return (
        <div className="text-center p-5">
            {
                user === undefined ? (
                    <h2 className="text-xl"> undefined user </h2>
                ) :
                    (
                        <>
                            <h2 className="text-base text-slate-800">{user.id}</h2>
                            <p className="text-base text-slate-900">password: {user.password}</p>
                        </>
                    )
            }
        </div>
    )
}