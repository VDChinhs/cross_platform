export function emailacong(email) {
    const re = /@/
    if (!email) return "Email không được để trống"
    if (!re.test(email)) return false
    return true
  }