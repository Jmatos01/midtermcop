//Stack original 
class Stack {

    constructor(){
        this.item = [];
    }

    push(num){
        this.item.push(num);
        if (this.item.length < 21)
        return "Space Exceeded";
        
    }
    forEach(){
    this.item.forEach(function(element) {
    bst.push(element);
    });
    }

}



let stack1 = new Stack();
let stack2 = new Stack();
let stack3 = new Stack();

stack1.push(5);
stack1.push(10);
stack1.push(15);
stack1.push(20);
stack1.push(25);
stack1.push(30);
stack1.push(35);
stack1.push(40);
stack1.push(45);
stack1.push(50);


stack2.push(6);
stack2.push(12);
stack2.push(18);
stack2.push(24);
stack2.push(28);
stack2.push(34);
stack2.push(40);
stack2.push(46);
stack2.push(52);
stack2.push(58);


stack3.push(8);
stack3.push(16);
stack3.push(24);
stack3.push(30);
stack3.push(36);
stack3.push(45);
stack3.push(56);
stack3.push(65);
stack3.push(79);
stack3.push(80);




//Node


// function Node(id, value){
//     this.id = id;
//     this.value;
//     this.left = null;
//     this.right = null;
//     this.height = 0;
//     this.duplicates = 0;
// }



// Node.prototype.insert = function(value){
//     if(value < this.value && this.left){
//         this.height--;
//         if(this.left){
//            return this.left.insert(value);
//         }
//         this.left = node;
//     }
//     if(value > this.value && this.left){
//         this.height++;
//         if(this.right){
//            return this.right.insert(value);
//         }
//         this.right = node;
//     }
// }

// // Bi-nary Search Tree



// function BinarySearchTree(value){
//     this.root = null;
//     this.length = 0;
//     this.nid = 0;
// }



// BinarySearchTree.prototype.insert = function(value){
//     if(!value) return;

//     let node = new Node(this.nid++, value);

//     if(!this.root){
//         this.root = node;
//         return this.length;
//     }

//     this.root.insert(node);
// }

// const bst = new BinarySearchTree();

// bst.insert(54);
// bst.insert(69);
// bst.insert(89);
// bst.insert(90);
// bst.insert(10);
// bst.insert(58);
// bst.insert(45);
// bst.insert(78);




// Node

function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}


Node.prototype.insert = function(value){
    if(value < this.value && this.left){
        this.height--;
        if(this.left){
           return this.left.insert(value);
        }
        this.left = node;
    }
    if(value > this.value && this.left){
        this.height++;
        if(this.right){
           return this.right.insert(value);
        }
        this.right = node;
    }
    if(node.value === this.value){
        this.duplicates++;
    }
}
//Binary Search Tree

function BinarySearchTree(){
    this.root = null;
}

BinarySearchTree.prototype.push = function(val){
    var root = this.root;
 
    if(!root){
       this.root = new Node(val);
       return;
    }
 
    var currentNode = root;
    var newNode = new Node(val); 
 
    while(currentNode){
       if(val < currentNode.value){
           if(!currentNode.left){
              currentNode.left = newNode;
              break;
           }
           else{
              currentNode = currentNode.left;
         }
      }
      else{
          if(!currentNode.right){
             currentNode.right = newNode;
             break;
          }
          else{
             currentNode = currentNode.right;
          }
      }
   }
 
}
         

var bst = new BinarySearchTree();

bst.push(stack1.forEach());
bst.push(stack2.forEach());
bst.push(stack3.forEach());


const topBtn = (document.getElementById("topten-btn").onclick = function() {
    topTenBtn();
  });
  const searchBtn = (document.getElementById("number_input_btn").onclick = function() { 
      searchBtn1();
  });
  const playerBtn = (document.getElementById("all_players_btn").onclick = function(arr) {
    allPlayersBtn(arr);
  });
  
  
  
  
  function topTenBtn(arr) {
    document.getElementById("output").innerHTML = "YOU CLICKED ME!";
    //Use recursion to get there top ten
  }
  
  function searchBtn1(arr) {
    document.getElementById("output").innerHTML = "YOU CLICKED ME!";
    // use a find function for this. 
  }
  
  function allplayersBtn (arr){
      for (let i=0; i < arr.length; i++){
          var value = arr[i];        
      }
      return value;
      console.log(value);
  }