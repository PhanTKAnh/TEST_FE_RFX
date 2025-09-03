export const NEXT_STEP = "NEXT_STEP";
export const PREV_STEP = "PREV_STEP";
export const UPDATE_FIELD = "UPDATE_FIELD";

export const nextStep = () => ({ type: NEXT_STEP });
export const prevStep = () => ({ type: PREV_STEP });
export const updateField = (field) => ({ type: UPDATE_FIELD, payload: field });
