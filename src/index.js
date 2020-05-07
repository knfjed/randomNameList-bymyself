const lists = document.getElementById("lists");

async function getPasonalData() {
  // データを取得
  const res = await fetch("https://randomuser.me/api/?results=20");
  const users = await res.json();
  console.log(users.results);

  // DOM操作
  const list = document.getElementById("list");

  for (let i = 0; i < 20; i++) {
    const tr = document.createElement("tr");

    const tdPicture = document.createElement("td");
    const picture = document.createElement("img");
    const src = users.results[i].picture.thumbnail;

    const tdName = document.createElement("td");
    const tdAddress = document.createElement("td");
    const tdEmail = document.createElement("td");
    const tdPhone = document.createElement("td");

    tdName.innerText = users.results[i].name.first + users.results[i].name.last;
    tdAddress.innerText = users.results[i].location.city;
    tdEmail.innerText = users.results[i].email;
    tdPhone.innerText = users.results[i].phone;

    tdPicture.appendChild(picture);
    tr.appendChild(tdPicture);
    tr.appendChild(tdName);
    tr.appendChild(tdAddress);
    tr.appendChild(tdEmail);
    tr.appendChild(tdPhone);
    list.appendChild(tr);
  }
}

window.onload = getPasonalData();

// const getPasonalData = async () => {
//   // データを取得
//   const url = "https://randomuser.me/api/?results=40";

//   const json = await fetch(url)
//     .then((res) => {
//       return res.json();
//       console.log("データ取得：成功");
//     })
//     .catch((error) => {
//       return null;
//       console.log("データ取得：失敗");
//     });

//   const name = json.name;
//   console.log(name);

//   // DOM操作
//   // const list = document.getElementById("list");

//   // for (let i = 0; i < 10; i++) {
//   //   const tr = document.createElement("tr");
//   //   const tdName = document.createElement("td");
//   //   const tdAddress = document.createElement("td");
//   //   const tdEmail = document.createElement("td");

//   //   tdName.innerText = users[i].name;
//   //   tdAddress.innerText = users[i].address.city;
//   //   tdEmail.innerText = users[i].email;

//   //   tr.appendChild(tdName);
//   //   tr.appendChild(tdAddress);
//   //   tr.appendChild(tdEmail);
//   //   list.appendChild(tr);
//   // }
// };
