var Promise;

module.exports = Promise = function(fn) {
  promise = P.defer();
  fn(promise);
  return promise.promise();
}
