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
      function notLegendary(){if (item.name != 'Sulfuras, Hand of Ragnaros') {
        reduceQualityBy1()
      }}
      function backStagePasses(){if (item.sellIn < 11) {
        if (item.quality < 50) {
          increaseQualityBy1()
        }
      }}

      function reduceQualityToZero(){item.quality = 0;}
      
      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > 0) {
          notLegendary()
        }
      } else {
        if (item.quality < 50) {
          increaseQualityBy1()
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            backStagePasses()
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                increaseQualityBy1()
              }
            }
          }
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        reduceSellInBy1()
      }
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                reduceQualityBy1();
              }
            }
          } else {
            reduceQualityToZero()
          }
        } else {
          if (item.quality < 50) {
            increaseQualityBy1();
          }
        }
      }
    })
    return this.items;
  }
}

