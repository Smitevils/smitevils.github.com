0.0.12
------

* Added support for the SWITCH function (#60883740)

0.0.11
------

* Add some defensive coding around the LOWER function and add associated test cases

0.0.10
------

* Add pull request to fix DATEVALUE and add some test cases
* Add the begining support for bower package management
* Removed dependency on financial.js as this is now in the expression parser

0.0.9
-----

* Fixed issue with CONCATENATE function (#59947518)

0.0.8
-----

* Added HTML2TEXT and associated test cases
* Added HUMANIZE and associated test cases (#59192844)
* Added JSON2TEXT and associated test cases (#59604642)

0.0.7
-----

* Moved the lodash functions to expression parser
* Moved the callback registration functions to expression parser module

0.0.6
-----

* Fixed the way jStat uses formula's arguments
* Dates returned as string instead of JavaScript Date object

0.0.5
-----

* Replaced sugar with lodash


0.0.4
-----

* Placed a work around for some functions in lodash that do not work well with the expression parser
* Switched across from using underscore to lodash

0.0.3
-----

* Merged in the changes in stoic.io
* Added more test coverage (we're up to about 55%)
* Added support for the financial package (https://github.com/mfreilich/financial.js)
* Did some refactoring to better support running in browser and nodejs
* Upgraded to moment v2.0.0
* Added support for requirejs
* Added support for function
