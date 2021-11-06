class Food{
    constructor(){
        this.foodStock = 0;
        this.lastfed;
    }

    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }

    getFedTime(lastfed){
        this.lastfed = lastfed;
    }

    deductFood(){
        if(this.foodStock>0){
            this.foodStock = this.foodStock-1;
        }
    }

    getFoodStock(){
        return this.foodStock;
    }

    display(){
        var x = 80, y = 100;
        imageMode(CENTER);
        image(milkimage,720, 220, 70, 70);
        if(this.foodStock!=0){
            for(var i = 0; i<this.foodStock; i = i+1){
                if(i%10 === 0){
                    x = 80
                    y = y+50
                }
                image(milkimage, x, y, 50, 50)
                x = x+30

            }
        }
    }
}