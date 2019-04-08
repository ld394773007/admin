export function checkMobile(str) {
  let re = /^1\d{10}$/
  if (re.test(str)) {
    return true
  } else {
    return false
  }
}

export function checkEmail(str) {
  var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
  if (re.test(str)) {
    return true
  } else {
    return false
  }
}
