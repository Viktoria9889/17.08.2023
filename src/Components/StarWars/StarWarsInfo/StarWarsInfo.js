import styles from './StarWarsInfo.module.css'


const StarWarsInfo = (props) => {
    console.log('props:', props)
    return (
        <div className={styles.info}>
            <p>Gender: {props.personlInfo.gender}</p>
            <p>Birth Year: {props.personlInfo.birth_year}</p>
            <p>Height: {props.personlInfo.height}</p>
            <p>Hair Color: {props.personlInfo.hair_color}</p>
            <p>Skin Color: {props.personlInfo.skin_color}</p>
            <p>Eye Color: {props.personlInfo.eye_color}</p>
        </div>
    );
}

export default StarWarsInfo