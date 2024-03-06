function tinhDiem() {
    let score = 0;
    const answerKeys = {
        q1: "true",
        q2: "true",
        q3: "true",
        q4: "true",
        q5: "true",
    };
    const radios = document.querySelectorAll('input[type="radio"]');
    const selectedRadios = [];
    const answersModal = document.getElementById('answers-modal');
    const answersList = document.getElementById('answers-list');
    // Lặp qua tất cả radio button
    for (const radio of radios) {
        if (radio.checked) {
            selectedRadios.push(radio.value);
            const questionNumber = radio.name; // Extract question number from name (e.g., "q1")
            const selectedAnswer = radio.value;
            if (answerKeys[questionNumber] === selectedAnswer) {
                score++;
            }
        }
    }
    answersList.innerHTML = '';
    for (const answer of selectedRadios) {
        const listItem = document.createElement('li');
        listItem.textContent = answer;
        answersList.appendChild(listItem);
    }
    const pointDisplay = document.getElementById("your-point");
    pointDisplay.textContent = score;

}

const nhom1 = document.getElementById('nhom1');
const nhom2 = document.getElementById('nhom2');

questions1 = [
    { q: "Đây là một câu hỏi", a: 'Đáp án 1', b: 'Đáp án 2' },
    { q: "Đây là một câu hỏi 2", a: 'Đáp án 1', b: 'Đáp án 2' },
    { q: "Đây là một câu hỏi 3", a: 'Đáp án 1', b: 'Đáp án 2' }
]


questions2 = [
    { q: "Đây là một câu hỏi", a: 'Đáp án 1', b: 'Đáp án 2', c: "Đáp án 3", d: "Đáp án 4" },
    { q: "Đây là một câu hỏi 2", a: 'Đáp án 1', b: 'Đáp án 2', c: "Đáp án 3", d: "Đáp án 4" },
    { q: "Đây là một câu hỏi 3", a: 'Đáp án 1', b: 'Đáp án 2', c: "Đáp án 3", d: "Đáp án 4" },
]

function taoCauHoi() {
    nhom1.innerHTML = '';
    questions1.forEach(function (question, index) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `
            <p>Câu ${index + 1}:  ${question.q}</p>
            <div class="d-flex justify-content-between w-50">
                <div>
                    <input type="radio" name="q${index}" value="true">&nbsp;${question.a}
                </div>
                <div>
                    <input type="radio" name="q${index}" value="false">&nbsp;${question.b}
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
            <p>Câu ${index}: ${question.q}</p>
            <div class="d-flex justify-content-between w-50">
                <div>
                    <input type="radio" name="q${index}" value="1">&nbsp;${question.a}
                </div>
                <div>
                    <input type="radio" name="q${index}" value="2">&nbsp;${question.b}
                </div>
            </div>
            <br>
            <div class="d-flex justify-content-between w-50">
                <div>
                    <input type="radio" name="q2" value="3">&nbsp;${question.c}
                </div>
                <div>
                    <input type="radio" name="q2" value="4">&nbsp;${question.d}
                </div>
            </div>
        </li>
        <br>   
        `;
        nhom2.appendChild(listItem);
    });
}

window.onload = function () {
    taoCauHoi();
}

{/* <li>
                    <p>Câu 1: Trái đất là hành tinh lớn nhất trong hệ mặt trời.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q1" value="true">&nbsp;Đúng
                        </div>
                        <div>
                            <input type="radio" name="q1" value="false">&nbsp;Sai
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 2: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="true">&nbsp;Đúng
                        </div>
                        <div>
                            <input type="radio" name="q2" value="false">&nbsp;Sai
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 3: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q3" value="true">&nbsp;Đúng
                        </div>
                        <div>
                            <input type="radio" name="q3" value="false">&nbsp;Sai
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 4: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q4" value="true">&nbsp;Đúng
                        </div>
                        <div>
                            <input type="radio" name="q4" value="false">&nbsp;Sai
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 5: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q5" value="true">&nbsp;Đúng
                        </div>
                        <div>
                            <input type="radio" name="q5" value="false">&nbsp;Sai
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 6: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q6" value="true">&nbsp;Đúng
                        </div>
                        <div>
                            <input type="radio" name="q6" value="false">&nbsp;Sai
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 7: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q7" value="true">&nbsp;Đúng
                        </div>
                        <div>
                            <input type="radio" name="q7" value="false">&nbsp;Sai
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 8: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q8" value="true">&nbsp;Đúng
                        </div>
                        <div>
                            <input type="radio" name="q8" value="false">&nbsp;Sai
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 9: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q9" value="true">&nbsp;Đúng
                        </div>
                        <div>
                            <input type="radio" name="q9" value="false">&nbsp;Sai
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 10: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q10" value="true">&nbsp;Đúng
                        </div>
                        <div>
                            <input type="radio" name="q10" value="false">&nbsp;Sai
                        </div>
                    </div>
                </li>
                <br>
                <h4>Nhóm câu hỏi 2</h4>
                <hr>
                <li>
                    <p>Câu 11: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q11" value="1">&nbsp;Đáp án 1
                        </div>
                        <div>
                            <input type="radio" name="q11" value="2">&nbsp;Đáp án 2
                        </div>
                    </div>
                    <br>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="3">&nbsp;Đáp án 3
                        </div>
                        <div>
                            <input type="radio" name="q2" value="4">&nbsp;Đáp án 4
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 11: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="1">&nbsp;Đáp án 1
                        </div>
                        <div>
                            <input type="radio" name="q2" value="2">&nbsp;Đáp án 2
                        </div>
                    </div>
                    <br>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="3">&nbsp;Đáp án 3
                        </div>
                        <div>
                            <input type="radio" name="q2" value="4">&nbsp;Đáp án 4
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 11: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="1">&nbsp;Đáp án 1
                        </div>
                        <div>
                            <input type="radio" name="q2" value="2">&nbsp;Đáp án 2
                        </div>
                    </div>
                    <br>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="3">&nbsp;Đáp án 3
                        </div>
                        <div>
                            <input type="radio" name="q2" value="4">&nbsp;Đáp án 4
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 11: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="1">&nbsp;Đáp án 1
                        </div>
                        <div>
                            <input type="radio" name="q2" value="2">&nbsp;Đáp án 2
                        </div>
                    </div>
                    <br>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="3">&nbsp;Đáp án 3
                        </div>
                        <div>
                            <input type="radio" name="q2" value="4">&nbsp;Đáp án 4
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 11: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="1">&nbsp;Đáp án 1
                        </div>
                        <div>
                            <input type="radio" name="q2" value="2">&nbsp;Đáp án 2
                        </div>
                    </div>
                    <br>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="3">&nbsp;Đáp án 3
                        </div>
                        <div>
                            <input type="radio" name="q2" value="4">&nbsp;Đáp án 4
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 11: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="1">&nbsp;Đáp án 1
                        </div>
                        <div>
                            <input type="radio" name="q2" value="2">&nbsp;Đáp án 2
                        </div>
                    </div>
                    <br>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="3">&nbsp;Đáp án 3
                        </div>
                        <div>
                            <input type="radio" name="q2" value="4">&nbsp;Đáp án 4
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 11: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="1">&nbsp;Đáp án 1
                        </div>
                        <div>
                            <input type="radio" name="q2" value="2">&nbsp;Đáp án 2
                        </div>
                    </div>
                    <br>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="3">&nbsp;Đáp án 3
                        </div>
                        <div>
                            <input type="radio" name="q2" value="4">&nbsp;Đáp án 4
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 11: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="1">&nbsp;Đáp án 1
                        </div>
                        <div>
                            <input type="radio" name="q2" value="2">&nbsp;Đáp án 2
                        </div>
                    </div>
                    <br>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="3">&nbsp;Đáp án 3
                        </div>
                        <div>
                            <input type="radio" name="q2" value="4">&nbsp;Đáp án 4
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 11: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="1">&nbsp;Đáp án 1
                        </div>
                        <div>
                            <input type="radio" name="q2" value="2">&nbsp;Đáp án 2
                        </div>
                    </div>
                    <br>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="3">&nbsp;Đáp án 3
                        </div>
                        <div>
                            <input type="radio" name="q2" value="4">&nbsp;Đáp án 4
                        </div>
                    </div>
                </li>
                <br>
                <li>
                    <p>Câu 11: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="1">&nbsp;Đáp án 1
                        </div>
                        <div>
                            <input type="radio" name="q2" value="2">&nbsp;Đáp án 2
                        </div>
                    </div>
                    <br>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="radio" name="q2" value="3">&nbsp;Đáp án 3
                        </div>
                        <div>
                            <input type="radio" name="q2" value="4">&nbsp;Đáp án 4
                        </div>
                    </div>
                </li>
                <br>
                <h4>Nhóm câu hỏi 3</h4>
                <hr>
                <li>
                    <p>Câu 21: Nước ta có 54 dân tộc anh em.</p>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="checkbox" name="q2" value="1">&nbsp;Đáp án 1
                        </div>
                        <div>
                            <input type="checkbox" name="q2" value="2">&nbsp;Đáp án 2
                        </div>
                    </div>
                    <br>
                    <div class="d-flex justify-content-between w-50">
                        <div>
                            <input type="checkbox" name="q2" value="3">&nbsp;Đáp án 3
                        </div>
                        <div>
                            <input type="checkbox" name="q2" value="4">&nbsp;Đáp án 4
                        </div>
                    </div>
                </li>
                <br></br> */}