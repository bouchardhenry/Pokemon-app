import { Link } from "react-router-dom"
import styles from "./Error.module.css" 

const Error = () => {
    return (
        <div className={styles["error-div"]}>
            <code>The page you are looking for does not exist...</code>
            <br />
            <br />
            <Link to="/">&#x3c; Back to start</Link>
        </div>
    )
}

export default Error