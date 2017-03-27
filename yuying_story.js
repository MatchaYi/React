function YuYing(props) {
  this.props = props;
}

YuYing.prototype.catchFish = function (fish) {
  this.props.putInBag(fish);
}


const BAG = [];

const putInBag = fish => BAG.push(fish)

function daYu() {
  var yy1 = new YuYing({
    putInBag
  });
  var yy2 = new YuYing({
    putInBag
  });

  yy1.catchFish('小鱼');
  yy1.catchFish('三文鱼red');
  yy2.catchFish('三文鱼blue');
  yy1.catchFish('大鲨鱼red');
  yy2.catchFish('大鲨鱼blue');
}

daYu();

console.log(BAG);
