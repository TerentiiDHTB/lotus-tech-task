import styles from "./ui.module.scss";

import {useState} from "react";
import {observer} from "mobx-react-lite";

import {personsStore} from "@/shared/stores/personsStore.ts";

import {Person} from "@/entities/person";
import {enterClickHandler} from "@/widgets/personSearchingForm/model/enterClickHandler.ts";

//вообще, поиск можно было выделить как часть бизнес логики, и вытащить в папку features
const PersonSearchInput = observer(() => {
    const [searchRequest, setSearchRequest] = useState<string>("")

    return (
        <div className={styles.nameInputField} onKeyDown={(event) => enterClickHandler(event, searchRequest)}>
            <input
                value={searchRequest}
                onChange={event => {
                    setSearchRequest(event.target.value)
                }}
                placeholder="введите имя персонажа"
            />

            <button
                onClick={() => {personsStore.searchPersonsByName(searchRequest)}}
                disabled={personsStore.isPending}
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
