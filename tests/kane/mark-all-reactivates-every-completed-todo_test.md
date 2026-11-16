---
assurance:
  id: t-12
  base: sha256:83ea6376c9a541bd2b9c5b00fb1db1802ce6f3ddeb0542aa8c2d1ace3455b807
---
# Mark-all reactivates every completed todo

> In All, uncheck mark-all when all todos are complete; every existing todo becomes active.

## Step 1

Open the todo application at {{start_url}} and show the All todo list.

## Step 2

In the new-todo input at the top of the application, create todos named 'Restore alpha' and 'Restore beta' if they are not already present.

## Step 3

On the All list, set the 'Mark all as complete' checkbox to checked so the existing todos are complete.

## Step 4 @verifies ac-22

On the All list, uncheck 'Mark all as complete', then assert every existing todo in All is active and its item checkbox is unchecked.
