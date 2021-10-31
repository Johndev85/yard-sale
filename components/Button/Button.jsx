//styles
import styles from './button.module.scss'

const Button = ({ title, type, btn, url }) => {
  return (
    <div className={styles.container}>
      {btn ? <button type={type}>{title}</button> : <a href={url}>{title}</a>}
    </div>
  )
}

export default Button
