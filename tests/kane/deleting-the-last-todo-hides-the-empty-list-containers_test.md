---
assurance:
  id: t-15
  base: sha256:01db8fe17a01f9daad8ea3697d6911dcfc45ee10edb592a3daa718d061d78ffb
---
# Deleting the last todo hides the empty-list containers

> Remove the sole active todo in All, leaving no todos and the specified hidden main and footer; check deletion persists after reload.

## Step 1

Open {{start_url}} in the browser and reach the todo app's All list.

## Step 2

On the todo app's All list, establish a sole active todo named 'Assurance sole gamma', removing pre-existing todos through the app's controls if needed.

## Step 3 @verifies ac-28

On the All list, hover over 'Assurance sole gamma', then assert its `.destroy` remove button appears.

## Step 4 @verifies ac-26, ac-30, ac-31

On the All list, remove 'Assurance sole gamma' through its revealed button, then assert that todo is absent, `#main` is hidden and `#footer` is hidden.

## Step 5 @verifies ac-27

Reload the todo app's All list, then assert 'Assurance sole gamma' remains absent.
