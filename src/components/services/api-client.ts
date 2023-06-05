import axios from 'axios'


export default axios.create({baseURL: 'https://api.rawg.io/api',params:{
    key:'b40305d500de43e6ba78bfbc888877a1'
}})


