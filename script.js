/* Bài 1
    Đầu vào:
    Lương 1 ngày = 100.000
    Số ngày làm nhận giá trị từ người dùng
    Xử lý:
    Tạo công thức tính lương = số ngày làm * lương một ngày
    Đầu ra:
    Trả về tổng số tiền lương dựa trên ngày làm
*/

let salaryBtn = document.getElementById("salaryBtn");
let salaryInfo = document.getElementById("salaryInfo");
let salaryPerDay = 100000;
salaryBtn.onclick = function () {
  let workDays = document.getElementById("workDays").value * 1;
  let totalSalary = workDays * salaryPerDay;
  salaryInfo.innerHTML = `Tổng tiền lương là ${totalSalary}`;
};

/* Bài 2
    Đầu vào:
    Nhận 5 số từ người dùng qua 5 input
    Xử lý:
    Tạo công thức tính giá trị trung bình
    Đầu ra:
    Trả về giá trị trung bình
*/

let averageBtn = document.getElementById("avgBtn");
let averageInfo = document.getElementById("avgInfo");
averageBtn.onclick = function () {
  let num1 = document.getElementById("number-1").value * 1;
  let num2 = document.getElementById("number-2").value * 1;
  let num3 = document.getElementById("number-3").value * 1;
  let num4 = document.getElementById("number-4").value * 1;
  let num5 = document.getElementById("number-5").value * 1;

  let averageResult = (num1 + num2 + num3 + num4 + num5) / 5;

  averageInfo.innerHTML = `Giá trị trung bình của 5 số là: ${averageResult}`;
};

/* Bài 3
    Đầu vào:
    Nhận vào giá 1 USD = 23.500 VND
    Nhận số tiền USD từ người dùng
    Xử lý:
    Tạo công thức quy đổi tiền USD ra tiền VND theo số lượng
    Đầu vào:
    Trả về tổng tiền VND theo số lượng USD
*/

let USDConverterBtn = document.getElementById("USDConverterBtn");
let VNDInfo = document.getElementById("VNDInfo");
let USDperVND = 23500;
USDConverterBtn.onclick = function () {
  let USDInput = document.getElementById("USD-quantity").value * 1;

  let converterFormula = USDperVND * USDInput;

  VNDInfo.innerHTML = `Tổng số tiền VND theo số lượng USD là: ${converterFormula}`;
};

/* Bài 4
    Đầu vào:
    Nhận vào chiều dài vào chiều rộng của HCN từ người dùng
    Xử lý:
    Tạo công thức tính chu vi và diện tích, áp dụng giá trị của người dùng vào công thức
    Đầu ra:
    Trả về kết quả chu vi và diện tích
*/

let rectangleBtn = document.getElementById("rectangleBtn");
let acreageInfo = document.getElementById("acreageInfo");
let perimeterInfo = document.getElementById("perimeterInfo");
rectangleBtn.onclick = function () {
  let recWidth = document.getElementById("rectangle-width").value * 1;
  let recHeight = document.getElementById("rectangle-height").value * 1;

  let recAcreage = recWidth * recHeight;
  let recPerimeter = (recWidth + recHeight) * 2;

  acreageInfo.innerHTML = `Diện tích hình chữ nhật là: ${recAcreage}`;
  perimeterInfo.innerHTML = `Chu vi hình chữ nhật là: ${recPerimeter}`;
};

/* Bài 5
    Đầu vào:
    Nhận vào 1 số có 2 chữ số
    Xử lý:
    Lấy số hàng đơn vị, số hàng chục
    Cộng hai giá trị vừa lấy được với nhau
    Đầu ra:
    Trả về kết quả của 2 ký số
*/

let sumBtn = document.getElementById("sumBtn");
let numberInfo = document.getElementById("numberInfo");
sumBtn.onclick = function () {
  let number = document.getElementById("number").value * 1;

  let unitsDigit = number % 10;
  let tensDigit = Math.floor(number / 10);

  let sumDigit = tensDigit + unitsDigit;

  numberInfo.innerHTML = `Tổng của 2 ký số là: ${tensDigit} + ${unitsDigit} = ${sumDigit}`;
};
