# goal-seek-v2
Goal seek for javascript
# goal-seek

goal-seek-v2 is a javascript library that used to find independent value of  "x"; of a function: "f(x)" with multiple parameters; such that f(x) equals some defined goal.


## Usage

const goalSeek = ({
  fn,
  Params,
  Goal,
  IndependentVariable,
  Tol,
});


The `goalSeek` function takes one object argument with the following keys:

1. `fn` - the function, "f(x)" that is being evaluated.
2. `Params` - an array of parameters that are to be used as inputs to `fn`.
3. `Goal` - the desired output of the `fn`.
4. `IndependentVariable` - The changing variable. 
5. `Tol` +/- tolerance percent. Put equal to 0.00001 or less for better results.



## Errors


### FailedToConvergeError

`FailedToConvergeError` is thrown when no acceptable independent variable can be found. For example, if `fn` is `x * x` and goal is `-1` the library will fail to converge and throw `FailedToConvergeError`.


## Licenses:

This work is [licensed](LICENSE) under MIT.

```
The MIT License (MIT)

Copyright (c) 2021 Faizan Younas Tanooli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
