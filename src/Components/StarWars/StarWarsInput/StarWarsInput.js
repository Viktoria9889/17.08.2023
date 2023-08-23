import styles from './StarWarsInput.module.css'


const StarWarsInput = (props) => {
    console.log('props:', props)
    return (
        <p className={styles.input}>
            <input
                type='number'
                placeholder='Введіть id персонажа'
                onChange={
                    (ev) => props.idCharakter(ev.target.value)
                }
            />
        </p>
    );
}

export default StarWarsInput