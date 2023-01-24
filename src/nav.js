function createNavBar(){
  const navBar = document.createElement('nav');
  navBar.classList.add("nav");
  const ulList = document.createElement('ul');
  ulList.classList.add("nav-list");
  const listItem1 = document.createElement('li');
  listItem1.classList.add("nav-list__item");
  listItem1.classList.add("nav-list__item--is-active");
  const listItem2 = document.createElement('li');
  listItem2.classList.add("nav-list__item");
  const listItem3 = document.createElement('li');
  listItem3.classList.add("nav-list__item");

  listItem1.textContent = "Home";
  listItem1.setAttribute('id', 'home');
  listItem2.textContent = "Menu";
  listItem2.setAttribute('id', 'menu')
  listItem3.textContent = "Contact";
  listItem3.setAttribute('id', 'contact');

  ulList.appendChild(listItem1);
  ulList.appendChild(listItem2);
  ulList.appendChild(listItem3);
  navBar.appendChild(ulList);

  return navBar;
}

export default createNavBar