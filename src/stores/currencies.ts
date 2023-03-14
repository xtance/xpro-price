import { writable } from 'svelte/store';
import { default as _json } from '../assets/currencies.json';
export const currencies = writable(_json);