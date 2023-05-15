
fetch("https://reqres.in/api/users").then((data)=>{
    return data.json();
}).then(jsondata=>{
    
    let DATA=jsondata.data;
    let out="";
    let x=0;
    while(x< DATA.length){
        out+=`
        <tr>
            <td>${DATA[x].id}</td>
            <td>${DATA[x].email}</td>
            <td>${DATA[x].first_name}</td>
            <td>${DATA[x].last_name}</td>
            <td><img src='${DATA[x].avatar}'></td>
        </tr>`;
        x++;
    }
    document.querySelector(".tbody").innerHTML=out;
})