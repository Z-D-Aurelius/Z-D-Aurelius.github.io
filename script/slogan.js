let sloganText = document.getElementById("index_slogan_text");
let sloganFrom = document.getElementById("index_slogan_from");

let sloganList = 
[
    ["学习，学习，再学习。", "——列宁"],
    ["无产者在这个革命中失去的只是锁链。他们获得的将是整个世界。全世界无产者，联合起来！", "——《共产党宣言》"],
    ["革命是历史的火车头。", "——马克思"],
    ["哲学家们只是用不同的方式解释世界，而问题在于改变世界。", "——马克思"],
    ["宗教是人民的鸦片。", "——马克思"],
    ["无产阶级只有解放全人类，才能最后解放自己。", "——马克思"],
    ["没有革命的理论，就没有革命的行动。", "——列宁"],
    ["革命不是请客吃饭，不是做文章，不是绘画绣花，不能那样雅致，那样从容不迫，革命是暴动，是一个阶级推翻一个阶级的暴烈的行动。", "——毛泽东"],
    ["一万年太久，只争朝夕。", "——毛泽东"],
    ["批判的武器不能代替武器的批判。但是理论一经掌握群众，也会成为物质力量。","——马克思"]
]

let choose = Math.floor(Math.random() * sloganList.length);

sloganText.innerText = sloganList.at(choose).at(0);
sloganFrom.innerText = sloganList.at(choose).at(1);
