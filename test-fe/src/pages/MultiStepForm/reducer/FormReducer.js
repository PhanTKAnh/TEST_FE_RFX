// export default
const initialState = {
  step: 1,
  data: { 
    FullName: '',
    Application: '',
    Phone: '',
    Address: '',
    LinkGitHub: '',
    Avartar: null, 
    Email: ''
  }
};
console.log(initialState)

export default function formReducer(state = initialState, action) {
  switch(action.type) {
    case 'NEXT_STEP':
      return { ...state, step: state.step + 1 };
    case 'PREV_STEP':
      return { ...state, step: state.step - 1 };
    case 'UPDATE_FIELD':
      return { ...state, data: { ...state.data, ...action.payload } };
    default:
      return state;
  }
}
