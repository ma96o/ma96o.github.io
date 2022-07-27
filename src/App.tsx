import type { Component } from 'solid-js';

import icon from './assets/icon.png';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={icon} class={styles.icon} alt="icon" />
        <p>ma96o</p>
		<div class={styles.links}>
		<a
          class={styles.link}
          href="https://github.com/ma96o"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
		/
        <a
          class={styles.link}
          href="https://ma96o.github.io/gialog/"
          target="_blank"
          rel="noopener noreferrer"
        >
          dialy
        </a>
		</div>
      </header>
    </div>
  );
};

export default App;
