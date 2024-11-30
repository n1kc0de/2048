var change=0;
var merge=0;
var consistent=0;
var cornerplace=0;
var counter2048=0;
const board = document.getElementById('board');
matrix=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
matrix[Math.floor(Math.random()*3)][Math.floor(Math.random()*3)]=2
matrix[Math.floor(Math.random()*3)][Math.floor(Math.random()*3)]=2
board.classList.add('board');
const bot = document.getElementById("bot");
function main(){
for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const square = document.createElement('div');
      square.classList.add('square');
      if(matrix[row][col]===0){
        square.classList.add('zero'); 
        } 
      if (matrix[row][col]>0){
        square.textContent=matrix[row][col];
        if(matrix[row][col]===2){
            square.classList.add('two'); 
        }
        if(matrix[row][col]===4){
            square.classList.add('four'); 
        }
        if(matrix[row][col]===8){
            square.classList.add('eight'); 
        }
        if(matrix[row][col]===16){
            square.classList.add('sixteen'); 
        }
        if(matrix[row][col]===32){
            square.classList.add('thirtytwo'); 
        }
        if(matrix[row][col]===64){
            square.classList.add('sixtyfour'); 
        }
        if(matrix[row][col]===128){
            square.classList.add('onetwoeight'); 
        }
        if(matrix[row][col]===256){
            square.classList.add('twofivesix'); 
        }
        if(matrix[row][col]===512){
            square.classList.add('fivetwelve'); 
        }
        if(matrix[row][col]===1024){
            square.classList.add('onetwofour'); 
        }
        if(matrix[row][col]===2048){
            square.classList.add('twofoureight'); 
            counter2048++;
            console.log(counter2048);
        }
      }
      board.appendChild(square);
        }
    }   
}
function cleanse(){
  const square = document.querySelectorAll('.square');
  square.forEach(square => {
    square.remove();
  });
}
function uplogic(){
    for(let col=0; col<4;col++){
        if (matrix[0][col]===0){
            matrix[0][col]=matrix[1][col];
            matrix[1][col]=matrix[2][col];
            matrix[2][col]=matrix[3][col];
            matrix[3][col]=0;
            
        }
        if (matrix[1][col]===0){
            matrix[1][col]=matrix[2][col];
            matrix[2][col]=matrix[3][col];
            matrix[3][col]=0;
           
        }
        if (matrix[2][col]===0){
            matrix[2][col]=matrix[3][col];
            matrix[3][col]=0;
           
        }
      }
}
function upmerge(){
    for(let col=0; col<4;col++){
        if (matrix[0][col]===matrix[1][col]){
            matrix[0][col]=2*matrix[1][col];
            matrix[1][col]=0;
            merge++;
        }
        if (matrix[1][col]===matrix[2][col]){
            matrix[1][col]=2*matrix[2][col];
            matrix[2][col]=0;
            merge++;
        }
        if (matrix[2][col]===matrix[3][col]){
            matrix[2][col]=2*matrix[3][col];
            matrix[3][col]=0;
            merge++;
        }
    }
}
function leftlogic(){
    for(let row=0; row<4;row++){
        if (matrix[row][0]===0){
            matrix[row][0]=matrix[row][1];
            matrix[row][1]=matrix[row][2];
            matrix[row][2]=matrix[row][3];
            matrix[row][3]=0;
        }
        if (matrix[row][1]===0){
            matrix[row][1]=matrix[row][2];
            matrix[row][2]=matrix[row][3];
            matrix[row][3]=0;
        }
        if (matrix[row][2]===0){
            matrix[row][2]=matrix[row][3];
            matrix[row][3]=0;
        }
      }
}
function leftmerge(){
    for(let row=0; row<4;row++){
        if (matrix[row][0]===matrix[row][1]){
            matrix[row][0]=2*matrix[row][1];
            matrix[row][1]=0;
            merge++;
        }
        if (matrix[row][1]===matrix[row][2]){
            matrix[row][1]=2*matrix[row][2];
            matrix[row][2]=0;
            merge++;
        }
        if (matrix[row][2]===matrix[row][3]){
            matrix[row][2]=2*matrix[row][3];
            matrix[row][3]=0;
            merge++;
        }
    }
}
function downlogic(){
    for(let col=0; col<4;col++){
        if (matrix[3][col]===0){
            matrix[3][col]=matrix[2][col];
            matrix[2][col]=matrix[1][col];
            matrix[1][col]=matrix[0][col];
            matrix[0][col]=0;
        }
        if (matrix[2][col]===0){
            matrix[2][col]=matrix[1][col];
            matrix[1][col]=matrix[0][col];
            matrix[0][col]=0;
        }
        if (matrix[1][col]===0){
            matrix[1][col]=matrix[0][col];
            matrix[0][col]=0;
        }
      }
}
function downmerge(){
    for(let col=0; col<4;col++){
        if (matrix[3][col]===matrix[2][col]){
            matrix[3][col]=2*matrix[2][col];
            matrix[2][col]=0;
            merge++;
        }
        if (matrix[2][col]===matrix[1][col]){
            matrix[2][col]=2*matrix[1][col];
            matrix[1][col]=0;
            merge++;
        }
        if (matrix[1][col]===matrix[0][col]){
            matrix[1][col]=2*matrix[0][col];
            matrix[0][col]=0;
            merge++;
        }
    }
}
function rightlogic(){
    for(let row=0; row<4;row++){
        if (matrix[row][3]===0){
            matrix[row][3]=matrix[row][2];
            matrix[row][2]=matrix[row][1];
            matrix[row][1]=matrix[row][0];
            matrix[row][0]=0;
           
        }
        if (matrix[row][2]===0){
            matrix[row][2]=matrix[row][1];
            matrix[row][1]=matrix[row][0];
            matrix[row][0]=0;
            
        }
        if (matrix[row][1]===0){
            matrix[row][1]=matrix[row][0];
            matrix[row][0]=0;
        }
      }
}
function rightmerge(){
    for(let row=0; row<4;row++){
        if (matrix[row][3]===matrix[row][2]){
            matrix[row][3]=2*matrix[row][2];
            matrix[row][2]=0;
            merge++;
        }
        if (matrix[row][2]===matrix[row][1]){
            matrix[row][2]=2*matrix[row][1];
            matrix[row][1]=0;

            merge++;
        }
        if (matrix[row][1]===matrix[row][0]){
            matrix[row][1]=2*matrix[row][0];
            matrix[row][0]=0;
            merge++;
        }
    }
}
function insert() {
    const emptyCells = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (matrix[i][j] === 0) {
          emptyCells.push([i, j]);
        }
      }
    }
  
    if (emptyCells.length > 0) {
      const [a, b] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      matrix[a][b] = Math.random() < 0.9 ? 2 : 4;
    }
  }
function up(){
    uplogic();
    uplogic();
    uplogic();
    upmerge();
    uplogic();
}
function down(){
    downlogic();
    downlogic();
    downlogic();
    downmerge();
    downlogic();
}
function left(){
    leftlogic();
    leftlogic();
    leftlogic();
    leftmerge();
    leftlogic();
}
function right(){
    rightlogic();
    rightlogic();
    rightlogic();
    rightmerge();
    rightlogic();
}
function comparematrix(matrix,replace){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (matrix[i][j]!=replace[i][j]){
                change=1;
            }
        }
    }
}
function cons(replace){
    for (let i = 1; i < 3; i++) {
        for (let j = 1; j < 3; j++) {
            if (matrix[i][j]===matrix[i+1][j] || matrix[i][j]===matrix[i-1][j]|| matrix[i][j]===matrix[i][j-1]|| matrix[i][j]===matrix[i][j+1]){
                consistent++;
            }
        }
    }
    if (matrix[0][0]===matrix[0][1]||matrix[0][0]===matrix[1][0]){
        consistent=consistent+3;
    }
    for (let i = 1; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
            if (matrix[0][0]>matrix[i][j]){
                cornerplace++;
            }else{
                cornerplace=cornerplace-16;

            }
            if (matrix[1][0]>matrix[i][j]||matrix[1][0]===matrix[i][j]){
                cornerplace=cornerplace+1;
            }else if(!i===0 && !j===0){
                cornerplace=cornerplace-8;
            }
            if (matrix[1][0]<matrix[0][0]){
                cornerplace=cornerplace+1;
            }
            if (matrix[2][0]>matrix[i][j]){
                cornerplace=cornerplace+1;
            }else if((!i===0 && !j===0)&&(!i===1 && !j===0)){
                cornerplace=cornerplace-4;
            }
            if (matrix[3][0]>matrix[i][j]){
                cornerplace=cornerplace+1;
            }else if((!i===0 && !j===0)&&(!i===1 && !j===0)&&(!i===2 && !j===0)){
                cornerplace=cornerplace-2;
            }
    
        }
    }
    if (matrix[0][0]>replace[0][0]){
        cornerplace=cornerplace+3;
    }
}
function botmove(){
    const replace = matrix.map(row => row.slice());
    change=0;
    merge=0;
    consistent=0;
    cornerplace=0;
    up();
    cons(replace);
    comparematrix(matrix,replace);
    const up1=(merge*5+consistent+cornerplace+1)*change+1000*change
    matrix=replace.map(row => row.slice());
    change=0;
    merge=0;
    consistent=0;
    cornerplace=0;
    left();
    cons(replace);
    comparematrix(matrix,replace);
    const left1=(merge*5+consistent+cornerplace+1)*change+1000*change
    matrix=replace.map(row => row.slice());
    change=0;
    merge=0;
    consistent=0;
    cornerplace=0;
    down();
    cons(replace);
    comparematrix(matrix,replace);
    const down1=(merge*5+consistent*2+cornerplace+1)*change+1000*change
    matrix=replace.map(row => row.slice());
    change=0;
    merge=0;
    consistent=0;
    cornerplace=0;
    right();
    cons(replace);
    comparematrix(matrix,replace);
    const right1=(merge*5+consistent+cornerplace+1)*change+1000*change
    matrix=replace.map(row => row.slice());
    if (Math.max(up1,left1,down1,right1)===up1){
        up();
    }else if(Math.max(up1,left1,down1,right1)===left1){
        left();
    }else if(Math.max(up1,left1,down1,right1)===down1){
        down();
    }else if(Math.max(up1,left1,down1,right1)===right1){
        right();     
    }
    comparematrix(matrix,replace);
    if (change===1){
        insert();
    }

    cleanse();
    main();
}
main();
document.addEventListener('keydown', function(event) {
    change=0;
    const replace = matrix.map(row => row.slice());
    if (event.key === "ArrowUp") {
      up();
    } else if (event.key === "ArrowDown") {
      down();
    } else if (event.key === "ArrowLeft") {
      left();
    } else if (event.key === "ArrowRight") {
      right();
    }
    comparematrix(matrix,replace);
    if (change===1){
        insert();
    }
    cleanse();
    main();
  });
document.addEventListener('keydown', function(event) {
    if (event.key === " ") {
        botmove();
    }
});
bot.addEventListener('click', function(event) {
    matrix=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    matrix[Math.floor(Math.random()*3)][Math.floor(Math.random()*3)]=2;
    matrix[Math.floor(Math.random()*3)][Math.floor(Math.random()*3)]=2;
    for (i=1;i<2000;i++){
           botmove();
        }
    });