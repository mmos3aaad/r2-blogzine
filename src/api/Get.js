import axios from "axios";
async function GetUser() {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      return response.data.products;
    } catch (error) {
      console.error(error);
    }
  }
  export default GetUser;