module.exports = Promise = (fn) ->
  promise = P.defer()
  fn promise
  promise.promise()
