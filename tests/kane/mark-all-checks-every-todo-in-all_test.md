---
assurance:
  id: t-11
  base: sha256:7c7609904be9e99c480bb4ce14cf13eb5ecb5e37560f218e09ac4413c36d7a76
---
# Mark-all checks every todo in All

> In All, check mark-all with at least one active todo and another completed todo; every existing todo becomes complete.

## Step 1

Open the todo application at {{start_url}} and show the All todo list.

## Step 2

In the new-todo input at the top of the application, create todos named 'Bulk alpha' and 'Bulk beta' if they are not already present.

## Step 3

On the All list, leave 'Bulk alpha' active and mark 'Bulk beta' completed using its item checkbox.

## Step 4 @verifies ac-22

In the All list, check the 'Mark all as complete' checkbox, then assert every existing todo in All is completed and its item checkbox is checked.
