import { loadMicroApp } from 'qiankun';
import React from 'react';

import styles from './index.less';

export default class App extends React.Component {
  containerRef = React.createRef();
  microApp = null;

  componentDidMount() {
    this.microApp = loadMicroApp({
      name: 'app1',
      entry: 'http://127.0.0.1:8081',
      container: this.containerRef.current,
      props: { brand: 'qiankun' },
    });
  }

  componentWillUnmount() {
    this.microApp.unmount();
  }

  componentDidUpdate() {
    this.microApp.update({ name: 'kuitos' });
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>Page index</h1>
        <div ref={this.containerRef}></div>
      </div>
    );
  }
}
