/************* myProfile *****************/ 

const userInfoButton = document.querySelector('#user-information');
const accountInfoButton = document.querySelector('#account-settings');
const profDetails1 = document.querySelector('body > section > div > div.my-profile-details');
const profDetails2 = document.querySelector('body > section > div > div.my-profile-details2');
const homeContent = document.querySelector('body > section');

console.log(homeContent)


 userInfoButton.addEventListener('click', () => {
     profDetails1.style.display = 'block';
     profDetails2.style.display = 'none';
     userInfoButton.style.backgroundColor = 'rgba(238, 169, 217, 0.479)';
     accountInfoButton.style.backgroundColor = 'unset';
     homeContent.style.height = 'auto';
})


 accountInfoButton.addEventListener('click', () => {
    profDetails1.style.display = 'none';
    profDetails2.style.display = 'block';
    accountInfoButton.style.backgroundColor = 'rgba(238, 169, 217, 0.479)';
    userInfoButton.style.backgroundColor = 'unset';
    homeContent.style.height = '100vh';
 });

