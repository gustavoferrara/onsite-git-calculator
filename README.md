# The Collaborative Calculator (JavaScript Edition)

Welcome to our Git exercise! Your mission is to add one operator to this calculator.

## Your Instructions

1.  **Clone the Repo:**
    ```bash
    git clone <PASTE_YOUR_REPO_URL_HERE>
    cd onsite-calculator-js
    ```
    *(No `npm install` is needed since we have no dependencies!)*

2.  **Create Your Branch:**
    Pick a name that is unique. A good format is `feature/your-name-operator`.
    ```bash
    # Example:
    git checkout -b feature/jane-doe-multiply
    ```

3.  **Pick ONE File to Edit:**
    Go into the `operators/` folder and pick **one** of these files:
    * `subtract.js`
    * `multiply.js`
    * `divide.js`

4.  **Add Your Code:**
    Open the file and replace the `// --- YOUR CODE GOES HERE ---` line with your implementation.

    * For `subtract.js`: `return a - b;`
    * For `multiply.js`: `return a * b;`
    * For `divide.js`: `return a / b;`

5.  **Commit and Push Your Work:**
    ```bash
    # Step 1: Add your one changed file
    git add operators/your-chosen-file.js
    
    # Step 2: Commit it with a clear message
    git commit -m "Feat: Add multiply function" 
    
    # Step 3: Push your branch to GitHub
    # Git might give you a longer command to copy/paste, that's fine!
    git push --set-upstream origin <your-branch-name>
    ```

6.  **Create a Pull Request:**
    * Go to the GitHub repository page in your browser.
    * You should see a yellow bar pop up: "Your branch had recent pushes."
    * Click the **"Compare & pull request"** button.
    * Give it a title (e.g., "Add Multiply Function") and click "Create pull request."

7.  **You're Done!**
    Wait for your PR to be reviewed and merged.