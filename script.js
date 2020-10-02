var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true  
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true,
    color:"red"
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },
  {
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false,
    color:"red"
  }
]
for(var i=0; i<warriors.length; i++){
  if(warriors[i].warrior == true){
    if(warriors[i].health >= 10){
      if(warriors[i].damage >= 2){
        
        var ele = document.createElement("div");
        var nameEle = document.createElement("h2");
        var damageEle = document.createElement("h4");
        var healthEle = document.createElement("h4");
        var warriorEle = document.createElement("h4");

        nameEle.innerHTML = "Name: "+warriors[i].name;
        nameEle.style.color = warriors[i].color;
        damageEle.innerHTML = "Damage: "+warriors[i].damage;
        healthEle.innerHTML = "Health: "+warriors[i].health;
        warriorEle.innerHTML = "Warrior";
  
        ele.appendChild(nameEle);
        ele.appendChild(damageEle);
        ele.appendChild(healthEle);
        ele.appendChild(warriorEle);

        document.body.appendChild(ele);
}
}
}
}