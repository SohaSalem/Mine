// form.actions.ts
import { createAction, props } from '@ngrx/store';

export const saveState = createAction(
  '[Form] Save State',
  props<{ formValue: any }>()
);
export const undo = createAction('[Form] Undo');
export const redo = createAction('[Form] Redo');
