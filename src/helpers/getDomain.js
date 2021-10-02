const getDomain = (url) => {
   return url.match(/[a-zA-Z]+.(org|com|ru|net)/)[0];
};

export default getDomain;
