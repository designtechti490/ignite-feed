import { ImgHTMLAttributes } from "react"
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

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}
export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    )
}
