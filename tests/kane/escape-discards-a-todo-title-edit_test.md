---
assurance:
  id: t-2
  base: sha256:d9159b3e737f33fd3f404eb76f87c74e41a8ec65225b0cf4149d3b008c32151a
---
# Escape discards a todo title edit

> Escape leaves editing mode without applying the changed title.

## Step 1

At {{start_url}}, create a todo titled 'Review proposal' using the new-todo input at the top of the todo app.

## Step 2 @verifies ac-1, ac-3, ac-4, ac-5

In the todo list, double-click the newly created 'Review proposal' item's label to edit it, then assert its item has the editing class, its focused edit input contains 'Review proposal', and its other controls are hidden.

## Step 3 @verifies ac-2, ac-7

In that todo's edit input, replace the title with 'Review contract' and press Escape, then assert the item's editing class is absent and its displayed title remains 'Review proposal'.
