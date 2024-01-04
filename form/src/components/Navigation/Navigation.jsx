import styles from "./Navigation.module.css"


function Navigation(){
    return(
<> 

<nav>
    <div className={styles.logo}>
<img src="images/Frame 2 1.png" alt="logo" />
</div>

<ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
</ul>

</nav>
</>
    )
}


export default Navigation