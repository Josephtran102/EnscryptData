const timestamp = 1709429400000; // timestamp cần chuyển đổi
const date = new Date(timestamp * 1); // Nhân 1000 nếu timestamp là giây, nếu là milliseconds thì không cần
const formattedDate = date.toLocaleString(); // Lấy ngày tháng dạng chuỗi

// console.log(formattedDate); // In ra ngày tháng dưới dạng chuỗi
console.log('\x1b[45m\x1b[37m', formattedDate); // In ra ngày tháng dưới dạng chuỗi với màu vàng



// // DateTime --> Timestamp
// const dateTimeString = '2024-03-03T08:30:00'; // Chuỗi ngày tháng giờ phút giây cần chuyển đổi
// const dateTime = new Date(dateTimeString); // Tạo đối tượng Date từ chuỗi ngày tháng

// // Chuyển đổi thành timestamp (milliseconds)
// const timestamp = dateTime.getTime();

// console.log('\x1b[45m\x1b[37m', timestamp); // In ra timestamp


