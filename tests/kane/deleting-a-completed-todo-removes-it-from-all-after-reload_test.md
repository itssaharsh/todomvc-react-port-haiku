---
assurance:
  id: t-16
  base: sha256:003feb058dd6e393e50a25b9160d833d8060709b2b75da45bbd0ced759182308
---
# Deleting a completed todo removes it from All after reload

> With a completed todo visible in the Completed filter, use its hovered remove button to delete it and confirm it does not return after reload.

## Step 1

Open {{start_url}} in the browser and reach the todo app's All list.

## Step 2

On the todo app's All list, establish two todos named 'Assurance completed delta' and 'Assurance active epsilon', removing pre-existing todos through the app's controls if needed; mark 'Assurance completed delta' complete.

## Step 3 @verifies ac-28

On the todo app's Completed filter, hover over 'Assurance completed delta', then assert its `.destroy` remove button appears.

## Step 4 @verifies ac-26

On the Completed filter, remove 'Assurance completed delta' through its revealed button, then assert it is absent from that list.

## Step 5 @verifies ac-27

Reload the todo app and open its All list, then assert 'Assurance completed delta' remains absent from the list.
