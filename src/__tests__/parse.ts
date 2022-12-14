import {parse} from "../parse";
import {FormattedTestResults} from "@jest/test-result";

it('should be parse', () =>
  expect(parse(result))
    .toEqual({
      success: false,
      total: 1,
      passed: 0,
      failed: 1,
      time: 1,
      results: [{
        path: '/jest-reporter/src/index.test.ts',
        title: 'should a',
        location: {
          column: 1,
          line: 3
        },
        message: "Error: oops.\n    at check (/jest-reporter/src/index.ts:5:11)\n    at Object.exports.tanmen (/jest-reporter/src/index.ts:1:38)\n    at Object.<anonymous> (/jest-reporter/src/index.test.ts:4:10)\n    at Object.asyncJestTest (/jest-reporter/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:100:37)\n    at /jest-reporter/node_modules/jest-jasmine2/build/queueRunner.js:47:12\n    at new Promise (<anonymous>)\n    at mapper (/jest-reporter/node_modules/jest-jasmine2/build/queueRunner.js:30:19)\n    at /jest-reporter/node_modules/jest-jasmine2/build/queueRunner.js:77:41"
      }]
    }));

const result: FormattedTestResults = {
  numFailedTestSuites: 1,
  numFailedTests: 1,
  numPassedTestSuites: 0,
  numPassedTests: 0,
  numPendingTestSuites: 0,
  numPendingTests: 0,
  numRuntimeErrorTestSuites: 0,
  numTotalTestSuites: 1,
  numTotalTests: 1,
  snapshot: {
    added: 0,
    didUpdate: false,
    failure: false,
    filesAdded: 0,
    filesRemoved: 0,
    filesRemovedList: [],
    filesUnmatched: 0,
    filesUpdated: 0,
    matched: 0,
    total: 0,
    unchecked: 0,
    uncheckedKeysByFile: [],
    unmatched: 0,
    updated: 0
  },
  startTime: 1592979586301,
  success: false,
  testResults: [
    {
      assertionResults: [
        {
          ancestorTitles: [],
          failureMessages: [
            "Error: oops.\n    at check (/jest-reporter/src/index.ts:5:11)\n    at Object.exports.tanmen (/jest-reporter/src/index.ts:1:38)\n    at Object.<anonymous> (/jest-reporter/src/index.test.ts:4:10)\n    at Object.asyncJestTest (/jest-reporter/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:100:37)\n    at /jest-reporter/node_modules/jest-jasmine2/build/queueRunner.js:47:12\n    at new Promise (<anonymous>)\n    at mapper (/jest-reporter/node_modules/jest-jasmine2/build/queueRunner.js:30:19)\n    at /jest-reporter/node_modules/jest-jasmine2/build/queueRunner.js:77:41"
          ],
          fullName: "should a",
          location: {
            column: 1,
            line: 3
          },
          status: "failed",
          title: "should a"
        }
      ],
      endTime: 1592979587396,
      message: "\u001b[1m\u001b[31m  \u001b[1m??? \u001b[22m\u001b[1mshould a\u001b[39m\u001b[22m\n\n    oops\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 3 | \u001b[39m\u001b[36mconst\u001b[39m check \u001b[33m=\u001b[39m (a\u001b[33m:\u001b[39m string) \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 4 | \u001b[39m  \u001b[36mif\u001b[39m (a \u001b[33m===\u001b[39m \u001b[32m'a'\u001b[39m) {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 5 | \u001b[39m    \u001b[36mthrow\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mError\u001b[39m(\u001b[32m'oops'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m   | \u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 6 | \u001b[39m  }\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 7 | \u001b[39m  \u001b[36mreturn\u001b[39m a\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 8 | \u001b[39m}\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat check (\u001b[22m\u001b[2msrc/index.ts\u001b[2m:5:11)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.exports.tanmen (\u001b[22m\u001b[2msrc/index.ts\u001b[2m:1:38)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36msrc/index.test.ts\u001b[39m\u001b[0m\u001b[2m:4:10)\u001b[22m\u001b[2m\u001b[22m\n",
      name: "/jest-reporter/src/index.test.ts",
      startTime: 1592979586900,
      status: "failed",
      summary: "",
      coverage: {}
    }
  ],
  wasInterrupted: false
}
