const sing = () => {
  console.log("action :: sing");
};

const cry = () => {
  console.log("action :: cry");
};

const dance = () => {
  console.log("action :: dance");
};

const whatfeel = (feel, goodCallback, badCallback) => {
  if (feel === "good") {
    goodCallback();
  } else {
    badCallback();
  }
};

whatfeel("sad", sing, cry);
