export interface FormStateModel {
  name: string;
  email: string;
  acceptTerms: boolean;
  country: string;
}

export interface FormStateHistory {
  formValue: FormStateModel;
}
