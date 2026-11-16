---
assurance:
  id: t-5
  base: sha256:7d545744558b7dff671f90403fb39bf5893dde1a0959a133389a2407fbd23134
---
# Enter appends trimmed todo and clears new-todo input

> With a nonblank title, Enter appends its trimmed value to the list and clears the new-todo input.

## Step 1 @verifies ac-11

Open {{start_url}} in the browser and load the todo app, then assert the new-todo input at the top of the page is the active focused element.

## Step 2

capture baseline: number of todos in the all-todos list before pressing Enter

## Step 3 @verifies ac-10, ac-12, ac-13, ac-14

In the todo app's new-todo input at the top, enter '  Buy milk  ' and press Enter, then assert the all-todos list has exactly one more item than the captured baseline, its newly appended item displays 'Buy milk' as a nonempty trimmed title, and the new-todo input is empty.

## Step 4

capture baseline: number of todos in the all-todos list before pressing Enter

## Step 5 @verifies ac-10, ac-12, ac-13, ac-14

In the todo app's new-todo input at the top, enter 'Call home' and press Enter, then assert the all-todos list has exactly one more item than the latest captured baseline, its newly appended item displays 'Call home' as a nonempty trimmed title, and the new-todo input is empty.
