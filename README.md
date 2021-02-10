# To-Do-List 만들기(2) 
## javascript
---

1️⃣ parentTag.appendChild(tag to make)
리스트가 생성되는 `<ul>` 태그 내 `<li>` 태그를 넣어 주는 방법 >> `appendChild` 사용
```js
  let newList = document.createElement("li");
  newList.innerHTML = `${txt} <button class="delBtn">❌</button>`;
  li.appendChild(newList);
  // appendChild 메서드는 부모 태그의 제일 마지막에 위치한다(=parentTag.length-1)
```

2️⃣ delBtn[delBtn.length - 1]

del 버튼 누르면 리스트가 삭제되는 함수 작성
```js
  const delBtn = document.querySelectorAll(".delBtn");
  // 모든 delBtn 불러온다  >> 배열로 전달됨
  
  // 복수의 태그이기 때문에 배열로 index를 설정해 주어야 한다 
   delBtn[delBtn.length - 1].addEventListener("click", function (e) {   
   // 가장 최근에 생긴 delBtn에 이벤트(click) 주기  >>  버튼이 새로 생길때마다, 이전 버튼들에는 이미 이벤트리스너 등록되어있음         
       li.removeChild(e.target.parentElement);
    });
  // appendChild를 통해 가장 최근에 생성된 li는 가장 아래(=index가 length-1 번째)에 위치한다
  // 따라서 delBtn[delBtn.length - 1]을 해주면 새롭게 생성될 때마다 eventListener가 적용된다(=모두 적용)
```

3️⃣ 엔터 치면 리스트 생성

console.log(e.key) ➡ "enter" / console.log(e.keyCode) ➡ "13"  >> `if문에 활용`
```js
input.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        btn.click(); 
        // 위에서 btn에 event(=click)를 주었고, 그 뒤의 함수는 이벤트(click)를 눌렀을 때 실행할 함수
        // 이벤트리스너 = 대상에 해당이벤트를 실행하도록 등록하는 것.
    }                
    return;
});
```

