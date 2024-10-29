import React from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage: React.FC = (): JSX.Element => (
  <p className={styles.errorMessage}>
    Something went wrong. Please try again.
  </p>
);

export default ErrorMessage;
