import styles from '../../styles/components/Home/Header.module.css';

function Header(){

    return(
        <div>
            <div className={styles.introDiv}>
                <div className={styles.holderImg}>
                    <div className={styles.profileImg}></div>
                </div>
                <div className={"oswald-geral " + styles.introText}>
                    Possuo conhecimento em áreas da tecnologia voltadas ao desenvolvimento de <strong>softwares</strong>, 
                    desenvolvimento de <strong>sites</strong> e <strong>design gráfico</strong>. Em 2014 tive a oportunidade de estudar na
                    escola SAGA, na qual fiz o curso Start e aprendi muito sobre design gráfico, 
                    principalmente sobre <strong>audiovisual</strong>, edição de imagens e arte vetorial. Atualmente
                    cursando <strong>Ciência da Computação</strong> na <strong>Universidade São Judas Tadeu</strong>, estou em contato com o
                    mundo da programação desde 2018, quando iniciei o curso <strong>técnico de Informática</strong> juntamente 
                    ao Ensino Médio no Colégio <strong>ENIAC</strong>.
                </div>
            </div>
        </div>
    )

}

export default Header;