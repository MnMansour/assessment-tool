export function percentage( numerator, denominator ){
  const percent = numerator / denominator * 100
  return percent
}

export function filterList( List, searchKey ) {
  keyword = searchKey.toLowerCase();  
  filterd_list = List.filter(function (item) {
    item = item.toLowerCase();
    return item.indexOf(keyword) > -1
  })  
  return filterd_list
}