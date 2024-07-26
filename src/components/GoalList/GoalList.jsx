import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeGoal } from "../../redux/actions/goalAction";

const GoalList = () => {

const goals = useSelector(state => state.goals);
const dispatch = useDispatch();

  const handleRemoveGoal = (goal) => {
    dispatch(removeGoal(goal));
  };

  return (
    <div>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <h2>
              <span>Goal:</span> {goal.name}
            </h2>
            <button onClick={() => handleRemoveGoal(goal)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;