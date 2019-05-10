//問題の作成　⇒　データベースに実装したい
var mondailist = [
    {que:'次の単語の意味を選びなさい',quec:'「difference」',ans1:'議論する',ans2:'違い',ans3:'難しい',ans4:'深い'},
    {que:'次の方程式を解きなさい',quec:'「5x-3=8x+21」',ans1:'x=-6',ans2:'x=-8',ans3:'x=8',ans4:'x=6'},
    {que:'次の単語の意味を選びなさい',quec:'「横切って」',ans1:'across',ans2:'wrong',ans3:'straight',ans4:'through'},
    {que:'次の計算をしなさい',quec:'「15%の食塩水300gの中に食塩は何gありますか？」',ans1:'90g',ans2:'20g',ans3:'200g',ans4:'45g'},
    {que:'次の計算をしなさい',quec:'「30gの食塩で15%の食塩水を作ると、何gの食塩水ができますか。」',ans1:'200g',ans2:'4.5g',ans3:'45g',ans4:'20g'},
    {que:'次の方程式を解きなさい',quec:'「x:8=5:2」',ans1:'X=3.5',ans2:'x=11',ans3:'x=20',ans4:'x=38'},
    {que:'次の計算をしなさい',quec:'「√3×√5+√6」',ans1:'√15+√6',ans2:'√14',ans3:'√21',ans4:'21'},
    {que:'次の式を展開しなさい',quec:'「(x+5)(X-2)」',ans1:'x^2-10x-10',ans2:'x^2+3x-10',ans3:'x^2-3x-10',ans4:'x^2-3x+3'},
    {que:'次の式を因数分解しなさい',quec:'「x^2+8x+16」',ans1:'(x-4)^2',ans2:'(x+2)(x+8)',ans3:'(x-8)(x-2)',ans4:'(x+4)^2'},
    {que:'次の単語の意味を選びなさい',quec:'「decrease」',ans1:'減少する',ans2:'棒',ans3:'～に食べ物を与える',ans4:'手をたたく'},
    {que:'次の単語の意味を選びなさい',quec:'「confuse」',ans1:'～を焼く',ans2:'幼稚園',ans3:'～を混乱させる',ans4:'子犬'},
    {que:'次の問に答えなさい',quec:'「徳川家8代目将軍は誰ですか？」',ans1:'徳川家継',ans2:'徳川家光',ans3:'徳川家定',ans4:'徳川吉宗'},
    {que:'次の問に答えなさい',quec:'「楔形文字が使用されていた古代文明はどこですか？」',ans1:'中国文明',ans2:'メソポタミア文明',ans3:'エジプト文明',ans4:'インダス文明'},
    {que:'次の単語の意味を選びなさい',quec:'「目的」',ans1:'patient',ans2:'disagree',ans3:'purpose',ans4:'tradition'},
    {que:'次の単語の意味を選びなさい',quec:'「ほとんど」',ans1:'almost',ans2:'something',ans3:'little',ans4:'most'},
    {que:'次の問に答えなさい',quec:'「日本に最初に来たヨーロッパ人が到着した場所はどこですか？」',ans1:'佐渡島',ans2:'函館',ans3:'江戸',ans4:'種子島'},
    {que:'次の問に答えなさい',quec:'「本能寺の変の後、豊臣秀吉と明智光秀が戦った天下分け目の争いを何といいますか？」',ans1:'桶狭間の戦い',ans2:'関ケ原の戦い',ans3:'鳥羽伏見の戦い',ans4:'山崎の戦い'},
    {que:'次の問に答えなさい',quec:'「個体→液体→気体のように変化することを何といいますか？」',ans1:'化学変化',ans2:'質量変化',ans3:'状態変化',ans4:'物質変化'},
    {que:'次の問に答えなさい',quec:'「炭酸アンモニウムを分解すると、アンモニアと水と何に分解しますか？」',ans1:'炭素',ans2:'酸素',ans3:'二酸化炭素',ans4:'炭素'},
    {que:'次の問に答えなさい',quec:'「実験で液体が発生した場合、水と判断できるものは何ですか？」',ans1:'リトマス紙',ans2:'BTB溶液',ans3:'塩化コバルト紙',ans4:'紫キャベツ'},
    {que:'次の単語の意味を選びなさい',quec:'「～に到着する」',ans1:'arrive at',ans2:'arrive on',ans3:'arrive for',ans4:'arrive with'},
    {que:'次の単語の意味を選びなさい',quec:'「～を信じる」',ans1:'believe on',ans2:'believe in',ans3:'believe at',ans4:'believe for'},
    {que:'次の単語の意味を選びなさい',quec:'「～偶然でくわす」',ans1:'come from',ans2:'come back',ans3:'come across',ans4:'come into'},
    {que:'次の単語の意味を選びなさい',quec:'「理解する」',ans1:'find in',ans2:'find out',ans3:'find down',ans4:'find at'},
    {que:'次の単語の意味を選びなさい',quec:'「（乗り物に）乗る」',ans1:'get out',ans2:'get in',ans3:'get off',ans4:'get on'},
    {que:'次の単語の意味を選びなさい',quec:'「けれども」',ans1:'ahead',ans2:'though',ans3:'thought',ans4:'throw'},
    {que:'次の単語の意味を選びなさい',quec:'「快適な」',ans1:'happy',ans2:'cool',ans3:'platform',ans4:'comfortable'},
    {que:'次の単語の意味を選びなさい',quec:'「公平な」',ans1:'fair',ans2:'air',ans3:'flat',ans4:'good'},
    {que:'次の単語の意味を選びなさい',quec:'「公共の」',ans1:'public',ans2:'pumpkin',ans3:'simple',ans4:'stupid'},
    {que:'次の単語の意味を選びなさい',quec:'「想像する」',ans1:'create',ans2:'make',ans3:'think',ans4:'imagine'}
];


//答えの作成　⇒　データベースに実装したい
var mondaicorrect = [
    'ans2',
    'ans2',
    'ans1',
    'ans4',
    'ans1',
    'ans3',
    'ans1',
    'ans2',
    'ans4',
    'ans1',
    'ans3',
    'ans4',
    'ans2',
    'ans3',
    'ans1',
    'ans4',
    'ans4',
    'ans3',
    'ans3',
    'ans3',
    'ans1',
    'ans2',
    'ans3',
    'ans2',
    'ans4',
    'ans2',
    'ans4',
    'ans1',
    'ans1',
    'ans4'
];


//tableの作成
var tr = document.createElement('tr');
var table = document.querySelector('.tbl');
for(var i = 0; i < 5; i++) {
    var tr = document.createElement('tr');
    for(var j = 0; j < 2; j++) {
        var td = document.createElement('td');
        td.textContent = 'Question.'+(i+1);
        tr.appendChild(td);
    }
table.appendChild(tr);
}


//下から上へ、イベントの連続
var checkAnswer = function() {
    for(var i = 0; i <5; i++) {
        for(var j =0; j < 1; j++) {
            if(mondaianswer[i] === mondaicorrect[numm[i]]) {
                table.rows[i].cells[1].textContent = '〇';
            } else {
                table.rows[i].cells[1].textContent = '✖';
            }
        }
    }
    $('.finish').slideToggle();
    c = 1;
    a = 0;
    b = 1;
    d = 0;
}


var c = 1;
var mondai2 = function() {
    if(c < 5) {
        num = Math.floor(Math.random()*30);
        numm[d] = num;
        d++;
        var monX = mondailist[num];
        $('.num').text(str+b);
        b++;
        $('.que').text(monX.que);
        $('.quec').text(monX.quec);
        $('.ansc1').text(monX.ans1);
        $('.ansc2').text(monX.ans2);
        $('.ansc3').text(monX.ans3);
        $('.ansc4').text(monX.ans4);
        countdown2(10);
        c++;
    } else {
        $('.mein').slideToggle();
        checkAnswer();
    }
}


var mondaianswer = [];
var a = 0;
var id;
var countdown2 = function (count) {
    var countup = function(){
        $('.count2').text(count);
        count -= 1;
        id = setTimeout(countup, 1000);
        if(count < 0) {
            clearTimeout(id);
            mondaianswer[a] = document.getElementById('form').ans.value;
            a++;
            mondai2();
        }
    }
       // $('.buttonnn').on('click',function(){
         //   clearTimeout(id);
         //   mondaianswer[a] = document.getElementById('form').ans.value;
         //   a++;
         //   mondai2();
       // });
    countup();
};

var b = 1;
var d =0;
var num;
var numm = [];
var str = 'Question.';
var mondai = function() {
    num = Math.floor(Math.random()*15);
    var monX = mondailist[num];
    numm[d] = num;
    d++;
    $('.mein').slideToggle();
    $('.num').text(str+b);
    b++;
    $('.que').text(monX.que);
    $('.quec').text(monX.quec);
    $('.ansc1').text(monX.ans1);
    $('.ansc2').text(monX.ans2);
    $('.ansc3').text(monX.ans3);
    $('.ansc4').text(monX.ans4);
    countdown2(10);
}


var mondaiStart = function() {
    $('.startm').slideToggle();
    mondai();
}


var countdown = function (count) {
    var countup = function(){
        $('.count1').text(count);
        count -= 1;
        id = setTimeout(countup, 1000);
        if(count < 0) {
            clearTimeout(id);
            mondaiStart();
        }
    };
    countup();
};


$(function(){
    $('.start').on('mouseover mouseout',function(){
        $('.start').toggleClass('rrr');
    });
    $('.start').on('click',function(){
        $('.top').slideToggle();
        $('.startm').slideToggle();
        countdown(5);
    });
});


$(function(){
    $('.returnt').on('mouseover mouseout',function(){
        $('.returnt').toggleClass('rrr');
    });
    $('.returnt').on('click',function(){
        $('.finish').slideToggle();
        $('.top').slideToggle();
    });
});


//　初期状態
$(function(){
    setInterval(function(){
        $('.start').fadeOut(800,
            function(){
                $(this).fadeIn(800)
            }
        );
    },2000);
   　setInterval(function(){
        $('.returnt').fadeOut(800,
            function(){
                $(this).fadeIn(800)
            }
        );
    },2000);
});
