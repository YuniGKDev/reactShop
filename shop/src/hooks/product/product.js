import {useQuery} from '@tanstack/react-query';
import api from '../../utils/api';

const getProductList = ({query}) => {
    return api.get("/product", {params : {...query}});    
}

export const useGetProductListQuery = (query) => {
    return useQuery({
        queryKey: ['productList', {query}] 
         , queryFn: () => getProductList({query})
         , select: (result) => result.data.data
     });
}