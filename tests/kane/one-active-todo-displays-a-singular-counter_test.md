---
assurance:
  id: t-27
  base: sha256:7d7b36faacb8589e292799d3aa7f9c0f7c19f2412c30e4acb93ce41174c06c72
---
# One active todo displays a singular counter

> Prove the singular label and active count when exactly one todo remains unfinished.

## Step 1

At {{start_url}}, open the todo app's All view so the complete todo list is visible.

## Step 2

In the new-todo input at the top of the app, create a todo named {{completed_todo_title}}.

## Step 3

In the All view, mark all todos complete with the mark-all checkbox.

## Step 4 @verifies ac-49, ac-50, ac-51

In the new-todo input at the top of the app, create an unfinished todo named {{active_todo_title}}, then assert the footer counter reads '1 item', its number is inside a <strong> element, and one equals the independently counted unchecked todo rows in the All list.
