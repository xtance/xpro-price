import { writable } from 'svelte/store';
import { default as _json } from '../assets/drains.json';
export const drains = writable(_json);