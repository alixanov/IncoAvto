// test-drive.js
const form = document.getElementById("test-drive-form");
const send = document.getElementById("send");
const testdrive = document.querySelector(".test-drive");

const data = [
  {
    img: "./Test drive/check 1.svg",
    txta: "Отправлено",
    txtb: "С вами свяжутся в ближайшее время",
  },
];

// Функция для отображения окна с данными
function showConfirmation() {
  testdrive.innerHTML = ""; // Очистить содержимое формы
  data.forEach((item) => {
    testdrive.innerHTML += `
            <div class="sendpage">
                <img src="${item.img}" alt="Галочка">
                <p>${item.txta}</p>
                <p>${item.txtb}</p>
            </div>
        `;
  });
}

send.addEventListener("click", (event) => {
  event.preventDefault(); // Отменить стандартное поведение кнопки submit
  showConfirmation(); // Вызвать функцию для отображения окна с данными
});
