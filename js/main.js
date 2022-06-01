document.querySelector('#flip-btn').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api?req=result`)
  const data = await res.json()
  
  console.log(data);
  document.querySelector("#result").textContent = data.result
  document.querySelector("#coin").src = data.imgUrl
  
}

