var ten = "";
var dob = "";
var cccd = "";
var diachi = "";

function layThongtin() {
    ten = document.getElementById('name').value;
    dob = document.getElementById('dob').value;
    cccd = document.getElementById('cccd').value;
    diachi = document.getElementById("diachi").value;
    console.log(ten, dob, cccd, diachi);
    localStorage.setItem('name', ten);
    localStorage.setItem('dob', dob);
    localStorage.setItem('cccd', cccd);
    localStorage.setItem('diachi', diachi);
}





const nhom1 = document.getElementById('nhom1');
const nhom2 = document.getElementById('nhom2');
const nhom3 = document.getElementById('nhom3');
const nhom4 = document.getElementById('nhom4');

questions1 = [
    { q: "Trái đất quay quanh Mặt Trời.", a: "True", b: "False" },
    { q: "Nước sôi ở nhiệt độ 100 độ C.", a: "True", b: "False" },
    { q: "Con người có 3 tim.", a: "True", b: "False" },
    { q: "Cây xanh có khả năng quang hợp.", a: "True", b: "False" },
    { q: "Kim loại dẫn điện tốt.", a: "True", b: "False" },
    { q: "Sao Hoả có 2 mặt trăng.", a: "True", b: "False" },
    { q: "Nước có thể tồn tại ở cả 3 trạng thái rắn, lỏng và khí.", a: "True", b: "False" },
    { q: "Trái đất là hành tinh lớn nhất trong hệ Mặt Trời.", a: "True", b: "False" },
    { q: "Con người có thể nín thở trong hơn 10 phút.", a: "True", b: "False" },
    { q: "Vàng là kim loại quý hiếm nhất trên Trái đất.", a: "True", b: "False" },
]


questions2 = [
    {
        q: "Thủ đô của Việt Nam là gì?",
        a: "Hà Nội",
        b: "Thành phố Hồ Chí Minh",
        c: "Huế",
        d: "Đà Nẵng",
    },
    {
        q: "Con sông nào dài nhất Việt Nam?",
        a: "Sông Cửu Long",
        b: "Sông Hồng",
        c: "Sông Đà",
        d: "Sông Đồng Nai",
    },
    {
        q: "Núi nào cao nhất Việt Nam?",
        a: "Fansipan",
        b: "Ngũ Hành Sơn",
        c: "Bà Đen",
        d: "Bạch Mã",
    },
    {
        q: "Di sản văn hóa thế giới nào đầu tiên của Việt Nam?",
        a: "Quần thể di tích Cố đô Huế",
        b: "Phố cổ Hội An",
        c: "Vịnh Hạ Long",
        d: "Khu di tích Mỹ Sơn",
    },
    {
        q: "Loài hoa nào được xem là quốc hoa của Việt Nam?",
        a: "Sen",
        b: "Hồng",
        c: "Lan",
        d: "Huệ",
    },
    {
        q: "Quốc phục của Việt Nam là gì?",
        a: "Áo dài",
        b: "Áo cánh",
        c: "Áo bà ba",
        d: "Khăn đóng",
    },
    {
        q: "Món ăn nào được xem là quốc thực của Việt Nam?",
        a: "Phở",
        b: "Bún chả",
        c: "Bánh mì",
        d: "Gỏi cuốn",
    },
    {
        q: "Danh nhân văn hóa thế giới nào đầu tiên của Việt Nam?",
        a: "Nguyễn Trãi",
        b: "Hồ Chí Minh",
        c: "Lê Lợi",
        d: "Lý Thái Tổ",
    },
    {
        q: "Tôn giáo nào có số lượng tín đồ đông đảo nhất Việt Nam?",
        a: "Phật giáo",
        b: "Thiên Chúa giáo",
        c: "Tin Lành",
        d: "Cao Đài",
    },
    {
        q: "Kì thi nào được xem là quan trọng nhất trong hệ thống giáo dục Việt Nam?",
        a: "Thi tốt nghiệp THPT",
        b: "Thi đại học",
        c: "Thi học sinh giỏi",
        d: "Thi Olympic",
    },
]

questions3 = [
    {
        q: "Những quốc gia nào thuộc Đông Nam Á?",
        a: "Việt Nam",
        b: "Trung Quốc",
        c: "Lào",
        d: "Nhật Bản",
    },
    {
        q: "Số nào chia hết cho 2?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
    },
    {
        q: "Loại trái cây nào có màu vàng?",
        a: "Chuối",
        b: "Táo",
        c: "Cam",
        d: "Dưa lưới",
    },
    {
        q: "Thành phố nào trực thuộc trung ương?",
        a: "Hà Nội",
        b: "Hải Phòng",
        c: "Cần Thơ",
        d: "Đà Nẵng",
    },
    {
        q: "Con gì có 4 chân?",
        a: "Chó",
        b: "Mèo",
        c: "Bò",
        d: "Chim",
    },
    {
        q: "Dãy núi nào cao nhất Việt Nam?",
        a: "Trường Sơn",
        b: "Hoàng Liên Sơn",
        c: "Bạch Mã",
        d: "Pù Luông",
    },
    {
        q: "Số nào là số chính phương?",
        a: "4",
        b: "3",
        c: "9",
        d: "121",
    },
    {
        q: "Thủ đô của Việt Nam là gì?",
        a: "Hà Nội",
        b: "Thành phố Hồ Chí Minh",
        c: "Huế",
        d: "Đà Nẵng",
    },
    {
        q: "Món ăn nào được xem là món ăn nổi tiếng của Việt Nam?",
        a: "Phở",
        b: "Bún chả",
        c: "Bánh mì",
        d: "Gỏi cuốn",
    },
    {
        q: "Các vị vua nào thuộc triều đại nhà Nguyễn?",
        a: "Gia Long",
        b: "Minh Mạng",
        c: "Lê Lợi",
        d: "Bảo Đại",
    },
]
// 13 24 14 1234 123 2 134 1 123 124
questions4 = [
    { q: "Đây là một câu hỏi", a: "Đây là đáp án" },
    { q: "Đây là một câu hỏi 2", a: "Đây là đáp án 2" },
    { q: "Đây là một câu hỏi 3", a: "Đây là đáp án 3" },
    { q: "Đây là một câu hỏi 4", a: "Đây là đáp án 4" },
    { q: "Đây là một câu hỏi 5", a: "Đây là đáp án 5" },
    { q: "Đây là một câu hỏi 6", a: "Đây là đáp án 6" },
    { q: "Đây là một câu hỏi 7", a: "Đây là đáp án 7" },
    { q: "Đây là một câu hỏi 8", a: "Đây là đáp án 8" },
    { q: "Đây là một câu hỏi 9", a: "Đây là đáp án 9" },
    { q: "Đây là một câu hỏi 10", a: "Đây là đáp án 10" },
]

function taoCauHoi() {
    nhom1.innerHTML = '';
    questions1.forEach(function (question, index) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `
            <p>Câu ${index + 1}:  ${question.q}</p>
            <div class="d-flex justify-content-between w-50">
                <div>
                    <input type="radio" name="q${index + 1}" value="true" class="group1" >&nbsp;${question.a}
                </div>
                <div>
                    <input type="radio" name="q${index + 1}" value="false" class="group1">&nbsp;${question.b}
                </div>
            </div>
            <br>    
        `;
        nhom1.appendChild(listItem);
    });
    nhom2.innerHTML = '';
    questions2.forEach(function (question, index) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `
            <li>
            <p>Câu ${index + 1}: ${question.q}</p>
            <div class = "row">
            <div class="col-sm-5">
                <div>
                    <input type="radio" name="q${index + 11}" value="1" class="group2" >&nbsp;${question.a}
                </div>
                <br>
                <div>
                    <input type="radio" name="q${index + 11}" value="2" class="group2" >&nbsp;${question.b}
                </div>
            </div>
            <br>
            <div class="col-sm-5">
                <div>
                    <input type="radio" name="q${index + 11}" value="3" class="group2" >&nbsp;${question.c}
                </div>
                <br>
                <div>
                    <input type="radio" name="q${index + 11}" value="4" class="group2" >&nbsp;${question.d}
                </div>
            </div>
            </div>
        </li>
        <br>   
        `;
        nhom2.appendChild(listItem);
    });
    nhom3.innerHTML = '';
    questions3.forEach(function (question, index) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `
            <li>
            <p>Câu ${index + 1}: ${question.q}</p>
            <div class="row">
            <div class="col-sm-5">
                <div>
                    <input type="checkbox" name="q${index + 21}" class = "group3" value="1">&nbsp;${question.a}
                </div>
                <br>
                <div>
                    <input type="checkbox" name="q${index + 21}" class = "group3" value="2">&nbsp;${question.b}
                </div>
            </div>
            <br>
            <div class="col-sm-5">
                <div>
                    <input type="checkbox" name="q${index + 21}" class = "group3" value="3">&nbsp;${question.c}
                </div>
                <br>    
                <div>
                    <input type="checkbox" name="q${index + 21}" class = "group3" value="4">&nbsp;${question.d}
                </div>
            </div>
            <div>
        </li>
        <br>   
        `;
        nhom3.appendChild(listItem);
    });
    nhom4.innerHTML = '';
    questions4.forEach(function (question, index) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `
        <li>
            <p>Câu ${index + 1}: ${question.q}</p>
            <div>
                <textarea class="w-75" name="q${index + 31}" cols="30" class ="group4" rows="3"></textarea>
            </div>
            <br>
        </li>
        <br>  
        `;
        nhom4.appendChild(listItem);
    });
};

function tinhDiem() {
    let score = 0;
    const answerKeys = [
        //đáp án câu hỏi 1
        "true",
        "true",
        "false",
        "true",
        "true",
        "false",
        "true",
        "false",
        "false",
        "false",
        //đáp án câu hỏi 2
        "1", "2", "1", "3", "1", "1", "1", "1", "1", "1",
        //đáp án câu hỏi 3
        "13", "24", "14", "1234", "123", "2", "134", "1", "123", "124"
    ]
    const answerChoose = [];
    const answersModal = document.getElementById('answers-modal');
    const answersList = document.getElementById('answers-list');
    // for (var i = 1; i <= 2; i++) {
    //     const radios = document.querySelectorAll(`input[class="group${i}"]`);
    //     // Lặp qua tất cả radio button
    //     for (const radio of radios) {
    //         if (radio.checked) {
    //             answerChoose.push(radio.value);

    //         }
    //     }

    // }

    for (let i = 1; i <= 30; i++) {
        var checkboxes = document.querySelectorAll(`input[name="q${i}"]`);
        var res = "";
        for (const checkbox of checkboxes) {
            if (checkbox.checked) {
                res += checkbox.value;
            }
        }
        answerChoose.push(res);
    }

    console.log(answerChoose)

    // answersList.innerHTML = '';
    // for (const answer of answerChoose) {
    //     const listItem = document.createElement('li');
    //     listItem.textContent = answer;
    //     answersList.appendChild(listItem);
    // }

    for (let i = 0; i < 30; i++) {
        if (answerKeys[i] === answerChoose[i]) {
            score += 1;
        }
    }


    localStorage.setItem('diemtong', score);

    const answers = [];
    questions4.forEach(function (question, index) {
        const answerElement = document.querySelector(`textarea[name="q${index + 31}"]`);
        answers.push(answerElement.value);
    });

    var resultHtml = "";

    for (let i = 0; i < answers.length; i++) {
        const questionText = questions4[i].q;
        const answerText = answers[i];

        resultHtml += `
          <p>Câu hỏi ${i + 31}: ${questionText}</p>
          <p>Bài làm của bạn: </p>
          <p>${answerText}</p>
          <p>Đáp án: </p>
          <p>${questions4[i].a}</p>
          <hr>
        `;
        
    }
    localStorage.setItem('ketquaQ4', resultHtml);
};

