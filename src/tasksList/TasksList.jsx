import styles from './tasksList.module.css'

const TasksList = ({ children }) => {
  return (
    <div className={styles.box}>
        {children}
    </div>
  )
}

export default TasksList