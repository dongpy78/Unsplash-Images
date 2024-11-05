import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url =
  "https://api.unsplash.com/search/photos?client_id=PHGXwEbxNBOIneyc54DMWU_DtnVYSPOW3oWF7kZ49ik&";

function Gallery() {
  const { searchTerm } = useGlobalContext();

  //! Sử dụng useQuery để lấy dữ liệu từ API
  const response = useQuery({
    queryKey: ["images", searchTerm], //! Tên khóa để xác định query này
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);

      return result.data;
    },
  });

  //! isLoading là một thuộc tính do ReactQuery cung cấp
  if (response.isLoading) {
    //! Kiểm tra trạng thái Loading
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    //! Kiểm tra nếu có lỗi xảy ra
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }
  const results = response.data.results; //! .results là mảng API trả về
  console.log(results);
  if (results.length < 1) {
    //! Kiểm tra nếu không có kết quả nào
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  //! Trả về kết quả, hiển thị hình ảnh
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
}

export default Gallery;
