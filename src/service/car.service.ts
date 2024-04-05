import axios from "axios";

export class CarsMarck {
    private MarckUrl = 'http://localhost:1337/api/marck-cars?populate=MarckImg';
    async getMarck() {
        const { data } = await axios.get(this.MarckUrl);
        return data;
    }
}
export class SeriosMarck {
    private marckUrl = 'http://localhost:1337/api/marck-cars'
    async getSerios(marckId: number) {
        const urlSerios = `${this.marckUrl}/${marckId}?populate=MarckModel,MarckModel.Models.Img`;
        const { data } = await axios.get(urlSerios);
        return data;
    }
}

export class Account {
    private accountUrl = 'http://localhost:1337/api/accounts';
    saveAccount(account:any){
        return axios.post(this.accountUrl, account)
    }
}


export const Marck = new CarsMarck();
export const CarSerios = new SeriosMarck();
export const NewAccount = new Account();