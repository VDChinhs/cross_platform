export function passwordValidator(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,}$/
  if (!password) return "Password không được để trống"
  if (!re.test(password)) return 'Password cần ít nhất 5 ký tự, có chữ cái hoa và chữ cái thường'
  return ''
}
