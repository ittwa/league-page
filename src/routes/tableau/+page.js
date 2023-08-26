import Tableau from './Tableau.svelte';

export function load({ page, fetch }) {
  return {
    status: 200,
    headers: { 'content-type': 'text/html' },
    body: Tableau,
  };
}
