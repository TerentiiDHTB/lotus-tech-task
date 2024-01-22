import styles from "./ui.module.scss";

import {PersonSearchingForm} from "@/widgets/personSearchingForm/";
import {observer} from "mobx-react-lite";

export const Main = observer(() => {
    return (
        <div className={styles.mainPageWrapper}>
            <PersonSearchingForm/>
        </div>
    );
})
