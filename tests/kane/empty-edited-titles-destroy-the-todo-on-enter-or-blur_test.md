---
assurance:
  id: t-1
  base: sha256:f4fb8791fe857779552fc69f0bca2511ad5192932fd9a56be6c800cae9c29659
---
# Empty edited titles destroy the todo on Enter or blur

> Empty and whitespace-only edited titles destroy the todo rather than saving it, whether the edit ends on Enter or blur.

## Step 1

At {{start_url}}, create a todo titled 'Review proposal' using the new-todo input at the top of the todo app.

## Step 2 @verifies ac-1, ac-3, ac-4, ac-5

In the todo list, double-click the newly created 'Review proposal' item's label to edit it, then assert its item has the editing class, its focused edit input contains 'Review proposal', and its other controls are hidden.

## Step 3 @verifies ac-6

In the 'Review proposal' edit input, clear the title and press Enter, then assert the edited todo item no longer exists in the list.

## Step 4

In the new-todo input, create a todo titled 'Review proposal' for the whitespace-only Enter case.

## Step 5 @verifies ac-1, ac-3, ac-4, ac-5

In the todo list, double-click that newly created 'Review proposal' item's label to edit it, then assert its item has the editing class, its focused edit input contains 'Review proposal', and its other controls are hidden.

## Step 6 @verifies ac-6

In that 'Review proposal' edit input, replace the title with three spaces and press Enter, then assert the edited todo item no longer exists in the list.

## Step 7

In the new-todo input, create a todo titled 'Review proposal' for the empty-title blur case.

## Step 8 @verifies ac-1, ac-3, ac-4, ac-5

In the todo list, double-click that newly created 'Review proposal' item's label to edit it, then assert its item has the editing class, its focused edit input contains 'Review proposal', and its other controls are hidden.

## Step 9 @verifies ac-6

In that 'Review proposal' edit input, clear the title and move focus away from the input, then assert the edited todo item no longer exists in the list.

## Step 10

In the new-todo input, create a todo titled 'Review proposal' for the whitespace-only blur case.

## Step 11 @verifies ac-1, ac-3, ac-4, ac-5

In the todo list, double-click that newly created 'Review proposal' item's label to edit it, then assert its item has the editing class, its focused edit input contains 'Review proposal', and its other controls are hidden.

## Step 12 @verifies ac-6

In that 'Review proposal' edit input, replace the title with three spaces and move focus away from the input, then assert the edited todo item no longer exists in the list.
