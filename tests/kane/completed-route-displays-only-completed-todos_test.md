---
assurance:
  id: t-21
  base: sha256:190b6f9014b017559c73f74d817a028ea5c4f4d795453c68a6df7e996ee21fa2
---
# Completed route displays only completed todos

> With a known active todo and a known completed todo, navigate to #/completed and prove that only the completed item belongs to the displayed view.

## Step 1

Open {{start_url}} in the browser and, on the TodoMVC todo page, establish an active todo titled {{active_todo_title}} and a completed todo titled {{completed_todo_title}} using the new-todo input and each todo's completion checkbox.

## Step 2 @verifies ac-37

On the TodoMVC page's footer filter links, navigate to Completed (#/completed), then assert the Completed filter link has the `selected` class.

## Step 3 @verifies ac-36, ac-39, ac-41

On the Completed view's todo list, inspect the displayed todo titles and completion states, then assert every displayed todo is completed, {{completed_todo_title}} is present, and {{active_todo_title}} is absent.
