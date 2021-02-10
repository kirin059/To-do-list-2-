"use strict";

const input = document.querySelector(".writeList");
const btn = document.querySelector(".createBtn");
const li = document.querySelector(".showList");

// input에 값을 입력한다 = value
// button을 누른다 = onclick event
// list에 값이 생성된다
// input은 초기화된다

btn.addEventListener("click", () => {
    let txt = input.value;

    if (txt.length < 1) {
        alert("내용을 입력해 주세요");
        return;
    } else {
        let newList = document.createElement("li");
        newList.innerHTML = `${txt} <button class="delBtn">❌</button>`;
        li.appendChild(newList);
        input.value = "";
    }

    // 삭제 버튼 누르면 리스트 삭제
    const delBtn = document.querySelectorAll(".delBtn");

    delBtn[delBtn.length - 1].addEventListener("click", function (e) {   // 가장 최근에 생긴 delBtn에 이벤트(click) 주기
        //console.log(e.target.parentElement.parentElement);             // 버튼이 새로 생길때마다, 이전것들에는 이미 이벤트리스너 등록되어있음
        li.removeChild(e.target.parentElement);
    });
});

// 엔터 치면 리스트 생성
input.addEventListener("keypress", (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
        btn.click(); // 위에서 btn에 event(=click)를 주었고, 그 뒤의 함수는 이벤트(click)를 눌렀을 때 실행할 함수
    }                // 이벤트리스너 = 대상에 해당이벤트를 실행하도록 등록하는 것.
    return;
});
