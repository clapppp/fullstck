import { useParams } from "react-router";

export function ThanksPage() {
    const { name } = useParams<{name:string}>();
    return (
        <div className="text-center p-5 bg-green-200">
            <p className="text-base p-5">Thanks {name}, your comment is submitted.</p>
        </div>
    )
}