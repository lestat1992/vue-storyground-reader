function svgColorChange(stringSvg, color) {
  let primaryColor = "#7F7F7F";
  let primaryColorReplace = color;
  return stringSvg.replace(primaryColor, primaryColorReplace);
}

export default svgColorChange;
