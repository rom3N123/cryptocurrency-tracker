import { useHistory } from "react-router-dom";

const useCoinItem = () => {
   const history = useHistory();

   const handleCoinItemClick = (id) => history.push("/currencies/" + id);

   return {
      handleCoinItemClick,
   };
};

export default useCoinItem;
