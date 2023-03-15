import { writable } from 'svelte/store';
import { default as _json } from '../assets/categories.json';
import { createStore } from './baseStore';
export const categories = createStore('categories', _json);