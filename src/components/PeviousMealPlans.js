// PreviousMealPlans.js
import React from "react";

const PreviousMealPlans = () => {
  // Dummy meal plans
  const dummyMealPlans = [
    {
      Monday: {
        breakfast: "Oatmeal",
        lunch: "Grilled Chicken Salad",
        dinner: "Spaghetti Bolognese",
      },
      Tuesday: {
        breakfast: "Scrambled Eggs",
        lunch: "Vegetable Stir Fry",
        dinner: "Roast Beef",
      },
      Wednesday: {
        breakfast: "Pancakes",
        lunch: "Quinoa Salad",
        dinner: "Salmon with Asparagus",
      },
      Thursday: {
        breakfast: "Greek Yogurt",
        lunch: "Turkey Sandwich",
        dinner: "Vegetable Curry",
      },
      Friday: {
        breakfast: "Smoothie",
        lunch: "Pasta Primavera",
        dinner: "Steak with Mashed Potatoes",
      },
      Saturday: {
        breakfast: "Bagel with Cream Cheese",
        lunch: "Caesar Salad",
        dinner: "Chicken Alfredo",
      },
      Sunday: {
        breakfast: "Fruit Salad",
        lunch: "Tuna Wrap",
        dinner: "Shrimp Scampi",
      },
    },

    {
      Monday: {
        breakfast: "Oatmeal",
        lunch: "Grilled Chicken Salad",
        dinner: "Spaghetti Bolognese",
      },
      Tuesday: {
        breakfast: "Scrambled Eggs",
        lunch: "Vegetable Stir Fry",
        dinner: "Roast Beef",
      },
      Wednesday: {
        breakfast: "Pancakes",
        lunch: "Quinoa Salad",
        dinner: "Salmon with Asparagus",
      },
      Thursday: {
        breakfast: "Greek Yogurt",
        lunch: "Turkey Sandwich",
        dinner: "Vegetable Curry",
      },
      Friday: {
        breakfast: "Smoothie",
        lunch: "Pasta Primavera",
        dinner: "Steak with Mashed Potatoes",
      },
      Saturday: {
        breakfast: "Bagel with Cream Cheese",
        lunch: "Caesar Salad",
        dinner: "Chicken Alfredo",
      },
      Sunday: {
        breakfast: "Fruit Salad",
        lunch: "Tuna Wrap",
        dinner: "Shrimp Scampi",
      },
    },

    {
      Monday: {
        breakfast: "Oatmeal",
        lunch: "Grilled Chicken Salad",
        dinner: "Spaghetti Bolognese",
      },
      Tuesday: {
        breakfast: "Scrambled Eggs",
        lunch: "Vegetable Stir Fry",
        dinner: "Roast Beef",
      },
      Wednesday: {
        breakfast: "Pancakes",
        lunch: "Quinoa Salad",
        dinner: "Salmon with Asparagus",
      },
      Thursday: {
        breakfast: "Greek Yogurt",
        lunch: "Turkey Sandwich",
        dinner: "Vegetable Curry",
      },
      Friday: {
        breakfast: "Smoothie",
        lunch: "Pasta Primavera",
        dinner: "Steak with Mashed Potatoes",
      },
      Saturday: {
        breakfast: "Bagel with Cream Cheese",
        lunch: "Caesar Salad",
        dinner: "Chicken Alfredo",
      },
      Sunday: {
        breakfast: "Fruit Salad",
        lunch: "Tuna Wrap",
        dinner: "Shrimp Scampi",
      },
    },
    // Additional dummy meal plans can be added here
  ];

  return (
    <div className="section previous-meal-plans">
      <h2 className="prevMealPlanTitle">Previous Meal Plans</h2>
      {dummyMealPlans.map((mealPlan, index) => (
        <div key={index} className="meal-plan">
          <h3>Meal Plan {index + 1}</h3>
          <table className="previous-meal-plan-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Dinner</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(mealPlan).map(([day, meals]) => (
                <tr key={day}>
                  <td className="days">{day}</td>
                  <td>{meals.breakfast}</td>
                  <td>{meals.lunch}</td>
                  <td>{meals.dinner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default PreviousMealPlans;
