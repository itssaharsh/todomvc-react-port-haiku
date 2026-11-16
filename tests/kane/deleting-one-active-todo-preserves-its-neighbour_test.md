---
assurance:
  id: t-14
  base: sha256:c789bcf23dccf4cb7791774212c4b0f8a9a789e8022a0485bf96f3ba9cbd20af
---
# Deleting one active todo preserves its neighbour

> With two active todos visible in All, hover and remove one named todo; establish that the distinct other todo survives, including after reload.

## Step 1

Open {{start_url}} in the browser and reach the todo app's All list.

## Step 2

On the todo app's All list, establish a two-item active fixture containing only 'Assurance target alpha' and 'Assurance neighbour beta', removing pre-existing todos through the app's controls if needed.

## Step 3 @verifies ac-28

On the All list, hover over 'Assurance target alpha', then assert its `.destroy` remove button appears.

## Step 4 @verifies ac-26, ac-29

On the All list, remove 'Assurance target alpha' using that todo's revealed button, then assert 'Assurance target alpha' is absent from the list and 'Assurance neighbour beta' remains visible.

## Step 5 @verifies ac-27

Reload the todo app's All list, then assert 'Assurance target alpha' is still absent from the list.
