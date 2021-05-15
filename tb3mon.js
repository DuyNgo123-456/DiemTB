/*
-b1:Đọc hiểu bài toán -> xác định input,ouput
-b2:input (Điểm ba môn), output (Trung bình điểm ba môn), thuật toán Điểm TB = ((Toán)+(AV)+(Văn))/3
-b3:vẽ lưu đồ cho bài toán
-b4:Code theo lưu đồ
*/
let Toan=+prompt('Nhap diem mon Toan:');
let AV=+prompt('Nhap diem mon AV:');
let Van=+prompt('Nhap diem mon Van:');
DiemTB=((Toan)+(AV)+(Van))/3;
alert ('Diem trung binh 3 mon la:' + DiemTB);
