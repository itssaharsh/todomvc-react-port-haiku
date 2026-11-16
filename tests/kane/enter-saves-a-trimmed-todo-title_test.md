---
assurance:
  id: t-3
  base: sha256:1d6917ceed62eab06b7695ec9ddf46d79c482c850b0c3243ef24816893facbd6
---
# Enter saves a trimmed todo title

> A nonblank edited title is trimmed and committed when Enter ends editing.

## Step 1

At {{start_url}}, create a todo titled 'Review proposal' using the new-todo input at the top of the todo app.

## Step 2 @verifies ac-1, ac-3, ac-4, ac-5

In the todo list, double-click the newly created 'Review proposal' item's label to edit it, then assert its item has the editing class, its focused edit input contains 'Review proposal', and its other controls are hidden.

## Step 3 @verifies ac-2, ac-8

In that todo's edit input, enter '  Review contract  ' and press Enter, then assert the item no longer has the editing class and its displayed title equals 'Review contract'.
