---
assurance:
  id: t-17
  base: sha256:80cbc2ca723f1011ec2de2e893ec20b955fa3f9f551a089e33c8701a69655461
---
# Clear completed preserves active todos in a mixed list

> With at least one active and at least one completed todo, clear completed tasks without losing active tasks, leaving mark-all unchecked and the clear action hidden.

## Step 1

At {{start_url}}, open the todo app's All list and establish a mixed list containing an active todo titled {{active_todo_title}} and a completed todo titled {{completed_todo_title}}.

## Step 2 @verifies ac-32, ac-33, ac-34, ac-35

On the todo app's All list, use Clear completed, then assert no completed todos remain, the active todo titled {{active_todo_title}} remains, the Mark all as complete checkbox is unchecked, and Clear completed is hidden.
