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
    const MAX_QUALITY = 50;
    const MIN_QUALITY = 0
    const MIN_SELLIN = 0
    this.items.forEach(function(item){     
      let reduceQualityBy1 = () => item.quality --
      let increaseQualityBy1 = () => item.quality ++
      let reduceSellInBy1 = () => item.sellIn --

      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.name != 'Sulfuras, Hand of Ragnaros' ) {
       if(item.quality > MIN_QUALITY && item.quality < MAX_QUALITY && item.sellIn > MIN_SELLIN ){
        reduceQualityBy1()
        reduceSellInBy1()
      } else if (item.sellIn <= MIN_SELLIN){
        item.quality -= 2
      }
    }
    if (item.name == "Aged Brie"){
      if(item.quality < MAX_QUALITY){
        increaseQualityBy1()
      }
    }

    if(item.name === 'Backstage passes to a TAFKAL80ETC concert'){
      if(item.sellIn > MIN_SELLIN && item.sellIn < 6){
        item.quality += 3
      } else if(item.sellIn >=6 && item.sellIn <= 10){
        item.quality += 2
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

