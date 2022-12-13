let id = 1

export function uid() {
  return `chisel-${id++}`
}