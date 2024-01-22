import $api from "@/shared/api/axios_config.ts";

export const searchPersonByName = async (name: string)=> {
    return Promise.resolve($api.get(`?search=${name}`)
        .then(res => {
            return res.data.results
        })
        .catch(err => console.log(err)))
}