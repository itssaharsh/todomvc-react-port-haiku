---
assurance:
  id: t-7
  base: sha256:35b5d315502069c968b08d6f5fe5d9c33580270c84cd0b2d1a49f3d5679ac6ab
---
# New-todo input receives focus on page load

> Show that loading the app focuses the new-todo input at the top of the page.

## Step 1 @verifies ac-11

Open {{start_url}} in the browser and load the todo app, then assert the new-todo input at the top of the page is the active focused element.
