function createMenu(){
  const menuPage = document.createElement('article');
  menuPage.classList.add("menu-section");

  const menuTitle = document.createElement('h1');
  menuTitle.textContent = "Menu";
  menuTitle.classList.add("menu-section__title");

  const menuGroup = document.createElement('div');
  menuGroup.classList.add('menu-list');

  const menuGroupItem1 = document.createElement('div');
  menuGroupItem1.classList.add("menu-list__item");
  const menuGroupItem1Image = document.createElement('img')
  menuGroupItem1Image.classList.add("menu-list__image");
  menuGroupItem1Image.src = "https://source.unsplash.com/random/?food,breakfast";
  menuGroupItem1Image.alt = "random food image from Unsplash.com"
  const menuGroupItem1Text = document.createElement('p');
  menuGroupItem1Text.classList.add("menu-list__text");
  menuGroupItem1Text.textContent = "Food";
  menuGroupItem1.appendChild(menuGroupItem1Image);
  menuGroupItem1.appendChild(menuGroupItem1Text);
  
  const menuGroupItem2 = document.createElement('div');
  menuGroupItem2.classList.add("menu-list__item");
  const menuGroupItem2Image = document.createElement('img')
  menuGroupItem2Image.classList.add("menu-list__image");
  menuGroupItem2Image.src = "https://source.unsplash.com/random/?food,lunch";
  menuGroupItem2Image.alt = "random food image from Unsplash.com"
  const menuGroupItem2Text = document.createElement('p');
  menuGroupItem2Text.classList.add("menu-list__text");
  menuGroupItem2Text.textContent = "Food";
  menuGroupItem2.appendChild(menuGroupItem2Image);
  menuGroupItem2.appendChild(menuGroupItem2Text);
  
  const menuGroupItem3 = document.createElement('div');
  menuGroupItem3.classList.add("menu-list__item");
  const menuGroupItem3Image = document.createElement('img')
  menuGroupItem3Image.classList.add("menu-list__image");
  menuGroupItem3Image.src = "https://source.unsplash.com/random/?food,dinner";
  menuGroupItem3Image.alt = "random food image from Unsplash.com"
  const menuGroupItem3Text = document.createElement('p');
  menuGroupItem3Text.classList.add("menu-list__text");
  menuGroupItem3Text.textContent = "Food";
  menuGroupItem3.appendChild(menuGroupItem3Image);
  menuGroupItem3.appendChild(menuGroupItem3Text);

  menuGroup.appendChild(menuGroupItem1);
  menuGroup.appendChild(menuGroupItem2);
  menuGroup.appendChild(menuGroupItem3);

  menuPage.appendChild(menuTitle);
  menuPage.appendChild(menuGroup);
  return menuPage
}

export default createMenu