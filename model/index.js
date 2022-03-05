const mongoose = require('mongoose');

// 몽구스 연결 함수
const mongoConnect = () => {
    if (process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', true); // 몽고 쿼리가 콘솔에서 뜨게 한다.
    }
    mongoose.connect(process.env.DB_URL, 
      (error) => {
        if (error) {
          console.log('Connection Error with MongoDB', error);
        } else {
          console.log('Success to connect MongoDB');
        }
      }
    )
};

// 몽구스 커넥션에 이벤트 리스너를 달게 해준다. 에러 발생 시 에러 내용을 기록하고, 연결 종료 시 재연결을 시도한다.
mongoose.connection.on('error', (error) => {
  console.error('몽고디비 연결 에러', error);
});

mongoose.connection.on('disconnected', () => {
  console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
  mongoConnect(); // 연결 재시도
});

module.exports = mongoConnect;