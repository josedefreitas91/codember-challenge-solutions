function validatePassword(password) {
  const numberOfRepetitions = String(password).split("5").length - 1;

  if (String(password).length !== 5 || numberOfRepetitions < 2) return false;

  let prevNumber = 0;
  const passwordValidated = String(password)
    .split("")
    .map((currStrNumber) => {
      const currNumber = parseInt(currStrNumber);
      const isGte = currNumber >= prevNumber;
      prevNumber = currNumber;
      return isGte;
    });

  return passwordValidated.every((validated) => validated);
}

function getPassword() {
  const allowedPasswordRange = { start: 11098, end: 98123 };
  const passwordRange = [];

  for (i = allowedPasswordRange.start; i <= allowedPasswordRange.end; i++) {
    if (validatePassword(i)) {
      passwordRange.push(i);
    }
  }

  console.log("***** SOLUTION *****");
  console.log(`submit ${passwordRange.length}-${passwordRange[55]}`);
}

getPassword();
