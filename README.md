# Commit workflow
Simple commit workflow example for JS projects.

1. Clone the repo
2. `yarn install`
3. Play around

To test out the workflow you can make a change to either `math.js` or `add.js` and `git commit`. 

Note that changing `add.js` will trigger **both** `add.test.js` and `math.test.js` to run on the `pre-commit` hook, because the `math` module uses the `add` module internally, and the `pre-commit` hook runs `jest --findRelatedTests`.
