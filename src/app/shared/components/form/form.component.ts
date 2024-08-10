import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { saveState, undo, redo } from '../../../store/actions/form.actions';
import { AppState } from '../../../store/reducers/app.reducer';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectCanUndo,
  selectCanRedo,
  selectFormPresent,
} from '../../../store/selectors/form.selectors';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  present$!: Observable<any>;
  canUndo$!: Observable<boolean>;
  canRedo$!: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      acceptTerms: [false],
      country: [''],
    });

    this.present$ = this.store.pipe(select(selectFormPresent));
    this.canUndo$ = this.store.pipe(select(selectCanUndo));
    this.canRedo$ = this.store.pipe(select(selectCanRedo));
  }

  ngOnInit() {
    this.present$.subscribe((present) => {
      this.form.patchValue(present);
    });
  }

  onSubmit() {
    this.store.dispatch(saveState({ formValue: this.form.value }));
  }

  undo() {
    this.store.dispatch(undo());
  }

  redo() {
    this.store.dispatch(redo());
  }
}
