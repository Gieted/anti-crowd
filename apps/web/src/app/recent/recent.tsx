import styles from './recent.module.scss';
import Card from "../card/card";
import pakerHalaLogo from '../../assets/pakerhala.png'
import parkWodnyLogo from '../../assets/parkwodny.png'
import ministerstwoLogo from '../../assets/ministerstwo.jpg'
import Button from '@mui/material/Button';
import {styled} from "@mui/material";
import {Place} from "../place";
import CrowdIcon from "../crowd-icon/crowd-icon";

/* eslint-disable-next-line */
export interface RecentProps {
    onPlaceClicked: (place: Place) => void
    searchPhrase: string | undefined
}

const data = [
    new Place('PAKER HALA', 'siłownia', pakerHalaLogo, [
        15,
        30,
        56,
        80,
        70,
        50
    ]),
    new Place('Wodny Park', 'basen', parkWodnyLogo, [
        45,
        50,
        60,
        50,
        50,
        40
    ]),
    new Place('Ministerstwo', 'bar', ministerstwoLogo, [
        15,
        20,
        25,
        30,
        90,
        97
    ]),
]

const StyledButton = styled(Button)({
    lineHeight: 'initial',
    color: 'initial',
    textAlign: 'initial',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.04)'
    }
})

export function Recent(props: RecentProps) {
    const searchPhrase = props.searchPhrase ? props.searchPhrase : ''
    
    return (
        <div className={styles.Recent}>
            <Card>
                <div className={styles.title}>Miejsca</div>
                <ul>
                    {data.filter(it => it.name.toLowerCase().includes(searchPhrase.toLowerCase())).map(place => (
                        <div className={styles.place}>
                            <StyledButton className={styles.button} onClick={() => props.onPlaceClicked(place)}>
                                <img src={place.picture} className={styles.placePicture}/>
                                <div className={styles.placeTexts}>
                                    <span className={styles.placeType}>{place.type}</span>
                                    <span className={styles.placeName}>{place.name}</span>
                                </div>
                                <CrowdIcon percentage={place.crowdPercentage[0]} className={styles.crowdIcon}/>
                            </StyledButton>
                        </div>
                    ))}
                </ul>
            </Card>
        </div>
    );
}

export default Recent;
