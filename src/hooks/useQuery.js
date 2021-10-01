const { useLocation } = require("react-router-dom");

const useQuery = () => new URLSearchParams(useLocation().search);

export default useQuery;
