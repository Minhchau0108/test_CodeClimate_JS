String.prototype.isQuestion = function isQuestion() {
  const questionable = new RegExp(/\?$/);
  return questionable.test(this);
};
String.prototype.hasVowels = function hasVowels() {
  const vowels = new RegExp("[aeiou]", "i");
  return vowels.test(this);
};
String.prototype.toUpper = function toUpper() {
  const upper = new RegExp("[a-z]", "g");
  return this.replace(upper, function transform(letter) {
    return String.fromCharCode(letter.charCodeAt(0) - 32);
  });
};
String.prototype.toLower = function toLower() {
  const lower = new RegExp("[A-Z]", "g");
  return this.replace(lower, function transform(letter) {
    return String.fromCharCode(letter.charCodeAt(0) + 32);
  });
};
