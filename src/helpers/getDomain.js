const getDomain = (url) => {
   return url.match(
      /\b(?!(?:https?|ftps?|http?):\/\/)(?!www\.)(?:[0-9A-Za-z][0-9A-Za-z-]{0,62})(?:\.(?:[0-9A-Za-z][0-9A-Za-z-]{0,62}))*(?:\.?|\b)/
   )[0];
};

export default getDomain;
