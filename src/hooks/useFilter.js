const { useDispatch } = require("react-redux");
const { SET_FILTER } = require("redux/slices/filter");

const useFilter = () => {
   const dispatch = useDispatch();

   const setFilter = (filterName) => dispatch(SET_FILTER(filterName));

   return {
      setFilter,
   };
};

export default useFilter;
