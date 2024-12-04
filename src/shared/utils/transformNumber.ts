export const transformNumber = (num: number) => {
  if (num >= 10) return num

  return `0${num}`
}