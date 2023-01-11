import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        currencies: {},
    }),

    actions: {
        getCurrencies() {
            fetch('https://www.cbr-xml-daily.ru/daily_json.js')
                .then((response) => response.json())
                .then(({ Valute }) => {
                    this.currencies = Valute
                })
                .catch((error) => console.log(error));
        },
    },
})
