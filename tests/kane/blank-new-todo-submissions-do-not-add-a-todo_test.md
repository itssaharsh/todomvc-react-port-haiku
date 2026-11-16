---
assurance:
  id: t-6
  base: sha256:627c5db97746026c96e96a92ecd8d541fa3f044a5eeaf40b1ca98f975f8d1645
---
# Blank new-todo submissions do not add a todo

> Pressing Enter with empty or whitespace-only new-todo input leaves the todo list without a new item.

## Step 1 @verifies ac-11

Open {{start_url}} in the browser and load the todo app, then assert the new-todo input at the top of the page is the active focused element.

## Step 2

capture baseline: number of todos in the all-todos list before pressing Enter

## Step 3 @verifies ac-15

In the todo app's new-todo input at the top, enter three spaces and press Enter, then assert the all-todos list still has exactly the captured baseline number of items.

## Step 4

capture baseline: number of todos in the all-todos list before pressing Enter

## Step 5 @verifies ac-15

In the todo app's new-todo input at the top, empty the input and press Enter, then assert the all-todos list still has exactly the latest captured baseline number of items.
