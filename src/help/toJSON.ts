import { get, type Writable } from "svelte/store";

export function toJSON<T>(store: Writable<T>){
	const res = get(store);
	return JSON.stringify(res, null, '\t');
}