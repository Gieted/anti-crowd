import styles from './search.module.scss';
import Card from "../card/card";
import {SearchOutlined} from "@ant-design/icons";

/* eslint-disable-next-line */
export interface SearchProps {
    // onInput: (text: string) => void
}

export function Search(props: SearchProps) {
    return (
        <div className={styles.Search}>
            <Card className={styles.Card}>
                <SearchOutlined />
                <input className={styles.textInput} placeholder='Szukaj'/>
            </Card>
        </div>
    );
}

export default Search;
