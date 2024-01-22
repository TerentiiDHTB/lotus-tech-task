import {makeAutoObservable, runInAction} from "mobx";

import {PersonInfoT} from "@/shared/types/PersonInfoT.ts";
import {searchPersonByName} from "@/shared/api/searchPersonByName.ts";

class PersonsStore{
    private persons: PersonInfoT[] = []
    private _isPending: boolean = false

    get isPending(): boolean {return this._isPending}

    getAllPersons = (): PersonInfoT[] => {return this.persons}

    searchPersonsByName = async (name: string): Promise<void> => {
        this._isPending = true
            searchPersonByName(name)
                .then(res => {
                    runInAction(()=>{
                        this.persons = []

                        //можно использовать спред оператор, но тогда надо следить за тем, что вернет бэк, иначе вернет лишние поля
                        //{...i}
                        //по факту весь цикл большой костыль, из-за того, что используется стороннее апи
                        for (const i of res){
                            this.persons.push({
                                name: i.name,
                                height: i.height,
                                mass: i.mass,
                                hair_color: i.hair_color,
                                skin_color: i.skin_color,
                                eye_color: i.eye_color,
                                birth_year: i.birth_year,
                                gender: i.gender,
                                url: i.url
                            })
                        }

                        this._isPending = false
                    })
                })
                .catch(() => {
                    runInAction(() => {
                        this.persons = [];
                        this._isPending = false
                    })
                })
    }

    constructor() {
        makeAutoObservable(this, {}, {deep: true})
    }
}

export const personsStore = new PersonsStore()