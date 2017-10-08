## Synopsis & Motivation
This project was created by James Grenning [(@jwgrenning)](https://github.com/jwgrenning) and Jeff Langr [(@jlangr)](https://github.com/jlangr) 
as an introduction exercise to Test-Driven Development (TDD).

We have implemented it in:
* [Java with JUnit](https://github.com/RappidDevelopment/NumberConverterKata/tree/master/java)
* [JavaScript with Jest](https://github.com/RappidDevelopment/NumberConverterKata/tree/master/javascript)

The project is meant to practice the repetition of the three very short development cycles of TDD:  

1. You must write a failing test before you write any production code.  
2. You must not write more of a test than is sufficient to fail, or fail to compile.  
3. You must not write more production code than is sufficient to make the currently failing test pass.  

This cycle is also known as _Red/Green/Refactor_  
  
![red/green/refactor](http://marcabraham.files.wordpress.com/2012/04/06_red_green_refactor.jpg)
  
## Kata
You are to write a `toWords` method that takes an `int` as a parameter and returns the English `String` of the given number.  
  
Example:  

| Given         | Expected Result |
| ------------- |---------------- |
| `0`           | `zero`          |
| `999`         | `nine hundred ninety-nine`|
| `701020`      | `seven hundred one thousand twenty`|

There are `14` test-cases already provided, the first `13` skipped and will not be run. Introduce each test case one by one as each one passes.


 