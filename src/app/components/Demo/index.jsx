import React from 'react';
import { connect } from 'react-redux';
import styles from './style.css';

class Demo extends React.Component {
    render() {
        return (
            <div className={styles.demo}> React + Redux Boilerplate </div>
        );
    }
}

export default connect()(Demo);
