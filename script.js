//getting all the dom elements here 
const addAmount=document.getElementById('amount');
const addExpenseDesc=document.getElementById('desc');
const addExpenseButton=document.getElementById('expense-btn');
const expenseList=document.getElementById('expense-list');

//adding the function addExpense
function addExpense() {
    const desc=addExpenseDesc.value;
    const amount=addAmount.value;
    //checking for nonempty values
    if(desc && amount){
        //create the new list item
        const li=document.createElement('li');
        //assign it with values or adding the text
        li.textContent=desc+' '+amount+''+'RS';
        //adding to HTML

        //delete button creation
        const deleteBtn=document.createElement('button');
        deleteBtn.textContent='Delete';
        //creating an event listener for delete btn
        deleteBtn.addEventListener('click',function(){
            alert('do you want to delete this expense')
            expenseList.removeChild(li);
        
        });
        // let newDiv=document.createElement('div');// new one
        // newDiv.textContent='i am new div';////new one 
        li.appendChild(deleteBtn);
        expenseList.appendChild(li);
        // body=document.querySelector('body');///new one
        // body.appendChild(newDiv);// new one
        
        
        //clearing the input fields after adding
        addExpenseDesc.value='';
        addAmount.value='';
    }else{
        alert('please enter both the inputs !!!!')
    }
    
    }
    addExpenseButton.addEventListener('click',addExpense)

