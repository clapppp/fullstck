import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Contact = {
    name: string,
    email: string,
    purpose: string,
    note: string
}

// label/htmlFor 은 input,select../id 랑 연동 누르면 검색에 포커스감
// input,select../name 은 FormData의 key값

export function ContactPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<Contact>();
    const navigate = useNavigate();

    function onSubmit(contact: Contact) {
        console.log(contact);
        navigate(`/submit/${contact.name}`);
    }

    return (
        <div className="text-center p-5">
            <h2 className="text-xl p-2">Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-md mx-auto">
                <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="border-solid border-b-2" {...register('name')} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" className="border-solid border-b-2" {...register('email')} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="purpose">Purpose</label>
                    <select id="purpose" className="border-solid border-b-2" {...register('purpose')} >
                        <option value=""></option>
                        <option value="Suggest">Suggest</option>
                        <option value="Require">Require</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="note">Note</label>
                    <textarea id="note" className="border-solid border-b-2" {...register('note')} />
                </div>
                <button type="submit" className="border-2 m-2">Submit</button>
            </form>
        </div>
    )
}