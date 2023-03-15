import { writable } from 'svelte/store';
import { default as _json } from '../assets/drains.json';
import { createStore } from './baseStore';
export const drains = createStore('drains', _json);