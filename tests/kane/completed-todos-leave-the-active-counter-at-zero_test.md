---
assurance:
  id: t-26
  base: sha256:b4d66f548615c1602b1c2587d381e44f0f75363973f8d26c06fe1e876ce0402e
---
# Completed todos leave the active counter at zero

> Prove a known completed todo does not count as active, while a nonempty list keeps the footer visible.

## Step 1

At {{start_url}}, open the todo app's All view so the complete todo list is visible.

## Step 2

In the new-todo input at the top of the app, create a todo named {{completed_todo_title}}.

## Step 3 @verifies ac-49, ac-50, ac-51

In the All view, mark all todos complete with the mark-all checkbox, then assert the footer counter reads '0 items', its number is inside a <strong> element, and zero equals the independently counted unchecked todo rows in the All list.
