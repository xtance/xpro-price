import { writable } from 'svelte/store';
import { default as _json } from '../assets/categories.json';
export const categories = writable(_json);