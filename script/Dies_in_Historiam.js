let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();

let month_json =
    fetch("./datum/Dies_in_Historiam/" + month + ".json").
        then(response => response.json());

month_json.then(data => {
    const day_json = data[day.toString()];
    console.log(day_json);
    document.getElementById("DiH_Event").innerText = day_json["event"];
    document.getElementById("DiH_Description").innerHTML = day_json["description"];
    document.getElementById("DiH_image").src = "./image/Dies_in_Historiam/" + month + "." + day + ".jpg";
    console.log(document.getElementById("DiH_image").src);
});
