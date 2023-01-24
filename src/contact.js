function createContact() {
  const contactPage = document.createElement('article');
  contactPage.classList.add("contact-section");

  const contactTitle = document.createElement('h1');
  contactTitle.textContent = "Contact";
  contactTitle.classList.add("contact-section__title");

  const contactWrapper = document.createElement('div');
  contactWrapper.classList.add("contact-wrapper");
  
  const contactWrapperLeft = document.createElement('div');
  contactWrapperLeft.classList.add("contact-wrapper__left");
  
  const contactWrapperRight = document.createElement('div');
  contactWrapperRight.classList.add("contact-wrapper__right");

  const contactGroup = document.createElement('ul');
  contactGroup.classList.add("contact-group");

  const contactListItem1 = document.createElement('li');
  contactListItem1.classList.add("contact-group__item");
  contactListItem1.textContent = "Address:";
  
  const contactListItem2 = document.createElement('li');
  contactListItem2.classList.add("contact-group__item");
  contactListItem2.textContent = "Phone:";

  const contactListItem3 = document.createElement('li');
  contactListItem3.classList.add("contact-group__item");
  contactListItem3.textContent = "Email:";

  contactGroup.appendChild(contactListItem1);
  contactGroup.appendChild(contactListItem2);
  contactGroup.appendChild(contactListItem3);
  
  contactWrapperLeft.appendChild(contactGroup);

  const contactImage = document.createElement('img')
  contactImage.classList.add("contact-wrapper__image");
  contactImage.src = "https://source.unsplash.com/random/?map";
  contactImage.alt = "random map image from Unsplash.com"

  contactWrapperRight.appendChild(contactImage);


  contactWrapper.appendChild(contactWrapperLeft);
  contactWrapper.appendChild(contactWrapperRight);
  contactPage.appendChild(contactTitle);
  contactPage.appendChild(contactWrapper);

  return contactPage
}

export default createContact