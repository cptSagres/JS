/**********************************************
                vars
**********************************************/
/*
var fname = 'John';

var lname = 'Smith';
var age = 28;
var fullage = true;
var job;

console.log(fname+' '+lname+' '+age);
console.log(age == 29);
if(job == undefined)
  job = "teacher";
console.log(job);
*/
/**********************************************
                Variable stuff
**********************************************/
/*
var fName = 'John';
var age = 28;

var job,isMarried;
job = 'Teacher';
isMarried = 'False';

//alert('name: '+fName+'\nage: '+age);
var lastname;
lastname = prompt('lname ask');
console.log(lastname);
*/
/**********************************************
                operators stuff
**********************************************/
/*
var year,bornJ,bornM,ageJ,ageM;
year = 2018;
ageJ = 28;
ageM = 33;
bornJ = year-ageJ;
bornM = year-ageM;
console.log(bornJ);
console.log(year+2);
console.log(year*2);
console.log(year/10);
console.log(ageJ > ageM);
console.log(ageM > ageJ);

//type of operators
console.log(typeof(ageJ > ageM));
console.log(typeof(ageJ));
console.log(typeof('dfkasjfd'));
var x;
console.log(typeof(x));
*/
/**********************************************
                Operator stuff
**********************************************/
/*
var year,yearJ,bornJ,bornM,ageJ,ageM;
year = 2018;
yearJ = 1989;
var fAge =18;
console.log(year-yearJ>=fAge);

 ageJ = year-yearJ;
 ageM = 35;
var average = (ageJ+ageM)/2;
console.log(average);

//stuff
var x,y;
x = y = (3+5)*4-6;
console.log(x,y);

x *= 2;
console.log(x);
x +=10;
console.log(x);
x++;
console.log(x);
*/
/**********************************************
                challenge1
**********************************************/
/*
var mJ,hJ,mM,hM,jBMI,mBMI;
mJ=prompt('j mass');
hJ=prompt('j height');
mM=prompt('M mass');
hM=prompt('M height');
console.log('Is J > M:'+(bmi(mJ,hJ)<bmi(mM,hM)));
console.log(bmi(mJ,hJ),bmi(mM,hM));
function bmi(m, h){
  return m/(h*h);
}
*/
/**********************************************
                SSZZZZ if elses SSZZZZ
**********************************************/
/**********************************************
                stuffs
**********************************************/
/*
var fName = 'John';
var age =16;
 var drink  =  age >= 18 ? 'beer' : 'juice';
 console.log(drink);

 var job = 'asdas';
 switch(job){
    case 'Teacher':
    case 'XDD':
      console.log('stuff');
      break;
    case 'Driver':
      console.log('dsfnsakdfa');
      break;
    default:
      console.log('xsadna');
      break;
 }*/
 /**********************************************
                 Truthy
 **********************************************/
/*
 //falsy = undefined,null,0, '',NaN
 //truthy = Not Falsy values
 var height;
 height=23;
 if(height || height === 0){
   console.log('var is def');
 }
   else {
     console.log('not def');
}
if(height === '23')
console.log('equals');
else {
  console.log('232');
}
*/
/**********************************************
                Challenge 2
**********************************************/
/*
var jT = (89+120+103)/3;
var mT = (116+94+123)/3;
var maT =(97+113+105)/3;

switch(true){
    case jT > mT && jT > maT:
      console.log('john wins: '+jT);
      break;
    case mT >jT && mT > maT:
      console.log('mark wins:'+ mT);
      break;
    case maT > jT && maT > mT:
      console.log('mary wins');
      break;
    default:
      console.log('draw');
      break;
}
*/
/**********************************************
                function
**********************************************/
/**********************************************
                Array
**********************************************/
/*
var n = ['ab','ac','ad'];
var y= new Array(1990,1991,1992);

console.log(n);
//dif
var j = ['john','smith',1990,'teacher',false];

j.push('blue');
j.unshift('mister');
j.pop();
j.pop();
j.shift();
console.log(j);
console.log(j.indexOf(1991));
j.remove(2);
console.log(j);
*/
/**********************************************
                Challenge 3
**********************************************/
/*
var tips = new Array(123,48,268);
var tip = new Array();
tip.push(tips[0]);
tip.push(tipss(tips[0]));
tip.push(tips[1]);
tip.push(tipss(tips[1]));
tip.push(tips[2]);
tip.push(tipss(tips[2]));
console.log(tip[0],tip[1]);
console.log(tip[2],tip[3]);
console.log(tip[4],tip[5]);

function tipss(x){
  switch(true){
      case x < 50:
       return x*0.2;
      case x >=50 && x<=200:
        return x*0.15;
      default:
        return x*0.10;
  }
}
*/
/**********************************************
                OBJECTS
**********************************************/
/*
var John = {
  name: 'John',
  lastName: 'Smith',
  birth: 1990,
  family: ['Jane','Mark','Bob','Emily'],
  job: 'Teacher',
  isMarried: false
};
console.log(John.name);
console.log(John['lastName']);
var x = 'birth';
console.log(John[x]);
John.job = 'designer';
console.log(John.job);

var jane = new Object();
jane.name = 'Jane';
jane.birth = '1990';
jane.lastname = 'smith';
console.log(jane);
*/
/**********************************************
                OBJECTS n functions
**********************************************/
/**
var John = {
  name: 'John',
  lastName: 'Smith',
  birth: 1992,
  family: ['Jane','Mark','Bob','Emily'],
  job: 'Teacher',
  isMarried: false,
  calcAge:function(birth){
    this.age = 2018-this.birth;
  }
};
John.calcAge();
console.log(John);
*/
/**********************************************
                Challenge 4
**********************************************/
/*
var john = {
  name: 'John',
  mass: 95,
  height: 1.95,
  calcBMI:function(){
    this.BMI = this.mass / (this.height * this.height);
  }
};

var mark = {
  name: 'Mark',
  mass: 78,
  height: 1.69,
  calcBMI:function(){
  this.BMI = this.mass / (this.height * this.height);}
};
john.calcBMI();
mark.calcBMI();

console.log(mark.BMI>john.BMI ? 'mark big ' + mark.BMI: 'john big '+ john.BMI);
*/
/**********************************************
                LOOP
**********************************************/
/*
for(var i = 0; i < john.length;i++){
  console.log(john[i]);
}

var i = 0;
while(i < john.length){
  console.log(john[i]);
  i++;
}

var john = ['John','smith',1990];

for(var i = 0; i < john.length;i++){
  if (typeof john[i] !== 'string')continue;
  console.log(john[i]);
}
*/
/**********************************************
                Challenge 5
**********************************************/
/*
var j = {
    name: 'John',
    bills: [124,48,268,180,42],
    calcTips:function(){
      this.tips = new Array();
      for(var i = 0; i < this.bills.length;i++){
        switch(true){
          case this.bills[i]<50  :
            this.tips.push(this.bills[i]*0.2);
            break;
          case this.bills[i]>=50 && this.bills[i]<200 :
             this.tips.push(this.bills[i]*0.15);
             break;
          default:
            this.tips.push(this.bills[i]*0.1);
            break;
        }
      }
    },
    calTotal:function(){
      this.spent = new Array();
      for(var i = 0; i < this.bills.length;i++)
          this.spent.push(this.bills[i]+this.tips[i]);
    },
    calAverage:function(){
      this.sAv= 0;
      for(var i = 0; i < this.tips.length;i++){
        this.sAv+=this.tips[i];}
      this.sAv=this.sAv/this.tips.length;
    }
}
var m = {
    name: 'Mark',
    bills: [77,375,110,45],
    calcTips:function(){
      this.tips = new Array();
      for(var i = 0; i < this.bills.length;i++){
        switch(true){
          case this.bills[i]<100 :
            this.tips.push(this.bills[i]*0.2);
            break;
          case this.bills[i]>=100 && this.bills[i]<300 :
             this.tips.push(this.bills[i]*0.1);
             break;
          default:
            this.tips.push(this.bills[i]*0.3);
            break;
        }
      }
    },
    calTotal:function(){
      this.spent = new Array();
      for(var i = 0; i < this.bills.length;i++)
          this.spent.push(this.bills[i]+this.tips[i]);
    },
    calAverage:function(){
      this.sAv= 0;
      for(var i = 0; i < this.tips.length;i++){
        this.sAv+=this.tips[i];}
      this.sAv=this.sAv/this.tips.length;
    }
}
j.calcTips();
j.calTotal();
j.calAverage();
m.calcTips();
m.calTotal();
m.calAverage();

console.log(m.sAv > j.sAv ? 'mark spent more '+ m.sAv : 'john spent more '+j.sAv);
console.log(j,m);
*/
