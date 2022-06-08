
const prompt = require('prompt-sync')();
let map = new Map();
let basket = new Map();
let start = prompt("Write \"START\" to start the shop: ");

map.set('Cleaning house', 5000);
map.set('Taking shower', 2000);
map.set('Eating', 3500);

console.log('This is your basic services: ')
console.log()
let price = 0;
    console.log([...map.entries()])
    if(start=="START"){
        while(start!="STOP"){
            startShop();
            if(start==1){
                console.log("Now the Pricelist of the shop")
                show();
                let addName = prompt("Write down the name of service: ");
                let addPrice = prompt("Write down the price of service: ");
                
                add(addName, addPrice);
            }
            else if(start==2){
                show();
                let key = prompt("The name of the service: ")
                remove(key);
            }
            else if(start==3){
                basketShow();
                show();
                let adding = prompt("Write just name service: ");
                addBasket(adding);
            }
            else if(start==4){
                basketShow();
                checkBasket();
            }
            else if(start==5){
                basketShow();
                let key = prompt("The name of the service: ")
                clearBasket(key);
            }
            else if(start=="END"){
                throw new Error("CLOSING THE SHOP!!!")
            }
            else{
                console.log("You entered wrong number!!!")
            }
        }
    }
    function basketShow(){
        console.log("In yor basket you have: ")
        console.log([...basket.entries()])
        console.log()
    }
    function show(){
        console.log()
        console.log([...map.entries()])
        console.log()
    }
    function startShop() {
        console.log("Available services: ")
            console.log("List of actions: (write only number commands) ")
            console.log()
            console.log("1) add to shop")
            console.log("2) remove from shop")
            console.log("3) add to basket")
            console.log("4) check basket")
            console.log("5) remove from basket")
            console.log("or write command \"END\" to terminate the code")
            
            console.log()
            console.log("Write your action:")
            start = prompt();
            return start;
    }
    function add(addName, addPrice){
        map.set(addName, parseInt(addPrice));
    }
    function remove(key){
        map.delete(key)
    }
    function addBasket(adding){

        if(!basket.has(adding)){
            basket.set(adding, parseInt(map.get(adding)));
        price += map.get(adding);
        }
        else{
            basket.set(adding, parseInt(basket.get(adding)+map.get(adding)));
            price += map.get(adding);
        }
        
    }
    function clearBasket(key){
        if(basket.get(key)==map.get(key)){
            basket.delete(key);
        price -= basket.get(key);
        }
        else{
            basket.set(key, basket.get(key)-map.get(key))
        }
        
    }
    function checkBasket(){
        console.log(`Total price of your ordered services: ` + price)
    }