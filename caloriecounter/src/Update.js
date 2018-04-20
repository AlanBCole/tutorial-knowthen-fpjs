const MSGS = {
  SHOW_FORM: 'SHOW_FORM',
  MEAL_INPUT: 'MEAL_INPUT',
  CALORIES_INPUT: 'CALORIES_INPUT',
  CANCEL_FORM: 'CANCEL_FORM',
  SAVE_FORM: 'SAVE_FORM', 
};

export function showFormMsg(showForm) {
  return {
    type: MSGS.SHOW_FORM,
    showForm,
  };
}

export function mealInputMsg(description) {
  return {
    type: MSGS.MEAL_INPUT,
    description,
  };
}

export function caloriesInputMsg(calories) {
  return {
    type: MSGS.CALORIES_INPUT,
    calories,
  };
}
export function cancelFormMsg(showForm) {
  return {
    type: MSGS.CANCEL_FORM,
    showForm,
  };
}

export function saveFormMsg(showForm) {
  const description = document.getElementsByTagName('input')[0];
  const calories = document.getElementsByTagName('input')[1];
  return {
    type: MSGS.SAVE_FORM,
    showForm,
    newDescription: description.value,
    newCalories: calories.value,
  };
}

function update(msg, model) {
  const { showForm } = msg;
  switch (msg.type) {
    case MSGS.SHOW_FORM: {
      return { ...model, showForm, description: '', calories: 0 };
    }
    case MSGS.MEAL_INPUT: {
      const { description } = msg;
      return { ...model, description };
    }
    case MSGS.CALORIES_INPUT: {
      const { calories } = msg;
      return { ...model, calories }
    }
    case MSGS.CANCEL_FORM: {
      return { ...model, showForm, description: '', calories: 0 };
    }
    case MSGS.SAVE_FORM: {
      const { newDescription, newCalories } = msg;
      return {
        ...model,
        description: newDescription,
        calories: newCalories,
      }
    }
  }
  return model;
}

export default update;