import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../../redux/actions/goalAction";

const Form = () => {
    const dispatch = useDispatch();
    const [goal, setGoal] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addGoal({
                id: Date.now(),
                name: goal,
            })
        );
        resetForm();
    };

    const handleChange = (e) => {
        const { value } = e.currentTarget;
        setGoal(value);
    };

    const resetForm = () => {
        setGoal("");
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="goal"
                id="goal"
                value={goal}
                onChange={handleChange}
                autoComplete="off"
            />
            <button>Add Goal</button>
        </form>
    );
};

export default Form;