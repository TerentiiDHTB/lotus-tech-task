import styles from "./ui.module.scss";

import {PersonInfoT} from "@/entities/person";

import {observer} from "mobx-react-lite";

export const Person = observer((props: PersonInfoT) => {
    return (
        <a href={props.url} target="_blank" className={styles.personWrapper}>
            <span className={styles.personName}>name: {props.name}</span>
            <div className={styles.personInfoWrapper}>
                {Object.keys(props).slice(1,8).map((key) =>
                        <span key={key} className={styles.personInfo}>
                            {key}: {props[key as keyof PersonInfoT]}
                        </span>
                )}
            </div>
        </a>
    );
})
