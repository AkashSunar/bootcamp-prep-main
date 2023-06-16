// YOUR CODE BELOW
let ticTacToe={
    board:[[null,null,null],[null,null,null],[null,null,null]],
    move:function(arg1,arg2,arg3){
        if(this.board[arg2][arg3]===null){
            this.board[arg2][arg3]=arg1
        }
        return this.board;
    },
    clear:function(){
        this.board=[[null,null,null],[null,null,null],[null,null,null]]
        return this.board;
    }
}
