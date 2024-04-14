import styles from "./Avatar.module.css"

//Concept of JavaScript destructuring in function parameters
/**
 * default
 * const variableName = { 'key': 'value'}
 *
 * destructured
 * const {key} = variableName
 **/

// The destructuring concept was used in the function parameters as an example below
export function Avatar({ hasBorder = true, src }) {
    return (
        <img
            src={src}
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        />
    )
}
