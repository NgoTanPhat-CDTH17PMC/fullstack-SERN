## Bắt đầu với Express Framework

🐱‍🏍Các câu lệnh mình sử dụng trong video này: (lưu ý sử dụng Node.js Vesion 14.7)
👉 npm install --save body-parser@1.19.0 dotenv@8.2.0 ejs@3.1.5 express@4.17.1

👉 npm install --save-dev @babel/core@7.12.10 @babel/preset-env@7.12.10 @babel/node@7.12.10 nodemon@2.0.7

👍 Chạy project === câu lệnh này: npm start

- .env: cau hinh cac tham so moi truong
- .babelrc: cau hinh cho trinh compiler
- bodyParser: ho tro lay tham so ma Client truyen len

## Mo hinh MVC

## CLI: Command Line Interface

- Cung cap cau lenh de thao tac voi giao dien

## Tạo tables, thêm dữ liệu database với Sequelize CLI - Cấu hình database cho Node.JS

👉 1. Cài đặt các thư viện: sequlize-cli, sequelize và mysql2
npm install --save-dev sequelize-cli@6.2.0
npm install --save mysql2@2.2.5
npm install --save sequelize@6.6.2

👉 2. Thêm file .sequelizerc tại thư mục root
Nội dung file .sequelizerc
const path = require('path');
module.exports = {
'config': path.resolve('./src/config', 'config.json'),
'migrations-path': path.resolve('./src', 'migrations'),
'models-path': path.resolve('./src', 'models'),
'seeders-path': path.resolve('./src', 'seeders')
}

👉 Tại thư mục root, sử dụng câu lệnh: node_modules/.bin/sequelize init

👉 3. Tạo model:
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

👉 4: Tạo migrations:
npx sequelize-cli db:migrate

👉5. Tạo Seeder: npx sequelize-cli seed:generate --name demo-user

🐱‍🚀 Tài liệu tham khảo sử dụng trong video:
https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbkRhUjdGdWtNYkhpUWNhSThLeDhmMjhfMjlZd3xBQ3Jtc0trWlN3M0NUaHlYcjBCQUxpc1g2Z0xIay1PODN3dXdiM2ZqVUhsV1FpRVdEanZrb1k0MV9MYzV1SFNBdEVUS0lMMTZYWDZNSDlTLXRQQzYzZzk5a2pISTRzRng0SW16NTJIRW9WUGt6SjU4LVZkQ3VQaw&q=https%3A%2F%2Fsequelize.org%2Fmaster%2Fmanual%2Fmigrations.html%23installing-the-cli&v=Wtt5uC4HWAA

https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbjFFeVo0NVczRldZUTMxT3I2Q2c0WFpoaUhnd3xBQ3Jtc0tuZ09veE5FY0xWWmg1Z2xqSE9YbWQ3MkV3ejliNUdHeFh5Z3VNRUk1LThwUEd0SXJMTmJzUXpjRjB4Q0x1WWItN0VsYWQ2ZkRXN3F6LURvQXJlMDY0UEZFYnZhV3N5Z2NqdEJPSzVsVklNTEtWaTc4WQ&q=https%3A%2F%2Fmherman.org%2Fblog%2Fnode-postgres-sequelize%2F&v=Wtt5uC4HWAA
