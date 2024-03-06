function tinhDiem() {
    let score = 0;
    const answerKeys = {
        q1: "true",
        q2: "true",
        q3: "true",
        q4: "true",
        q5: "true",
    };
    const selectedRadios = [];
    const answersModal = document.getElementById('answers-modal');
    const answersList = document.getElementById('answers-list');
    for (var i = 1; i <= 2; i++) {
        const radios = document.querySelectorAll(`input[class="group${i}"]`);
        // Lặp qua tất cả radio button
        for (const radio of radios) {
            if (radio.checked) {
                selectedRadios.push(radio.value);
                // const questionNumber = radio.name; // Extract question number from name (e.g., "q1")
                // const selectedAnswer = radio.value;
                // if (answerKeys[questionNumber] === selectedAnswer) {
                //     score++;
                // }
            }
        }
    }

    for (let i = 1; i <= 3; i++) {
        var checkboxes = document.querySelectorAll(`input[class="group3"][name="q${i}"]`);
        var res = "";
        for (const checkbox of checkboxes) { 
            if (checkbox.checked) {
                res+=checkbox.value;
            }
        }
        selectedRadios.push(res);
    }



    answersList.innerHTML = '';
    for (const answer of selectedRadios) {
        const listItem = document.createElement('li');
        listItem.textContent = answer;
        answersList.appendChild(listItem);
    }
    const pointDisplay = document.getElementById("your-point");
    pointDisplay.textContent = score;

};

const nhom1 = document.getElementById('nhom1');
const nhom2 = document.getElementById('nhom2');
const nhom3 = document.getElementById('nhom3');

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

questions3 = [
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
                    <input type="radio" name="q${index + 1}" value="true" class="group1" required>&nbsp;${question.a}
                </div>
                <div>
                    <input type="radio" name="q${index + 1}" value="false" class="group1" required>&nbsp;${question.b}
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
            <div class="d-flex justify-content-between w-50">
                <div>
                    <input type="radio" name="q${index + 1}" value="1" class="group2" required>&nbsp;${question.a}
                </div>
                <div>
                    <input type="radio" name="q${index + 1}" value="2" class="group2" required>&nbsp;${question.b}
                </div>
            </div>
            <br>
            <div class="d-flex justify-content-between w-50">
                <div>
                    <input type="radio" name="q${index + 1}" value="3" class="group2" required>&nbsp;${question.c}
                </div>
                <div>
                    <input type="radio" name="q${index + 1}" value="4" class="group2" required>&nbsp;${question.d}
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
            <div class="d-flex justify-content-between w-50">
                <div>
                    <input type="checkbox" name="q${index + 1}" class = "group3" value="1">&nbsp;Đáp án 1
                </div>
                <div>
                    <input type="checkbox" name="q${index + 1}" class = "group3" value="2">&nbsp;Đáp án 2
                </div>
            </div>
            <br>
            <div class="d-flex justify-content-between w-50">
                <div>
                    <input type="checkbox" name="q${index + 1}" class = "group3" value="3">&nbsp;Đáp án 3
                </div>
                <div>
                    <input type="checkbox" name="q${index + 1}" class = "group3" value="4">&nbsp;Đáp án 4
                </div>
            </div>
        </li>
        <br>   
        `;
        nhom3.appendChild(listItem);
    });
};

taoCauHoi();



