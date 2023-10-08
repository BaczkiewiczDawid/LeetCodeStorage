import styles from "./tasksList.module.css";
import TasksList from "./TasksList";

const ArrayPrototypeLast = () => {
  const nums = [2, 6, 4];

  const last = (array) => {
    if (array.length === 0) {
      return -1;
    } else {
      return array[array.length - 1];
    }
  };

  const result = last(nums);

  return (
    <TasksList>
        <h1>Array Prototype Last</h1>
        <p className={styles.text}>Input: {nums.join(", ")}</p>
        <p className={styles.text}>Result: {result}</p>
    </TasksList>
  );
};

export default ArrayPrototypeLast;
