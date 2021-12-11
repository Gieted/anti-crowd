import styles from './app.module.scss'
import Recent from "./recent/recent";
import Search from "./search/search";
import {CSSTransition} from 'react-transition-group';
import PlaceView from "./place-view/place-view";
import {useState} from "react";
import {Place} from "./place";

export function App() {
    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
    const [showPlaceView, setShowPlaceView] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState<string | undefined>(undefined);

    return (
        <div className={styles.App}>
            <Search onInput={setSearchPhrase} value={searchPhrase}/>
            <Recent onPlaceClicked={(place) => {
                setSelectedPlace(place)
                setShowPlaceView(true)
            }} searchPhrase={searchPhrase}
            />

            <CSSTransition
                in={showPlaceView}
                classNames={{
                    enter: styles.placeViewEnter,
                    enterActive: styles.placeViewEnterActive,
                    exitActive: styles.placeViewExitActive
                }}
                timeout={500}
                onExited={() => setSelectedPlace(null)}
            >
                {selectedPlace ? <PlaceView place={selectedPlace!}
                                            className={styles.PlaceView}
                                            onExit={() => setShowPlaceView(false)}/> : <></>}
            </CSSTransition>
        </div>
    );
}

export default App;
