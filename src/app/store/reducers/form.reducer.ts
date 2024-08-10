// store/form.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { saveState, undo, redo } from '../actions/form.actions';
import {
  FormStateHistory,
  FormStateModel,
} from '../../shared/models/form-state.model';

export const formFeatureKey = 'form';

export interface FormState {
  present: FormStateModel; // Current form state
  history: FormStateHistory[]; // Undo stack
  future: FormStateHistory[]; // Redo stack
}

// Define the initial state of the form
const initialState: FormState = {
  present: {
    name: '',
    email: '',
    acceptTerms: false,
    country: '',
  },
  history: [], // Undo stack
  future: [], // Redo stack
};

export const formReducer = createReducer(
  initialState,
  on(saveState, (state, { formValue }) => {
    // Check if the new state is different from the present state
    if (JSON.stringify(state.present) !== JSON.stringify(formValue)) {
      return {
        ...state,
        history: [...state.history, { formValue: state.present }],
        future: [],
        present: formValue,
      };
    }
    return state; // Return current state if no change
  }),
  on(undo, (state) => {
    if (state.history.length > 0) {
      const lastState = state.history[state.history.length - 1];
      return {
        ...state,
        present: lastState.formValue,
        history: state.history.slice(0, -1),
        future: [...state.future, { formValue: state.present }],
      };
    }
    return {
      ...state,
      present: initialState.present,
      future: [...state.future, { formValue: state.present }],
    };
  }),
  on(redo, (state) => {
    if (state.future.length > 0) {
      const nextState = state.future[state.future.length - 1];
      return {
        ...state,
        present: nextState.formValue,
        history: [...state.history, { formValue: state.present }],
        future: state.future.slice(0, -1),
      };
    }
    return state;
  })
);
