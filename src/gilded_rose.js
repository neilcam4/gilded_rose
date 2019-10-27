class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(function(item){     
      function reduceQualityBy1(){item.quality--;}
      function increaseQualityBy1(){item.quality++}
      function reduceSellInBy1 (){item.sellIn--}

      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.name != 'Sulfuras, Hand of Ragnaros' ) {
       if(item.quality > 0 && item.quality < 50 && item.sellIn > 0 ){
        reduceQualityBy1()
        reduceSellInBy1()
      } else if (item.sellIn <=0){
        item.quality-=2
      }
    }
    if (item.name == "Aged Brie"){
      if(item.quality < 50){
        increaseQualityBy1()
      }
    }

    if(item.name === 'Backstage passes to a TAFKAL80ETC concert'){
      if(item.sellIn > 0 && item.sellIn < 6){
        item.quality+=3
      } else if(item.sellIn >=6 && item.sellIn <= 10){
        item.quality +=2
      } else if(item.sellIn <= 0){
        item.quality = 0;
      } else if (item.sellIn > 10){
        increaseQualityBy1()
      }
    } 
    })
    return this.items;
  }
}

