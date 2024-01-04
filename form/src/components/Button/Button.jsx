import styles from "./Button.module.css"

function Button({isOutline, icon, text}){


    // const {isOutline, icon, text} = props;
    return(

        <div className={styles.box}>
            
              <button className={isOutline ? styles.outline_btn : styles.primary_btn}> 
            {icon}
            {text}
            </button>
            
            </div>
              )
}


export default Button;