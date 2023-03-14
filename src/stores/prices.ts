import { writable } from 'svelte/store';
import { default as _json } from '../assets/prices.json';
export const prices = writable(_json);