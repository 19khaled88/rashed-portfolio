import React from "react";
import styles from '../components/Button.module.css';

export default function Button({children}:{children:React.ReactNode}){
    return <button className={styles.button}>{children}</button>
}