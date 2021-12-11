import styles from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {
    children: JSX.Element[] | JSX.Element
    className?: string
}

export function Card(props: CardProps) {
  return (
    <div className={`${styles.Card} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Card;
