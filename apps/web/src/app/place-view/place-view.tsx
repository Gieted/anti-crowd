import styles from './place-view.module.scss';
import {Place} from "../place";
import {LeftCircleOutlined} from "@ant-design/icons";
import {Button, IconButton, styled} from "@mui/material";
import Card from "../card/card";
import CrowdIcon from "../crowd-icon/crowd-icon";

/* eslint-disable-next-line */
export interface PlaceViewProps {
    place: Place
    className?: string
    onExit: () => void
}

const StyledButton = styled(IconButton)({
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '30px',
    height: '50px',
    width: '50px',
    color: 'black'
})

export function PlaceView(props: PlaceViewProps) {

    function indexToHour(index: number): string {
        switch (index) {
            case 0:
                return 'TERAZ'
            case 1:
                return '20:00'
            case 2:
                return '21:00'
            case 3:
                return '22:00'
            default:
                return '23:00'
        }
    }
    
    return (
        <div className={`${styles.PlaceView} ${props.className}`}>
            <StyledButton className={styles.exit} onClick={props.onExit}>
                <LeftCircleOutlined/>
            </StyledButton>
            <div className={styles.overview}>
                <img className={styles.placePicture} src={props.place.picture}/>
                <h1>{props.place.name}</h1>
                <div>
                    <Card className={styles.Card}>
                        <h1 className={styles.title}>Zatłoczenie</h1>
                        <ul className={styles.crowds}>
                            {props.place.crowdPercentage.map((crowdPercentage, index) => (
                                <div className={styles.crowd}>
                                    <CrowdIcon percentage={crowdPercentage}/>
                                    <span className={styles.time}>{indexToHour(index)}</span>
                                </div>
                            ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default PlaceView;
