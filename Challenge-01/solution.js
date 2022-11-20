function removeBots() {
  const VALID_KEYS = ["usr", "eme", "psw", "age", "loc", "fll"];

  fetch("https://codember.dev/users.txt")
    .then((response) => response.text())
    .then((resp) => {
      const dataArray = resp.split("\n");
      const validUsers = [];
      const allUsers = [];
      let prevUser = "";
      for (let i = 0; i < dataArray.length; i++) {
        const curr = dataArray[i];
        if (!curr || i === dataArray.length - 1) {
          const objUser = prevUser
            .trim()
            .split(" ")
            .reduce((acc, curr) => {
              const [key, value] = curr.split(":");
              return { ...acc, ...{ [key]: value } };
            }, {});
          allUsers.push(objUser);
          if (VALID_KEYS.every((curr) => Object.keys(objUser).includes(curr))) {
            validUsers.push(objUser);
          }
          prevUser = "";
        } else {
          prevUser += ` ${curr}`;
        }
      }
      console.log("***** SOLUTION *****");
      console.log(
        `submit ${validUsers.length}${validUsers[validUsers.length - 1]?.usr}`
      );
    })
    .catch((error) => console.log("Error getting file", error));
}

removeBots();
