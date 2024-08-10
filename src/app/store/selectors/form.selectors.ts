import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/app.reducer';
import { FormState } from '../reducers/form.reducer';

export const selectFormState = (state: AppState) => state.form;

export const selectFormPresent = createSelector(
  selectFormState,
  (state: FormState) => state.present
);

export const selectCanUndo = createSelector(
  selectFormState,
  (state: FormState) => state.history.length > 0
);

export const selectCanRedo = createSelector(
  selectFormState,
  (state: FormState) => state.future.length > 0
);
