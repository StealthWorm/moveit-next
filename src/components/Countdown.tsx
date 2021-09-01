import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); //padStart preenche no começo, no caso a condição é se a var não tiver 2 caracteres
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split(''); //padStart preenche no começo, no caso a condição é se a var não tiver 2 caracteres

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {/* usar o && numa condição sem o else faz com que apenas o if seja executado, ideal para casos onde o else retornaria nulo */}
            {/* { hasFinished && ( */}
            { hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo Encerrado...
                </button>
            ) : (
                    <>
                        {/* sempre que oo retorno for mais de uma coisa coloca parenteses */}
                        { isActive ? (
                            <button
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}
                            >
                                Abandonar ciclo
                            </button>
                        ) : (
                                <button
                                    type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountdown}
                                >
                                    Inciar um ciclo
                                </button>
                            )}
                    </>
                )}

        </div>
    );
}