import axios from "axios";

async function getData(userID) {
    try {
        const { data: userInfo } = await axios.get("https://jsonplaceholder.typicode.com/users/"+userID);
        const { data: posts } = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + userID);
        return { userInfo, posts };
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export default getData;
