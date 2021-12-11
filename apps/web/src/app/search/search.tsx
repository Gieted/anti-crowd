import styles from './search.module.scss';
import Card from "../card/card";
import {SearchOutlined} from "@ant-design/icons";
import {FormEvent} from "react";

/* eslint-disable-next-line */
export interface SearchProps {
    onInput: (text: string) => void
    value?: string
}

export function Search(props: SearchProps) {
    function onInput(event: FormEvent<HTMLInputElement>) {
        props.onInput((event.target as HTMLInputElement).value)
    }

    return (
        <div className={styles.Search}>
            <Card className={styles.Card}>
                <SearchOutlined/>
                <input className={styles.textInput} placeholder='Szukaj' onInput={(event) => onInput(event)}
                       value={props.value}/>
            </Card>
        </div>
    );
}

export default Search;
