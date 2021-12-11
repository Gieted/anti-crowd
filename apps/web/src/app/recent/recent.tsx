import styles from './recent.module.scss';
import Card from "../card/card";
import pakerHalaLogo from '../../assets/pakerhala.png'
import parkWodnyLogo from '../../assets/parkwodny.png'
import ministerstwoLogo from '../../assets/ministerstwo.jpg'

/* eslint-disable-next-line */
export interface RecentProps {
}


class Place {
    name: string
    type: string;
    picture: string;
    crowdPercentage: number;

    constructor(name: string, type: string, picture: string, crowdPercentage: number) {
        this.name = name;
        this.type = type;
        this.picture = picture;
        this.crowdPercentage = crowdPercentage;
    }
}

const data = [
    new Place('Paker Hala', 'siłownia', pakerHalaLogo, 15),
    new Place('Wodny Park', 'basen', parkWodnyLogo, 80),
    new Place('Ministerstwo', 'bar', ministerstwoLogo, 57),
]

export function Recent(props: RecentProps) {
    return (
        <div className={styles.Recent}>
            <Card>
                <div className={styles.title}>Ostatnie</div>
                <ul>
                    {data.map(place => (
                        <div className={styles.place}>
                            <img src={place.picture} className={styles.placePicture}/>
                            <div className={styles.placeTexts}>
                                <span>{place.type}</span>
                                <span>{place.name}</span>
                            </div>
                        </div>
                    ))}
                </ul>
            </Card>
        </div>
    );
}

export default Recent;
