# The Collaborative Calculator (JavaScript Edition)

Welcome to our Git exercise! Your mission is to add one operator to this calculator.

## Your Instructions

1.  **Clone the Repo:**
    ```bash
    git clone [https://github.com/gustavoferrara/onsite-git-calculator](https://github.com/gustavoferrara/onsite-git-calculator)
    cd onsite-git-calculator
    ```
    *(You can also just open the `onsite-git-calculator` folder in VS Code)*

2.  **Create Your Branch:**
    Pick a name that is unique. A good format is `feature/your-name-operator`.
    ```bash
    # Example:
    git checkout -b feature/jane-doe-multiply
    ```

3.  **Pick ONE File to Edit:**
    Go into the `operators/` folder and pick **one** of these files. **First come, first served!**
    * `subtract.js`
    * `multiply.js`
    * `divide.js`
    * `average.js`
    * `max.js`
    * `isSame.js`

4.  **Add Your Code (Make your changes):**
    Open the file you picked and replace the `// --- YOUR CODE GOES HERE ---` line with your implementation.

    * For `subtract.js`: `return a - b;`
    * For `multiply.js`: `return a * b;`
    * For `divide.js`: `return a / b;`
    * For `average.js`: `return (a + b) / 2;`
    * For `max.js`: `return Math.max(a, b);`
    * For `isSame.js`: `return a === b;`

5.  **Commit and Push Your Work:**
    Follow these three steps to save your work and send it to GitHub.
    ```bash
    # Step 1: Stage your changes
    git add .
    
    # Step 2: Commit your changes with a message
    git commit -m "add multiply function"
    
    # Step 3: Push your branch to GitHub
    git push origin <your-branch-name>
    ```

6.  **Create a Pull Request:**
    * Go to the GitHub repository page in your browser.
    * You should see a yellow bar pop up: "Your branch had recent pushes."
    * Click the **"Compare & pull request"** button.
    * Give it a title (e.g., "Add Multiply Function") and click "Create pull request."

7.  **You're Done!**
    Wait for your PR to be reviewed and merged.