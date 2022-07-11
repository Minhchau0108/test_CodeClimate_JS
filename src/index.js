String.prototype.isQuestion = function isQuestion() {
  const questionable = new RegExp(/\?$/);
  return questionable.test(this);
};
String.prototype.hasVowels = function hasVowels() {
  const vowels = new RegExp("[aeiou]", "i");
  return vowels.test(this);
};
