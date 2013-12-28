# requirelib

Uses internally node `require` function but it's relative to your `lib` folder or if you're building a code coverage report from ypur `lib-cov` folder.

## Install
    $ npm install requirelib

## Usage

```js
var requirelib = require('./lib/requirelib')('MY_NAME_COV') //checks for process.env.MY_NAME_COV
  , override = requirelib('my_module')
  , override = requirelib('my_other_module/module')
  , config = require(CONFIG_PATH)
```

Uses `./lib-cov`

    $ MY_NAME_COV=1 node server.js

Coverage with mocha

    $ @NODE_ENV=test MY_NAME_COV=1 mocha test/*.test.js --reporter spec

# How to contribute

koa-jsonp follows (more or less) the [Felix's Node.js Style Guide](http://nodeguide.com/style.html), your contribution must be consistent with this style.

The test suite is written on top of [visionmedia/mocha](http://visionmedia.github.com/mocha/) and it took hours of hard work. Please use the tests to check if your contribution is breaking some part of the library and add new tests for each new feature.

    $ npm test

and for your test coverage

    $ make test-cov

## License

_This software is released under the MIT license cited below_.

    Copyright (c) 2013 Kilian Ciuffolo, me@nailik.org. All Rights Reserved.

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the 'Software'), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
