import {
  allPass,
  assocPath,
  complement,
  compose,
  curry,
  equals,
  filter,
  findIndex,
  isEmpty,
  isNil,
  keys,
  length,
  map,
  path as RPath,
  propEq,
  propOr,
  reduce,
  split,
  tap
} from 'ramda'

/**
 * Currying for instead of using *ugly SWITCH statement
 * @param {*} cases
 */
export const switchFn = cases => defaultCase => key =>
  key in cases ? cases[key] : defaultCase

export const toFixed = (amount, precision = 2) =>
  Number(amount).toFixed(precision)

export const toString = integer => integer.toString()

export const NotEmpty = complement(isEmpty)

export const NotNull = complement(isNil)

export const NotEqual = curry((constraint, value) =>
  complement(equals(constraint))(value)
)

export const NeitherEmptyNorNull = allPass([NotEmpty, NotNull])

export const PropNotEqual = curry((constraint, key, object) =>
  compose(NotEqual(constraint), propOr('', key))(object)
)

export const PropEqual = curry((constraint, key, object) =>
  compose(equals(constraint), propOr('', key))(object)
)

export const FilterByProp = curry((constraint, key, array) =>
  filter(PropEqual(constraint, key), array)
)

export const toSentenceCase = compose(
  reduce(
    (str, char) =>
      str === '' ? char.toUpperCase() : `${str}${char}`,
    ''
  ),
  split(''),
  toString
)

export const replaceArrayByIndex = ({
  collections,
  data,
  index
}) => assocPath([index], data, collections)

export const findIndexByProperty = ({ property, value }) =>
  findIndex(propEq(property, value))

export const getObjectLength = compose(length, keys)

export const getNestedProperty = ({ path = [], object }) =>
  RPath(path, object)

export const mapDataFromProp = curry((prop, collections) =>
  map(propOr([], prop), collections)
)

export const fnTap = tap(x => console.log('Result is', x))

export const objectToUrlParameter = obj =>
  compose(
    reduce((prev, item) => `${prev}&${item}=${obj[item]}`, ''),
    keys
  )(obj)

export const debounce = (func, delay) => {
  let timerId
  return (...args) => {
    const boundFunc = func.bind(this, ...args)
    clearTimeout(timerId)
    timerId = setTimeout(boundFunc, delay)
  }
}

export const throttle = (func, delay, immediate) => {
  let timerId
  return (...args) => {
    const boundFunc = func.bind(this, ...args)
    if (timerId) return
    if (immediate && !timerId) boundFunc()
    timerId = setTimeout(() => {
      if (!immediate) boundFunc()
      timerId = null
    }, delay)
  }
}
