import http from '../../helper/http';
import qs from 'qs';

export default {
  postProductRating: (token, id_product, data) => ({
    type: 'POST_PRODUCT_RATING',
    payload: http().post(
      `/customer/rating/product/${id_product}`,
      qs.stringify(data),
    ),
  }),
};
