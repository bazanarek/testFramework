# How to Launch the Project

## 1. Set Up Environment Variables

Create a `.env` file in the root directory with the following content:

```env
CYPRESS_USERNAME=your_login
CYPRESS_PASSWORD=your_password
```

## 2. Install Dependencies

Run the following command to install all required packages:

```bash
yarn install
```

## 3. Run Cypress Tests

### Headless Mode

To run the tests without opening a browser UI:

```bash
yarn cypress run
```

### GUI Mode

To run tests using the interactive Cypress Test Runner:

```bash
yarn cy:open
```

## 4. Generate HTML Test Report (Optional)

After running tests, a Mochawesome HTML report will be generated at:

```
cypress/reports/html/index.html
```

If the report is not generated, make sure to run:

```bash
yarn test:report
```

And verify that the reporter is correctly configured in `package.json`.

## 5. .gitignore Recommendation

Make sure your `.env` file is not committed to version control. Add it to `.gitignore`:

```gitignore
.env
```