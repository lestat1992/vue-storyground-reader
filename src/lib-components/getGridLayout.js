function gridLayout(id) {
  let boxIllustration;
  let boxText;
  switch (id) {
    case 1:
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 6,
      };
      boxText = {
        gridRowStart: 1,
        gridColumnStart: 6,
        gridRowEnd: 7,
        gridColumnEnd: 9,
      };
      break;
    case 2:
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 5,
      };

      boxText = {
        gridRowStart: 1,
        gridColumnStart: 5,
        gridRowEnd: 7,
        gridColumnEnd: 9,
      };
      break;
    case 3:
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 4,
        gridRowEnd: 7,
        gridColumnEnd: 9,
      };
      boxText = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 5,
      };
      break;
    case 4:
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 5,
        gridRowEnd: 7,
        gridColumnEnd: 9,
      };
      boxText = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 5,
      };
      break;
    case 5:
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9,
      };
      boxText = {
        gridRowStart: 4,
        gridColumnStart: 3,
        gridRowEnd: 6,
        gridColumnEnd: 7,
      };
      break;
    case 6:
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9,
      };
      boxText = {
        gridRowStart: 2,
        gridColumnStart: 3,
        gridRowEnd: 4,
        gridColumnEnd: 7,
      };
      break;
    /* all screen */
    case 7:
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9,
      };
      boxText = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9,
      };
      break;
    case 8:
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9,
      };
      boxText = {
        gridRowStart: 2,
        gridColumnStart: 6,
        gridRowEnd: 6,
        gridColumnEnd: 8,
      };
      break;
    case 9:
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9,
      };
      boxText = {
        gridRowStart: 2,
        gridColumnStart: 2,
        gridRowEnd: 6,
        gridColumnEnd: 4,
      };
      break;
    case 10:
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9,
      };
      boxText = {
        gridRowStart: 2,
        gridColumnStart: 2,
        gridRowEnd: 6,
        gridColumnEnd: 5,
      };
      break;
    case 11:
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9,
      };
      boxText = {
        gridRowStart: 2,
        gridColumnStart: 6,
        gridRowEnd: 6,
        gridColumnEnd: 8,
      };
      break;
    case 12:
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9,
      };
      boxText = {
        gridRowStart: 2,
        gridColumnStart: 5,
        gridRowEnd: 6,
        gridColumnEnd: 8,
      };
      break;
    case 13:
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9,
      };
      boxText = {
        gridRowStart: 5,
        gridColumnStart: 2,
        gridRowEnd: 6,
        gridColumnEnd: 8,
      };
      break;
    case 14:
      boxIllustration = {
        gridRowStart: 1,
        gridColumnStart: 1,
        gridRowEnd: 7,
        gridColumnEnd: 9,
      };
      boxText = {
        gridRowStart: 2,
        gridColumnStart: 2,
        gridRowEnd: 3,
        gridColumnEnd: 8,
      };
      break;
    default:
      break;
  }

  return {
    boxIllustration: boxIllustration,
    boxText: boxText,
  };
}

export default gridLayout;
