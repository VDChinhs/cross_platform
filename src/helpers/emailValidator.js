export function emailValidator(email) {
  const re = /[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com/
  if (!email) return "Email không được để trống"
  if (!re.test(email)) return 'Vui lòng nhập đúng định dạng email'
  return ''
}
