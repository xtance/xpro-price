import { writable } from 'svelte/store';
import { default as _json } from '../assets/faucets.json';
export const faucets = writable(_json);