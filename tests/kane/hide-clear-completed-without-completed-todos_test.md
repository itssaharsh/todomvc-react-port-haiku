---
assurance:
  id: t-19
  base: sha256:b3c9ec4bf368f72f9fc8640fa3f980f0d78f171321249522f6e56ea5cc35569a
---
# Hide Clear completed without completed todos

> With no completed todos, confirm the clear action is hidden whether active todos remain or the list is empty.

## Step 1

At {{start_url}}, open the todo app's All list and leave no completed todos by clearing any that already exist.

## Step 2 @verifies ac-35

On the todo app's All list, establish an active todo titled {{active_todo_title}} without completing it, then assert Clear completed is hidden.

## Step 3 @verifies ac-35

On the todo app's All list, remove all remaining active todos so the list is empty, then assert Clear completed is hidden.
