import { useState } from "react";

const TodoList = () => {
    const [form, setForm] = useState({ name: "" });
    const [job, setJob] = useState([]);
    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const addJob = () => {
        const xl = form.name;
        if (xl) {
            setJob([...job, form.name]);
        }
        else {
            alert('chua nhap chi het');
        }
        setForm({ name: "" });
    };
    return (
        <div >
            <div>
                <input name="name" value={form.name} onChange={handleChange} />
                <input type="button" onClick={addJob} value={"Add"} />
            </div>
            <table className="table mt-3">

                <div>
                    <h3>Job List</h3>
                </div>

                {job.map((job, index) => (
                    <ul key={index} >
                            {job}
                    </ul>
                ))}

            </table>
        </div>
    )


}
export default TodoList;