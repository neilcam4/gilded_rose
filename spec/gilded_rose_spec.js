describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });
  it("should reduce in quality after each day by 1 ", function(){
    const gildedRose = new Shop([new Item("foo", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(9)
  })
  it('should reduce in quantity by 1 when update quality', function(){
    const gildedRose = new Shop([new Item("foo", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4)
  })
  it('should ensure the quality is never a negative number', function(){
    const gildedRose = new Shop([new Item("foo", 50, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0)
  })
  it('should ensure the quality of Aged Brie increases every day', function(){
    const gildedRose = new Shop([new Item("Aged Brie", 24, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(2)
  })
  it('should ensure the quality of an item is not more than 50', function(){
    const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50)
  })
  it('Once the sell by date has passed, Quality degrades twice as fast', function(){
    const gildedRose = new Shop([new Item("Shoes", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(48)
  })
  it('Sulfuras”, being a legendary item, never has to be sold or decreases in Quality', function(){
    const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50)
    expect(items[0].sellIn).toEqual(10)
  })
  it('Backstage passes increase in quality by 2 if there are 10 days or less', function(){
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 6, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(42)
  })
  it('Backstage passes increase in quality by 3 if there are 3 days or less', function(){
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 2, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(43)
  })
  it('Backstage passes drop to 0 in quality after concert', function(){
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0)
  })
});
