import { HTMLInputTypeAttribute } from 'react'
import styles from './InputFatec.module.css'

interface Props {
    placeholder: string | undefined
    type: HTMLInputTypeAttribute | undefined
    value: string | undefined
}

export default function InputFatec({placeholder, type, value}: Props) {
    return (
        <input className={styles.inputFatec}
        placeholder={placeholder}
        type={type}
        defaultValue={value} />
    )
}
