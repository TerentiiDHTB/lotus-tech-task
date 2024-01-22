import styles from "./ui.module.scss";

import {useState} from "react";
import {observer} from "mobx-react-lite";

import {personsStore} from "@/shared/stores/personsStore.ts";

import {Person} from "@/entities/person";

const PersonSearchInput = observer(() => {
    const [searchRequest, setSearchRequest] = useState<string>("")

    return (
        <div className={styles.nameInputField}>
            <input
                value={searchRequest}
                onChange={event => {
                    setSearchRequest(event.target.value)
                }}
                placeholder="введите имя персонажа"
            />

            <button
                onClick={() => {personsStore.searchPersonsByName(searchRequest)}}
            >
                🔎
            </button>
        </div>
    )
})

export const PersonSearchingForm = observer(() => {
    return (
        <div className={styles.personSearchingFormWrapper}>
            <PersonSearchInput/>

            <div className={styles.searchResultWrapper}>
                {personsStore.isPending
                    ? <div>запрос обрабатывается...</div>
                    : personsStore.getAllPersons().map(personsInfo =>
                        <Person key={personsInfo.name} {...personsInfo}/>
                    )
                }
            </div>
        </div>
    );
})
