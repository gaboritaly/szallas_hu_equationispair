function getEquationIsPair(input: string): boolean {
  const regexp = /^([0-9-+])+$/;
  if (input == "") {
    throw "Üres paraméter";
  }
  if (!regexp.test(input)) {
    throw "Roszz formátum, kérem ellenőrizze a bevitt adatot";
  }

  const splittedForPlus = input.split("+");
  const calcolatedNum = splittedForPlus.reduce(
    (previousValue, currentValue) => {
      if (!isNaN(currentValue as any)) {
        return previousValue + Number(currentValue);
      }
      const splittedForMinus = currentValue.split("-");
      const firstElement = splittedForMinus.shift();

      const currentConverted = splittedForMinus.reduce(
        (prevMinus, currentMinus) => {
          return prevMinus - +currentMinus;
        },
        Number(firstElement ?? 0)
      );
      return previousValue + currentConverted;
    },
    0
  );
  return calcolatedNum % 2 == 0;
}

try {
  const equation = "-2+3-1";
  getEquationIsPair1(equation);
} catch (error) {
  console.error(error);
}