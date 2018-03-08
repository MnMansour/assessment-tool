export function percentage( numerator, denominator ){
	const percent = numerator / denominator * 100;
	return percent;
}

export function filterList(list, searchKey) {
	let keyword = searchKey.toLowerCase();
	let filterd_list = list.filter(function (item) {
		item = item.toLowerCase();
		return item.includes(keyword);
	});  
	return filterd_list;
}