const sender = document.getElementById("sender");
const recipient = document.getElementById("recipient");

const names = [];
const addBtn = document.getElementById("addBtn");
const addName = document.getElementById("addName");
const balance = document.getElementById("balance");
const ul = document.getElementById("info");
const sendBtn = document.getElementById("sendMoney");
const selectSender = document.getElementById("sender");
const selectRecipient = document.getElementById("recipient");

addBtn.addEventListener("click", function (e) {
  const li = document.createElement("li");
  const nameSpan = document.createElement("span");
  nameSpan.innerHTML = addName.value;
  const balanceSpan = document.createElement("span");
  balanceSpan.innerHTML = balance.value;
  li.className = "flex justify-between";
  li.appendChild(nameSpan);
  li.appendChild(balanceSpan);
  ul.appendChild(li);
  const objname = { name: addName.value, balance: balance.value };
  names.push(objname);
  const optionSender = document.createElement("option");
  optionSender.innerHTML = addName.value;
  optionSender.value = balance.value;
  selectSender.appendChild(optionSender.cloneNode(true));
  selectRecipient.appendChild(optionSender);

  // console.log(names)
  addName.value = ""; // inputun içini boşalttık.
  balance.value = "";
});
