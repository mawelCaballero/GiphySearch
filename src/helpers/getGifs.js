
export const getGifs = async (category) => {
    const apiKey = 'h9TddSeya32DAbPCNhSJbvQ50xqfR32p';
    const searchLimit = '10';
    const url = `https://api.giphy.com/v1/stickers/search?api_key=${ encodeURI(apiKey)}&limit=${searchLimit}&q=${category}`;

    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(img =>
    ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url

    }));
    return gifs;
};