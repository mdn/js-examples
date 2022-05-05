# js-examples
This repository contains examples of JavaScript usage.

The "editable-samples" directory contains JavaScript examples that are intended to be embedded in MDN pages as live editable samples.

The "promises-test" directory contains a JS promises test example, for learning purposes. [Run the example live](http://mdn.github.io/js-examples/promises-test/).

The "modules" directory contains a series of examples that explain how [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) are used. The subdirectories are as follows:

* [basic-modules](module-examples/basic-modules): Simple example that demonstrates module basics, including default exports ([run the example live](http://mdn.github.io/js-examples/module-examples/basic-modules)).
* [renaming](module-examples/renaming): Shows how exports can be renamed to avoid conflicts, using `x as y` syntax ([run the example live](http://mdn.github.io/js-examples/module-examples/renaming)).
* [module-objects](module-examples/module-objects)): Shows how to import an entire module as an object using `import * as x from 'y.js'` syntax ([run the example live](http://mdn.github.io/js-examples/module-examples/module-objects)).
* [classes](module-examples/classes): Provides an example of importing a class from a module ([run the example live](http://mdn.github.io/js-examples/module-examples/classes)).
* [module-aggregation](module-examples/module-aggregation): Shows how sub module features can be aggregated into a parent module using `export { x } from 'y.js'` syntax ([run the example live](http://mdn.github.io/js-examples/module-examples/module-aggregation)).
* [dynamic-module-imports](module-examples/dynamic-module-imports): Demonstrates dynamic module loading using `import().then()` ([run the example live](http://mdn.github.io/js-examples/module-examples/dynamic-module-imports)).
* [top-level-await](module-examples/top-level-await): An example of using the `await` keyword within a module ([run the example live](http://mdn.github.io/js-examples/module-examples/top-level-await)).
