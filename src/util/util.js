export function percentage( numerator, denominator ){
  const percent = numerator / denominator * 100
  return percent
}

export function filterList( list, searchKey ) {
  let keyword = searchKey.toLowerCase();
  console.log('list: ', list);
  let filterd_list = list.map(function (s) { return s.toString().toLowerCase(); }).filter(item => item.includes(keyword)) 
  return filterd_list
}