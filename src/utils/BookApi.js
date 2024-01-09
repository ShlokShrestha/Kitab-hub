export const getAllBook = async () => {
  const url = `https://books-api7.p.rapidapi.com/books?p=1`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "books-api7.p.rapidapi.com",
    },
  };
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json(); // Wait for the JSON parsing to complete
    return data;
  } catch (error) {
    console.error(error);
  }
};
