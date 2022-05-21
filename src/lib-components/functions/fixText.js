function fixText(stingText) {
  let textString = JSON.stringify(stingText);

  //let res = textString.replace(/(?:\\[rn])+/g, "<br>");
  let res = textString.replace(/(\\r\\)+/g, `<br>\\`);
  res = res.replace(/(\\r)+/g, `<br>`);

  return JSON.parse(res);

  /*
  let str = JSON.stringify(stingText);

  String.prototype.fakeReplace = function (str, newstr) {
    return this.split(str).join(newstr);
  };

  str = str.fakeReplace("MOSTRO/ANIMALE", "<br>");

  return str;
  */
}

export default fixText;
