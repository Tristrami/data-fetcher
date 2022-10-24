const apiRequest = async (url = "", optionObject = null) => {
  try {
    const response = await fetch(url, optionObject);
    if (!response.ok) throw Error("Request error!");
    return await response.json();
  } catch (err) {
    console.log(err.stack);
    return err.message;
  }
}

export default apiRequest;