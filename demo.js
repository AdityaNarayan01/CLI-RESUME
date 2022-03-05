var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type : 'list',
        name : 'selection',
        choices : ['choice 1','choice 2']
    }

  ])
  .then(function(ans) {
    // Use user feedback for... whatever!!
    if(ans.selection == 'choice 1'){
        console.log("choice 1 i selected")
    }
    else{
        console.log("choice 2 is selected")
    }
  })
