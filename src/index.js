String.prototype.isQuestion = function isQuestion() {
  const questionable = new RegExp(/\?$/);
  return questionable.test(this);
};
