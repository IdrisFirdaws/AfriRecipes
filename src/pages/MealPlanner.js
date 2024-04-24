// MealPlanner.js
import React, { useState } from "react";
import PreviousMealPlans from "../components/PeviousMealPlans";

const MealPlanner = () => {
  const [mealPlan, setMealPlan] = useState({
    Monday: { breakfast: "", lunch: "", dinner: "" },
    Tuesday: { breakfast: "", lunch: "", dinner: "" },
    Wednesday: { breakfast: "", lunch: "", dinner: "" },
    Thursday: { breakfast: "", lunch: "", dinner: "" },
    Friday: { breakfast: "", lunch: "", dinner: "" },
    Saturday: { breakfast: "", lunch: "", dinner: "" },
    Sunday: { breakfast: "", lunch: "", dinner: "" },
  });
  const [isVisible, setIsVisible] = useState(false);

  const handleInputChange = (day, mealType, e) => {
    const { value } = e.target;
    setMealPlan((prevPlan) => ({
      ...prevPlan,
      [day]: {
        ...prevPlan[day],
        [mealType]: value,
      },
    }));
  };

  const handleSaveMealPlan = () => {
    // Implement save functionality
    console.log("Saved meal plan:", mealPlan);
  };

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="meal-planner">
      <div className="section meal-plan">
        <button className="btn" onClick={() => setIsVisible(!isVisible)}>
          Create a Meal Plan
        </button>
        <table
          className="meal-plan-table"
          style={{ display: isVisible ? "block" : "none" }}
        >
          <thead>
            <tr>
              <th>Day</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
            </tr>
          </thead>
          <tbody>
            {daysOfWeek.map((day) => (
              <tr key={day}>
                <td>{day}</td>
                <td>
                  <input
                    type="text"
                    value={mealPlan[day]?.breakfast || ""}
                    onChange={(e) => handleInputChange(day, "breakfast", e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={mealPlan[day]?.lunch || ""}
                    onChange={(e) => handleInputChange(day, "lunch", e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={mealPlan[day]?.dinner || ""}
                    onChange={(e) => handleInputChange(day, "dinner", e)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isVisible && (
          <button className="btn" onClick={handleSaveMealPlan}>
            Save Meal Plan
          </button>
        )}
      </div>

      <PreviousMealPlans />
    </div>
  );
};

export default MealPlanner;
