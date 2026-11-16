---
assurance:
  id: t-8
  base: sha256:60456a32f9fd57bdc189ffa9ac8e588a01b8cc9efa9b7302a0c975f98b81036d
---
# Checking an Active todo removes it from the Active list

> Checking a visible active todo removes it from the Active filtered list without losing its completed state.

## Step 1

Open {{start_url}} in the browser and reach the todo app's All list.

## Step 2

On the todo app's All list, remove any existing todos with their item remove controls, then create two active todos titled 'Assurance active A' and 'Assurance active B' using the new-todo input.

## Step 3 @verifies ac-20, ac-18

On the todo app's Active filter, check 'Assurance active A', then assert 'Assurance active A' is absent from the Active list and the mark-all checkbox remains unchecked.

## Step 4 @verifies ac-16, ac-17

Return to the All filter and inspect 'Assurance active A', then assert its checkbox is checked and its parent li has the completed class.

## Step 5 @verifies ac-19

Reload the todo app's All list and inspect the localStorage todo record for 'Assurance active A', then assert its stored completed value is true.
