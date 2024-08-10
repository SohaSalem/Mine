import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { formFeatureKey, formReducer, FormState } from './form.reducer';

export interface AppState {
  [formFeatureKey]: FormState;
}

export const reducers: ActionReducerMap<AppState> = {
  [formFeatureKey]: formReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
