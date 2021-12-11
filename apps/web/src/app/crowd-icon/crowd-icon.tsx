import styles from './crowd-icon.module.scss';
import {ReactComponent as CrowdSvg} from "../../assets/i_groups_perspective_crowd.svg";

/* eslint-disable-next-line */
export interface CrowdIconProps {
    percentage: number;
    className?: string
}

export function CrowdIcon(props: CrowdIconProps) {
    function getColorClass(crowdPercentage: number) {
        return crowdPercentage < 70 ? (crowdPercentage < 50 ? styles.good : styles.medium) : styles.bad
    }

    return (
        <div className={`${getColorClass(props.percentage)} ${styles.crowdLabel} ${props.className}`}>
            <CrowdSvg/>
            <div className={styles.crowdPercentage}>{props.percentage}%</div>
        </div>
    );
}

export default CrowdIcon;
