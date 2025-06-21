import contentfulClient from "../../config/contentful";
import type { GetFlower } from "../../types/functions.types";

const getFlower = async (props: GetFlower) => {
    try {
        const response = await contentfulClient.getEntry(`${props.id}`);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default getFlower;