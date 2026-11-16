---
assurance:
  id: t-28
  base: sha256:a4dc0ac6da2200f0a5148a2726a25a9ce10a4b63a6ee99028ae339d3e16c70a8
---
# Two active todos display a plural counter

> Prove plural wording and the numeric count with two unfinished todos.

## Step 1

At {{start_url}}, open the todo app's All view so the complete todo list is visible.

## Step 2

In the new-todo input at the top of the app, create a todo named {{active_todo_title}}.

## Step 3

In the All view, mark all todos complete with the mark-all checkbox.

## Step 4

In the new-todo input at the top of the app, create an unfinished todo named {{completed_todo_title}}.

## Step 5 @verifies ac-49, ac-50, ac-51

In the All view, reactivate the just-completed todo named {{active_todo_title}} using its item checkbox, then assert the footer counter reads '2 items', its number is inside a <strong> element, and two equals the independently counted unchecked todo rows in the All list.
