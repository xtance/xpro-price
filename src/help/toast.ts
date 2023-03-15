import iziToast from 'izitoast';

export function toast(title: string, message: string = ''){
	console.log(title, message);
	iziToast.show({
		title,
		message,
		position: 'bottomCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
	});
}