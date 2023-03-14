export function copy(text: string){
	if (!navigator.clipboard) return alert(`Отсутствует Clipboard API`);
	navigator.clipboard.writeText(text)
		.catch(err => alert(err));
	return true;
}