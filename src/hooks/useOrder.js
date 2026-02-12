import { useEffect, useState } from "react";
import { fetchOrderData } from "../services/OrderService";

const useOrder = (page, limit) => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    const orderList = async () => {
      try {
        setLoading(true);
        const response = await fetchOrderData(page, limit);

        setOrders(response.data);
        setTotal(response.total);

      } catch (err) {
        setError("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    orderList();

  }, [page, limit]);


  return { orders, loading, error, total };
};

export default useOrder;
