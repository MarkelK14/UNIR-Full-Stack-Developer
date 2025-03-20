export const sanitizarArray = (array: any[], keyname: string) => {
  let arrayResult = [...array];
  arrayResult.forEach((item: any) => {
    item[keyname] = item[keyname].toLowerCase()
  })
  return arrayResult
}
