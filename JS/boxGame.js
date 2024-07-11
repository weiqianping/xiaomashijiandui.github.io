/**
 * Created by Administrator on 2015/12/27.
 */
window.onload= function () {
    var currentQuestionIndex = -1; // 当前题目的索引，初始为-1表示未开始

        var questions = [
            {
                question: "建设社会主义现代化强国，____是第一要务，____是第一动力 ，____是第一资源。()",
                options: ["发展、人才、创新", "发展、创新、人才", "创新、发展、人才", "人才、创新、发展"],
                answer: "发展、创新、人才"
            },
            {
                question: "让青春在____、____、____、____的不懈奋斗中绽放绚丽之花。()",
                options: ["为祖国、为民族、为社会、为人民", 
                ".为党、为祖国、为民族、为人民", 
                "为祖国、为民族、为人民、为人类", 
                "为世界、为祖国、为民族、为人民"],
                answer: "为祖国、为民族、为人民、为人类"
            },
            {
                question:"青年首先要爱国爱民，热爱祖国、忠于人民，永久奋斗、赤诚奉献，要学党史，坚定“四个自信”，不断增强做中国人的____、____、____。()",
                options:["志气、勇气、底气","硬气、志气、底气","志气、骨气、底气","骨气、志气、硬气"],
                answer:"志气、骨气、底气"
            },
            {
                question:"《习近平和大学生朋友们》一书的目的是____。()",
                options:["促进青年成长","坚定青年理想信念","引导青年树立正确的世界观、人生观、价值观","培养青年勇担时代重任的责任感"],
                answer:"促进青年成长"
            },
            {
                question:"理想信念习总书记认为人生道路的关键之处是____。()",
                options:["坚守自己的初心","选择正确的方向和目标","脚踏实地有作为","坚持不懈执着追求"],
                answer:"选择正确的方向和目标"
            },
            {
                question:"广大青年要“____、____、____、____”，努力成长为德智体美劳全面发展的社会主义建设者和接班人。()",
                options:["爱国、励志、求真、力行","爱国、奋斗、求真、笃行","奋斗、求真、励志、力行","爱国、奋斗、求真、力行"],
                answer:"爱国、励志、求真、力行"
            },
            {
                question:"理想信念习总书记认为人生道路的关键之处是____。()",
                options:["坚守自己的初心","选择正确的方向和目标","脚踏实地有作为","坚持不懈执着追求"],
                answer:"选择正确的方向和目标"
            },
            {
                question:"中国共产党为什么能，中国特色社会主义为什么好，归根到底是()",
                options:[
                    "马克思主义行，是中国化时代化的马克思主义行",
                    "中国共产党的领导",
                    "民主集中制",
                    "全心全意为为人民服务"
            ],
                answer:"马克思主义行，是中国化时代化的马克思主义行"
            },
            {
                question:"红船精神：开天辟地、敢为人先的首创精神；坚定理想、百折不挠的奋斗精神；________的奉献精神。()",
                options:[
                    "立党为公、忠诚为民",
                    "勇于奋斗、敢为人先",
                    "坚定信念、坚韧不拔",
                    "不忘初心、牢记使命"
                ],
                answer:"立党为公、忠诚为民"
            },
            {
                question:"广大青年要肩负历史使命，坚定前进信心，_________努力成为堪当民族复兴重任的时代新人。()",
                options:[
                    "立大志、明大德、成大才、担大任",
                    "有理想、敢担当、能吃苦、肯奋斗",
                    "青春为中国式现代化挺膺担当",
                    "高举中国特色社会主义旗帜"
                ],
                answer:"立大志、明大德、成大才、担大任"
            },
            {
                question:"今年是新中国成立____周年，是五四运动____周年。()",
                options:[
                    "75、100",
                    "75、105",
                    "100、75",
                    "75、95"
                ],
                answer:"75、105"
            },
            {
                question:"广大青年要继承和发扬五四精神，坚定不移听党话、跟党走，争做____的新时代好青年。()",
                options:[
                    "立大志、明大德、成大才、担大任",
                    "展现青春作为、彰显青春风采、贡献青春力量",
                    "有理想、敢担当、能吃苦、肯奋斗",
                    "高举中国特色社会主义旗帜"
                ],
                answer:"有理想、敢担当、能吃苦、肯奋斗"
            },
            {
                question:"广大青年在推进强国建设、民族复兴伟业中展现青春作为、彰显青春风采、贡献青春力量，奋力书写_________的青春篇章。()",
                options:[
                    "在各领域各方面勇当排头兵和生力军",
                    "自信自强、刚健有为",
                    "为中国式现代化挺膺担当",
                    "肩负使命任务 传承弘扬优良传统"
                ],
                answer:"为中国式现代化挺膺担当"
            },
            {
                question:"________是决定当代中国命运的关键一招，也是决定中国式现代化成败的关键一招。()",
                options:[
                    "改革开放",
                    "中国共产党的领导",
                    "新质生产力",
                    "人民民主专政"
                ],
                answer:"改革开放"
            }
            // Add more questions as needed
        ];
    var can1=document.getElementById("canvas1");   /*���س��������ݡ�ǽ*/
    var can2=document.getElementById("canvas2");   /*�����������*/
    var context1=can1.getContext("2d");
    var context2=can1.getContext("2d");
    var nowLevel=[];
    var boxs=[];
    var balls=[];
    var walls=[];
    var blocks=[];
    var me;
    var time=0;
    var level=0;
    var changeX=0;
    var changeY=0;
    var timeOut=true;
    var complete=0;
    var next=false;
    if(level==0) loadQuestion();
    setItem();
    setInterval(function () {
        if (next) {
            context2.clearRect(0, 0, can2.width, can2.height);
            drawMap();
            drawItem();
            key();
            win();
            leftBtn.addEventListener('click', function() { move(-1, 0, 100); });
            upBtn.addEventListener('click', function() { move(0, -1, 300); });
            rightBtn.addEventListener('click', function() { move(1, 0, 200); });
            downBtn.addEventListener('click', function() { move(0, 1, 0); });
        }
    }, 30);
    
    function drawMap(){  /*��ʼ����ͼ*/
        var game=document.getElementById("game")
        var block=new Image();
        var ball=new Image();
        block.src="img/block.gif";
        ball.src="img/yelloball.png";
        for(var i=0;i<levels[level].length;i++) {
            for (var j = 0; j <levels[level][i].length; j++) {
                    context1.beginPath();
                    context1.drawImage(block, 35 * i, 35 * j,35,35);

            }
        }
    }
    function setItem(){ /*��ʼ��  ǽ�����ӡ���*/
        for(var i = 0; i<levels[level].length;i++){
            nowLevel[i]=[];
            for(var j=0;j<levels[level][i].length;j++){
                console.log(levels[level][i][j])
                nowLevel[i][j]=levels[level][i][j]
            }
        }
        boxs=[];
        balls=[]
        walls=[];
        blocks=[]
        me=null;
        time=0;
        changeX=0;
        changeY=0;
        timeOut=true;
        complete=0;

        for (var i=0;i<nowLevel.length;i++){
            for (var j=0;j<nowLevel[i].length;j++){
                block={
                    x:i*35,
                    y:j*35,
                    pic:new Image
                }
                block.pic.src="img/block.gif";
                blocks.push(block);
                if(nowLevel[i][j]==1){ /*��ǽ*/
                    aWall={
                        x:i*35,
                        y:j*35,
                        pic:new Image(),
                        realX:i,
                        realY:j
                    };
                    aWall.pic.src="img/wall.png";
                    walls.push(aWall);
                }
                if(nowLevel[i][j]==3){
                    aBox={
                        x:i*35,
                        y:j*35,
                        pic:new Image,
                        realX:i,
                        realY:j
                    };
                    aBox.pic.src="img/box.png";
                    boxs.push(aBox);

                }
                if(nowLevel[i][j]==2){
                    ball={
                        x:i*35,
                        y:j*35,
                        pic:new Image,
                    };
                    ball.pic.src="img/yelloball.png";
                    balls.push(ball);


                }
                if(nowLevel[i][j]==4){ /*����*/
                    me={
                        x:i*35,
                        y:j*35,
                        role:new Image(),
                        walkX:0,
                        walkY:0,
                        realX:i,
                        realY:j
                    };
                    me.role.src="img/role1.png";
                }
            }
        }
    }
    function drawLine(x){  /*����һ���е�����*/
        var i=0;
        while(block[i]){
            context1.beginPath();
            context1.drawImage(blocks[i].pic, blocks[i].x, blocks[i].y,35,35);
        }
        while(balls[i]) {
            if (balls[i].y/35 == x){
                context2.beginPath();
                context2.drawImage(balls[i].pic, balls[i].x, balls[i].y);
            }
            i++;
        }
        i=0;
        while(walls[i]) {
            if (walls[i].realY == x){
                context2.beginPath();
                context2.drawImage(walls[i].pic, walls[i].x, walls[i].y - 10);
            }
            i++;
        }
        i=0;
        while(boxs[i]) {
            if (boxs[i].realY == x){
                context2.beginPath();
                context2.drawImage(boxs[i].pic, boxs[i].x,boxs[i].y-10);/*����*/
            }
            i++;
        }
        i=0;
        if (me.realY == x){
            context2.beginPath();
            context2.drawImage(me.role,me.walkX,me.walkY,100,100,me.x-18,me.y-65,70,90);/*����*/
        }
    }
    function drawItem(){
        for(var i=0;i<16;i++){
            drawLine(i);
        }
    }
    document.onkeydown=function(){
        if(!next) return;
        if(time==0){
            switch (event.keyCode){
                case 37:
                    changeX=-1;
                    me.walkY=100
                    break;
                case 38:
                    changeY=-1;
                    me.walkY=300
                    break;
                case 39:
                    changeX=1;
                    me.walkY=200
                    break;
                case 40:
                    changeY=1;
                    me.walkY=0
                    break;
            }
        }

    };

    function key(){
        if (changeX!=0||changeY!=0){
            if(nowLevel[me.realX+changeX][me.realY+changeY]==0||nowLevel[me.realX+changeX][me.realY+changeY]==2){/*���ǰ���ǿյ�*/        /*���ֲ�*/
                me.y+=5*changeY;
                me.x+=5*changeX;
            }else if(nowLevel[me.realX+changeX][me.realY+changeY]==3){/*���ǰ��������*/
                if (nowLevel[me.realX+2*changeX][me.realY +2*changeY] == 0||nowLevel[me.realX+2*changeX][me.realY+2*changeY]==2) {/*�������ǰ���ǿյ�*/
                    me.y+=5*changeY;
                    me.x+=5*changeX;
                    for(var i=0;i<boxs.length;i++){
                        if(boxs[i].realX==me.realX+changeX&&boxs[i].realY==me.realY+changeY){
                            console.log("changeBox");
                            boxs[i].y+=5*changeY;
                            boxs[i].x+=5*changeX;

                        }
                    }
                }
            }
            time+=5;
            if(time>=7){
                me.walkX=100;
            }
            if(time>=14){
                me.walkX=200;
            }
            if(time>=21){
                me.walkX=300;
            }
            if(time>=35){
                me.walkX=0;
                time=0;
                if(nowLevel[me.realX+changeX][me.realY+changeY]!=1&&nowLevel[me.realX+changeX][me.realY+changeY]!=3){/*���ǰ���ǿյ�*/   /*�߼���*/
                    nowLevel[me.realX][me.realY]=0;/*�˺�����Ϊ����*/
                    nowLevel[me.realX+changeX][me.realY+changeY]=4;
                    me.realY+=changeY;
                    me.realX+=changeX;
                }else if(nowLevel[me.realX+changeX][me.realY+changeY]==3) {/*���ǰ��������*/
                    if (nowLevel[me.realX+2*changeX][me.realY +2*changeY] == 0||nowLevel[me.realX+2*changeX][me.realY+2*changeY]==2) {/*�������ǰ���ǿյ�*/
                        for(var i=0;i<boxs.length;i++){
                            if(boxs[i].realX==me.realX+changeX&&boxs[i].realY==me.realY+changeY){
                                boxs[i].realY+=changeY;
                                boxs[i].realX+=changeX;

                            }
                        }
                        nowLevel[me.realX+2*changeX][me.realY + 2*changeY]=3;
                        nowLevel[me.realX+changeX][me.realY + changeY]=4;
                        nowLevel[me.realX][me.realY]=0;
                        me.realY+=changeY;
                        me.realX+=changeX;

                    }
                }
                changeX=0;
                changeY=0;
                timeOut=true;
            }
        }
    }
    function win(){
        complete=0;
        for(var i=0;i<balls.length;i++){
            for(var j=0;j<boxs.length;j++){
                if(balls[i].x==boxs[j].realX*35&&balls[i].y==boxs[j].realY*35){
                    complete++;
                }
            }
        }
        if(complete==balls.length){
            next=false;
            loadQuestion();
            level++;
            setItem();
        }
        context1.fillStyle="rgba(255,255,255,1)";
        context1.font="bold 30px cursive";
        var level2=level+1
        context2.fillText("Level:"+level2,10,20)
    }
    document.getElementById("jump").onclick= function () {
        if(document.getElementById("guaQia").value>0&&document.getElementById("guaQia").value<100){
            level=document.getElementById("guaQia").value;
            level--;
            setItem()
        }else{
            document.getElementById("guaQia").value="num:from 0 to 99"
        }


    }
    document.getElementById("replay").onclick= function (){
        setItem()
    }
    // 获取按钮元素
    var leftBtn = document.getElementById('left-btn');
    var upBtn = document.getElementById('up-btn');
    var rightBtn = document.getElementById('right-btn');
    var downBtn = document.getElementById('down-btn');
    function move(dx, dy, dz) {
        changeX = dx;
        changeY = dy
        me.walkY = dz;
        // 这里可以添加代码来更新页面上的位置显示
    }
    // 为按钮添加点击事件处理函数
    if(0)
    {
        leftBtn.addEventListener('click', function() { move(-1, 0, 100); });
        upBtn.addEventListener('click', function() { move(0, -1, 300); });
        rightBtn.addEventListener('click', function() { move(1, 0, 200); });
        downBtn.addEventListener('click', function() { move(0, 1, 0); });
    }
    
        function loadQuestion() {
            currentQuestionIndex=Math.floor(Math.random() * 12);
            if (currentQuestionIndex < questions.length) {
                var quiz = document.getElementById('quiz');
                var questionElement = document.getElementById('question');
                var optionsElement = document.getElementById('options');
                var question = questions[currentQuestionIndex];

                questionElement.textContent = question.question;
                optionsElement.innerHTML = '';

                question.options.forEach(function(option) {
                    var optionElement = document.createElement('div');
                    optionElement.textContent = option;
                    optionElement.className = 'quiz-option';
                    optionElement.onclick = function() {
                        selectOption(option, question.answer);
                    };
                    optionsElement.appendChild(optionElement);
                });
            } else {
                alert('恭喜，已完成所有题目！');
            }
        }

        function selectOption(selectedOption, correctAnswer) {
            var options = document.querySelectorAll('.quiz-option');
            options.forEach(function(option) {
                option.style.backgroundColor = '#fff'; // 重置所有选项的背景色
            });
            var quizElement = document.getElementById('quiz');
            if (selectedOption === correctAnswer) {
                // 如果选择正确
                quizElement.style.backgroundColor = '#73e029'; // 答对绿色
                alert('回答正确！');
                next=true;
            } else {
                quizElement.style.backgroundColor = '#e02b2b'; // 答错红色
                alert('回答错误，请再试一次。'); // 如果选择错误，可以提醒用户重新选择
                loadQuestion();
            }
        }

        // 初始化页面时加载第一题
        //window.onload = loadQuestion;
};