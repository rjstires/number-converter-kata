# Number Converter (JavaScript)

### Install Node.js

Install Node.js on your machine from [https://nodejs.org](https://nodejs.org/en/).

### Clone this repository
```bash
$ git clone https://github.com/RappidDevelopment/NumberConverterKata.git
$ cd NumberConverterKata/javascript
```

### Install Jest
This project uses [Facebook's Jest](https://facebook.github.io/jest/) as the testing framework.

To install, run:
```bash
$ npm install
```

### Run the Tests, Start Coding! 
To start Jest and run the first failing test, run:
```
$ npm  test
```
Jest will start in watch mode. When you make a change and save `NumberConverter.js`, Jest will re-run all available tests.

When your first test is green, make a commit. Refactor if needed and commit again.

When you have a `green` commit, remove the `skip` from the next test in `NumberConverter.test.ts`.

If you want to only run a specific test, you can do so with `test.only`.

### Run Your Program
When all tests are green, you can run your program with the following: 
```
$ node index.js <int>
```

Examples:
```bash
$ node index.js 6831
# six thousand eight hundred thirty-one
```

```bash
$ node index.js 932131
# nine hundred thirty-two thousand one hundred thirty-one
```
