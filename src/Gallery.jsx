import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url =
  "https://api.unsplash.com/search/photos?client_id=PHGXwEbxNBOIneyc54DMWU_DtnVYSPOW3oWF7kZ49ik&query=office";

function Gallery() {
  //! Sử dụng useQuery để lấy dữ liệu từ API
  const response = useQuery({
    queryKey: ["images"], //! Tên khóa để xác định query này
    queryFn: async () => {
      const result = await axios.get(url);

      return result.data;
    },
  });
  console.log(response);
  return <div></div>;
}

export default Gallery;
