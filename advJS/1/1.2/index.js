const cookMap = new Map();
cookMap.set("Виктор","Пицца");
cookMap.set("Ольга","Суши");
cookMap.set("Дмитрий","Десерты");

const disMap = new Map();
disMap.set("Маргарита","Пицца");
disMap.set("Перерони","Пицца");
disMap.set("Филадельфия","Суши");
disMap.set("Калифорния","Суши");
disMap.set("Тирамису","Десерты");
disMap.set("Чизкейк","Десерты");

const clientsMap = new Map();
clientsMap.set({"name" : "Сергей", "table": 1},"Маргарита");
clientsMap.set({"name" : "Елена", "table": 2},"Маргарита");
clientsMap.set({"name" : "Александр", "table": 3},"Маргарита");

console.log(clientsMap);

  cookMap.forEach((cookValue, cookKey, map) => {
    disMap.forEach((disValue, disKey, map) => {
        if (cookValue == disValue) {
            console.log(`Повар ${cookKey} готовит ${disValue} ${disKey}`);
           }
    });
  });

