 export const MSGS = {
  SHOW_FORM: 'SHOW_FORM',
  HIDE_FORM: 'HIDE_FORM',
};

function update(msg, model) {
  switch (msg) {
    case MSGS.SHOW_FORM: {
      return { ...model, showForm: true };
    }
    case MSGS.HIDE_FORM: {
      return { ...model, showForm: false };
    }
  }
  return model;
}

export default update;