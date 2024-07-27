import { html } from "lit-html";
import styles from './nav.scss';
console.log('styles: ', styles);

export const guestNavTemplate = () => html`
<div class=${styles['container']}>
    <p class=${styles['title']}>Food Blog</p>
</div>
`;