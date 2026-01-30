import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Loading...'
    };
  }

  render() {
    return (
      <div>
        <h2>Admin page</h2>
        {/* State message sẽ được cập nhật sau khi axios lấy dữ liệu thành công */}
        <p>{this.state.message}</p>
      </div>
    );
  }

  componentDidMount() {
    // SỬA TẠI ĐÂY: Thêm đầy đủ địa chỉ URL của Server (ví dụ cổng 5000)
    // Nếu server của bạn chạy cổng khác, hãy thay đổi số 5000 tương ứng
    axios.get('http://localhost:3001/hello')
      .then((res) => {
        const result = res.data;
        // Cập nhật state với dữ liệu nhận được từ server
        this.setState({ message: 'Hello from server!' });
      })
      .catch((error) => {
        // Xử lý trường hợp không kết nối được với server
        console.error("Lỗi kết nối:", error);
        this.setState({ message: "Lỗi: Không thể kết nối đến Server!" });
      });
  }
}

export default App;