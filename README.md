# UndoRedo Implementation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Undo/Redo Functionality

### Overview

The Undo/Redo feature is implemented using NgRx for state management in Angular, allowing users to revert or reapply changes to the form state.

### Implementation Details

- **State Structure:**

  - `present`: The current state of the form.
  - `history`: Stack of previous states for undo operations.
  - `future`: Stack of states for redo operations.

- **Actions and Reducer Logic:**
  - **`saveState` Action:** Updates the `history` stack and clears the `future` stack when a new state is saved.
  - **`undo` Action:** Reverts to the most recent state from the `history` stack and moves the current state to the `future` stack.
  - **`redo` Action:** Advances to the most recent state from the `future` stack and updates the `history` stack with the current state.

### Testing the Undo/Redo Functionality

#### How to Test

1. **Manual Testing:** Interact with the form to test undo and redo functionality manually, ensuring that changes are correctly reflected.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
