var inquirer = require('inquirer');
const cp = require('child_process');
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
        console.log(`I am a Third Year Computer Science student enrolled in SRM Institute Of Technology, India. I am an Web Developer with a keen
        interest in MERN stack . I am currently working on various web app,  automation and web scrapping related projects . I am a keen learner and
        always devote myself to improve my projects and quality of my projects. I am a hard worker and am devoted to produce industry
        level projects that solve problems all around the world`)
    }
    else if(ans.selection == 'Skills'){
        console.log("C, C++, JavaSCript, Data-Strucre and Algorithms ,React Native")
    }
    else if(ans.selection == 'Academics'){
        console.log("start chrome https://drive.google.com/file/d/11ZfNxf8ftc81VbTHXXD6XF5CeqOpuu1n/view?usp=sharing")
    }
    else if(ans.selection == 'Projects'){
        console.log("start chrome https://github.com/AdityaNarayan01?tab=repositories")
    }
    else if(ans.selection == 'Contact'){
        console.log("This is contact section")
    }
  })
