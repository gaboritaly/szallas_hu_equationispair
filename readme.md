# Kalkulációs függvény páros érték ellenőrzése

## Teszt

```bash
const startWithZero = "0-1+3-1-1";
const withZero = "-3+0+3";
const startWithMinus = "-1+3-1-1";
const startWithPlus = "1+3-1-1+5+3-11";
const equations = [startWithZero, withZero, startWithMinus, startWithPlus];

try {
  equations.forEach((equation) => {
    const isPair = getEquationIsPair(equation);
    console.log(isPair);
  });
} catch (error) {
  console.error(error);
}
```
