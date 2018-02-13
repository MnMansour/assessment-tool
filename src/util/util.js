export function percentage( numerator, denominator ){
  const percent = numerator / denominator * 100
  return percent
}

export function filterList( List, searchKey ) {
  let keyword = searchKey.toLowerCase();
  let filterd_list = List.filter(function (item) {
    item = item.toLowerCase();
    return item.indexOf(keyword) > -1
  })
  return filterd_list
}
