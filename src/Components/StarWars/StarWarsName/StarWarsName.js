import styles from './StarWarsName.module.css'


const StarWarsName = (props) => {
    console.log('props:', props)
    return (
        <div>
            <p className={styles.name}>
                {props.name}
            </p>
        </div>
    );
}

export default StarWarsName