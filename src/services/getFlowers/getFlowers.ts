import contentfulClient from "../../config/contentful";

const getFlowers = async () => {
    try {
        const response = await contentfulClient.getEntries({
            content_type: 'products' 
        });

        console.log(response.items);
        console.log(response.items[0]);
        return response.items;
    } catch (error) {
        console.log(error);
    }
}

export default getFlowers;