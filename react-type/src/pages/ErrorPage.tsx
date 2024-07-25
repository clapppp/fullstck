import { useRouteError } from "react-router";
import { Header } from "../Header";

export function ErrorPage() {
    const error = useRouteError();

    return (
        <>
            <Header />
            <div className="text-center p-10">
                <h1 className="text-xl p-10 text-red-500">ErrorPage</h1>
                {isError(error) && <p className="text-base p-10 text-slate-800">{error.statusText}</p>}
            </div>
        </>
    )
}

function isError(error: any): error is { statusText: string } {
    return "statusText" in error;
}