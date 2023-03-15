import { writable } from 'svelte/store';
import { default as _json } from '../assets/faucets.json';
import { createStore } from './baseStore';
export const faucets = createStore('faucets', _json);