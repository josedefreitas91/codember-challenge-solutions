function decryptMessage() {
  fetch("https://codember.dev/encrypted.txt")
    .then((response) => response.text())
    .then((text) => {
      const textSplited = text.split(" ");
      const textParsedArray = [];
      const is2Digits = 2;
      const is3Digits = 3;
      textSplited.map((curr) => {
        const textGroupParsed = [];
        let textTemp = "";
        let cont = is2Digits;
        curr.split("").map((c, i) => {
          if (!textTemp.length) {
            cont = c === "1" ? is3Digits : is2Digits;
            textTemp += c;
          } else {
            if (!cont) {
              textGroupParsed.push(textTemp);
              textTemp = "";
              cont = c === "1" ? is3Digits : is2Digits;
            }
            textTemp += c;
          }
          cont--;
          if (i === curr.length - 1) {
            textGroupParsed.push(textTemp);
          }
        });
        textParsedArray.push(textGroupParsed);
      });
      const textParsed = textParsedArray
        .map((curr) => String.fromCharCode(...curr))
        .join(" ");

      console.log("***** SOLUTION *****");
      console.log(`submit ${textParsed}`);
    })
    .catch((error) => console.log("Error getting file", error));
}

decryptMessage();
