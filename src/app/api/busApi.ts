export const busApi = {
  getCheonanBusInfo: async () => {
    const response = await fetch("https://gorae.my:8090/cheonan/savedbusinfo");
    const data = await response.json()
    console.log(JSON.stringify(data));
    return data;
  },
  getJukjeonBusInfo: async () => {
    const response = await fetch("https://gorae.my:8090/jukjeon/savedbusinfo");
    const data = await response.json()
    console.log(JSON.stringify(data));
    return data;
  },
};
