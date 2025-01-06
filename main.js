function showInfo(dish) {  
    let info = '';  

    switch(dish) {  
        case 'Pasta':  
            info = 'Pasta is made from wheat and is a staple of Italian cuisine. It is often served with various sauces and toppings.';  
            break;  
        case 'Sushi':  
            info = 'Sushi is a Japanese dish of vinegared rice accompanied by various ingredients, mainly seafood and vegetables.';  
            break;  
        case 'Pizza':  
            info = 'Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients baked at a high temperature.';  
            break;  
        case 'Salad':  
            info = 'Salad is a dish consisting of mixed pieces of food, typically featuring vegetables and/or fruits.';  
            break;  
        default:  
            info = 'Click on a dish to learn more!';  
    }  

    document.getElementById('dishInfo').innerText = info;  
}