import styles from "./ui.module.scss";

import {observer} from "mobx-react-lite";

import {PersonSearchingForm} from "@/widgets/personSearchingForm/";

export const Main = observer(() => {
    return (
        <div className={styles.mainPageWrapper}>
            <PersonSearchingForm/>
        </div>
    );
})
