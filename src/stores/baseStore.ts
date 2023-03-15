import { toast } from "../help/toast";
import { get, writable } from "svelte/store";

export function createStore<T>(name: string, json: T){

	const store = writable<T>(json);
	const { subscribe, set, update } = store;

	const toJSON = () => {
		const res = get(store);
		return JSON.stringify(res, null, '\t');
	}

	const fromJSON = () => {
		set(json);
		return true;
	}

	const toLocalStorage = () => {
		const text = toJSON();
		console.log({text});
		localStorage.setItem(name, text);
		toast('Всё норм', `Данные сохранены в память браузера`);
	}

	const fromLocalStorage = () => {
		const text = localStorage.getItem(name);
		if (!text) {
			toast(`Ошибка`, `Отсутствуют данные в памяти браузера`);
			return false;
		}
		const data = JSON.parse(text) as T;
		set(data);
		toast(`Всё норм`, `Данные загружены из памяти браузера`);
		return true;
	}

	const download = () => {
		const text = toJSON();
		const fileName = `${name}.json`;
		const element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', fileName);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
		return true;
	}

	const copy = () => {
		if (!navigator.clipboard) return alert(`Отсутствует Clipboard API`);
		const text = toJSON();
		navigator.clipboard.writeText(text)
			.catch(err => alert(err));
		return true;
	}

	return ({
		subscribe,
		set,
		update,
		toJSON,
		fromJSON,
		toLocalStorage,
		fromLocalStorage,
		download,
		copy,
	});
}