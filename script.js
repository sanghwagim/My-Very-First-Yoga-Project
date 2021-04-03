

const yogaName = document.getElementById('yoga-name');
const yogaDescription = document.getElementById('yoga-description');
const yogaBenefits = document.getElementById('yoga-benefits');

let newYogaPoseToday = []; 

const randomYoga = poses[Math.floor(Math.random() * poses.length)];

function randomYogaPoseName () { 
    const randomYogaPose_name = randomYoga.pose_name;
    return randomYogaPose_name;
}

yogaName.textContent = randomYogaPoseName();


function randomYogaPoseDescription () { 

    const randomYogaDescription = randomYoga.description;
    return randomYogaDescription;
}

yogaDescription.textContent = randomYogaPoseDescription();


function randomYogaPoseBenefits () { 
    const randomYogaBenefits = randomYoga.benefits;
    return randomYogaBenefits;
}

randomYogaPoseBenefits();


yogaBenefits.textContent = randomYogaPoseBenefits();

