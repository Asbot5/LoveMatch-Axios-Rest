const baseUrl = 'https://love-calculator.p.rapidapi.com/getPercentage'

Vue.createApp({
    data() {
        return {
            match: null,
            yourName: '',
            theirName: '',
            optionsTitle: {
                method: 'GET',
                params: {sname: '', fname: ''},
                headers: {
                  'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
                  'x-rapidapi-key': '64e16de6c2msh9a3da104b811e56p1f0a32jsne0c66f19ec5e'
                }
            },
        }
    },
    methods: {
        async GetMatch() {
            console.log(this.optionsTitle)
            this.optionsTitle.params.sname = this.yourName
            this.optionsTitle.params.fname = this.theirName
            const response = await axios.get(baseUrl, this.optionsTitle)
            this.match = await response.data
            console.log(response.data)
        }
    }
}).mount("#app")