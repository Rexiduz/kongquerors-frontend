export const debounce = (func, wait, immediate) => {
  var timeout
  return function () {
    var context = this,
      args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const clsx = (...classNames) => classNames.filter((cls) => cls).join(' ')

export const truncateAddress = (address, size = 4, offset = 2) => {
  if (address) {
    const truncatedAddress =
      address.substring(0, size + offset) +
      '...' +
      address.substring(address.length - size)

    return truncatedAddress
  }

  return ''
}
