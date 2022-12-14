import React from "react";
import styles from "./styles.module.css";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer () {
    return(
        <footer className={styles.footer}>

            <div>
                <h4>Desenvolvido por:</h4>
                <p>Antonio Vicente, 
                   Nahomi Martinez, 
                   Mirinda Fernando e
                   Sarah Hernandez</p>
            </div>

            <div className={styles.direito}>
            <p className={styles.copy_right}><span className={styles.span}>Educação</span> &copy; 2022. Todos os direitos reservados.</p>
            </div>
 
            <div>
                <p className={styles.companhe}>Siga-nos:</p>
                
                <ul className={styles.social_list}>
                    <li className={styles.item_list}>
                        <FaGithub className={styles.imag}/>
                    </li>
                    <li className={styles.item_list}>
                        <FaFacebook className={styles.imag}/>
                    </li>
                    <li className={styles.item_list}>
                        <FaInstagram className={styles.imag}/>
                    </li>
                    <li className={styles.item_list}>
                        <FaLinkedin className={styles.imag}/>
                    </li>
                </ul>
           </div>

        </footer>
    );
}
export default Footer;