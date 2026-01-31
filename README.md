# Singlish to Sinhala Translator - Automated Tests

This project contains automated tests for the Singlish to Sinhala translator application at https://www.swifttranslator.com/

## 📋 Test Coverage

- **24 Positive Functional Tests** - Testing correct conversion scenarios
- **10 Negative Functional Tests** - Testing failure and edge cases
- **1 UI Test** - Testing real-time output update behavior

**Total: 35 Test Cases**

## 🛠️ Technologies Used

- **Playwright** - Browser automation framework
- **Node.js** - JavaScript runtime
- **JavaScript** - Programming language

## 📦 Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for version control)

## 🚀 Installation Instructions

### Step 1: Clone or Download the Repository

```bash
# If using Git
git clone <your-repository-url>
cd singlish-translator-tests

# OR simply extract the downloaded ZIP file and navigate to the folder
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Install Playwright Browsers

```bash
npx playwright install
```

## ▶️ Running Tests

### Run All Tests (Headless Mode)

```bash
npm test
```

### Run All Tests (Browser Visible)

```bash
npm run test:headed
```

### Run Specific Test Files

```bash
# Run only positive tests (24 tests)
npm run test:positive

# Run only negative tests (10 tests)
npm run test:negative

# Run only UI tests (1 test)
npm run test:ui-only
```

### Run Tests in UI Mode (Interactive)

```bash
npm run test:ui
```

### Run Tests in Debug Mode

```bash
npm run test:debug
```

### View Test Report

After running tests, view the HTML report:

```bash
npm run report
```

## 📁 Project Structure

```
singlish-translator-tests/
├── tests/
│   ├── positive-functional.spec.js   # 24 positive test cases
│   ├── negative-functional.spec.js   # 10 negative test cases
│   └── ui-tests.spec.js              # 1 UI test case
├── screenshots/                       # Screenshots of test execution
├── test-results/                      # Test execution results
├── playwright.config.js               # Playwright configuration
├── package.json                       # Project dependencies
└── README.md                          # This file
```

## 📊 Test Categories

### Positive Functional Tests (24)

1. **Sentence Structures** (5 tests)
   - Simple sentences
   - Compound sentences
   - Complex sentences
   - Interrogative (questions)
   - Imperative (commands)

2. **Positive vs Negative Forms** (2 tests)
   - Positive sentence forms
   - Negative sentence forms

3. **Daily Usage** (3 tests)
   - Common greetings
   - Polite requests
   - Common responses

4. **Polite vs Informal** (2 tests)
   - Polite phrasing
   - Informal phrasing

5. **Tense Variations** (3 tests)
   - Past tense
   - Present tense
   - Future tense

6. **Pronouns & Plural** (2 tests)
   - Singular pronouns
   - Plural pronouns

7. **Mixed English** (4 tests)
   - Technical terms
   - Place names
   - Brand names
   - Abbreviations

8. **Punctuation & Numbers** (2 tests)
   - Punctuation marks
   - Currency and numbers

9. **Input Length** (1 test)
   - Short inputs (≤30 characters)

### Negative Functional Tests (10)

1. Joined words without spaces
2. Missing spaces in multi-word phrases
3. Extreme slang with special characters
4. Excessive multiple spaces
5. Very long paragraph (performance test)
6. Misspelled common words
7. Repeated characters for emphasis
8. Line breaks in middle of sentences
9. Mixed with unsupported symbols
10. Complex slang combinations

### UI Tests (1)

1. Real-time output update behavior

## 🔧 Configuration

The `playwright.config.js` file contains:

- Test timeout: 30 seconds
- Retry attempts: 1 (2 on CI)
- Browser: Chromium (Desktop Chrome)
- Viewport: 1280x720
- Screenshots: On failure only
- Video recording: On failure only

## 📝 Test Execution Results

Test results are saved in:

- **HTML Report**: `test-results/html-report/index.html`
- **JSON Report**: `test-results/test-results.json`
- **Screenshots**: `screenshots/` folder

## ⚠️ Important Notes

### Selector Updates Required

Before running the tests, you MUST update the selectors in the test files to match the actual website:

```javascript
// Example: Update these selectors based on actual website
const inputField = await page.locator('textarea[placeholder*="Singlish"]');
const outputField = await page.locator('textarea[placeholder*="Sinhala"]');
```

To find the correct selectors:

1. Open https://www.swifttranslator.com/ in your browser
2. Press **F12** to open Developer Tools
3. Click the **Elements** tab
4. Right-click on the input field and select **Inspect**
5. Note the `id`, `class`, or other attributes
6. Update the selectors in all test files

### Expected Output Verification

- Verify expected Sinhala outputs using the website's Help page
- Some outputs may vary based on the translator's implementation
- Adjust expected outputs in test files as needed

## 🐛 Troubleshooting

### Tests are failing with "Selector not found" error

**Solution**: Update the selectors in the test files to match the actual website elements.

### Browser is not opening

**Solution**: Run `npx playwright install` to install browsers.

### Tests are timing out

**Solution**: Increase the timeout in `playwright.config.js` or check your internet connection.

### Screenshots folder is empty

**Solution**: Screenshots are only saved when tests fail. Check the `screenshots/` folder after test failures.

## 📞 Support

For issues or questions:

1. Check the Playwright documentation: https://playwright.dev/
2. Review test execution logs
3. Verify website selectors are correct
4. Ensure internet connection is stable

## 📄 License

This project is created for educational purposes as part of IT3040 - ITPM course assignment.

## 👨‍💻 Author

**Your Name**  
Registration Number: [Your Registration Number]  
Course: IT3040 - ITPM  
Institution: [Your Institution]  
Date: February 2026

---

**Note**: This testing framework is designed specifically for https://www.swifttranslator.com/ and tests the Singlish to Sinhala translation functionality.