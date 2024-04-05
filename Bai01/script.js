// Tạo một đối tượng đa cấp với 4 key và giá trị
let myObject = {
  key1: {
    Key1: "value1",
    Key2: "value2",
  },
  key2: {
    Key3: "value3",
    Key4: "value4",
  },
  key3: {
    Key5: "value5",
    Key6: "value6",
  },
  key4: {
    Key7: "value7",
    Key8: "value8",
  },
};

// In ra đối tượng để kiểm tra
console.log(myObject);

// Đưa object đa cấp vào localStorage
let jsonString = JSON.stringify(myObject);
localStorage.setItem("bai1", jsonString);
