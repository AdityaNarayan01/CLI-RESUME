var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type : 'list',
        name : 'selection',
        choices : ['About','Skills', 'Academics','Projects','Contact']
    }

  ])
  .then(function(ans) {
    // Use user feedback for... whatever!!
    if(ans.selection == 'About'){
        console.log("This is about section")
    }
    else if(ans.selection == 'Skills'){
        console.log("This is skills section")
    }
    else if(ans.selection == 'Academics'){
        console.log("This is academics section")
    }
    else if(ans.selection == 'Projects'){
        console.log("This is projects section")
    }
    else if(ans.selection == 'Contact'){
        console.log("This is contact section")
    }
  })
