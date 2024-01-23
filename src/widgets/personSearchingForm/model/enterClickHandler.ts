import React from "react";
import {personsStore} from "@/shared/stores/personsStore.ts";

export const enterClickHandler = (event: React.KeyboardEvent<HTMLDivElement>, searchRequest: string): void => {
    if (!personsStore.isPending && event.code === "Enter"){
        personsStore.searchPersonsByName(searchRequest)
    }
}