import styles from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {
    children: JSX.Element[]
}

export function Card(props: CardProps) {
  return (
    <div className={styles.Card}>
      <h1>{props.children}</h1>
    </div>
  );
}

export default Card;
