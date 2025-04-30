//getting all the dom elements here 
const addAmount=document.getElementById('amount');
const addExpenseDesc=document.getElementById('desc');
const addExpenseButton=document.getElementById('expense-btn');
const expenseList=document.getElementById('expense-list');


function addExpense() {
    const desc=addExpenseDesc.value;
    const amount=addAmount.value;
    //checking for nonempty values
    if(desc && amount){
        //create the new list item
        const li=document.createElement('li');
        //assign it with values
        li.textContent=desc+' '+amount+''+'RS';
        //adding to HTML

        //delete function:
        const deleteBtn=document.createElement('button');
        deleteBtn.textContent='Delete';
        deleteBtn.addEventListener('click',function(){
            alert('do you want to delete this expense')
            expenseList.removeChild(li);
        });
        li.appendChild(deleteBtn);
        expenseList.appendChild(li);

        //clearing the input fields after adding
        addExpenseDesc.value='';
        addAmount.value='';
    }else{
        alert('please enter both the inputs !!!!')
    }
    }
    addExpenseButton.addEventListener('click',addExpense)


