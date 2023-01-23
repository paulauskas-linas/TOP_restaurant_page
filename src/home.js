function createHome(){
  const homePage = document.createElement('article');
  homePage.classList.add("home-section");
  const homeTitle = document.createElement('h1');
  homeTitle.textContent = "Restaurant Name";
  homeTitle.classList.add("home-section__title");
  const mainImage = document.createElement('img');
  mainImage.src = "https://source.unsplash.com/random/?restaurant";
  mainImage.alt = "random restaurant image from Unsplash.com"
  mainImage.classList.add("home-section__image");
  const mainCopy = document.createElement('p');
  mainCopy.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non justo ac tortor mollis hendrerit. Donec feugiat, nulla eget laoreet viverra, mauris sem maximus purus, sed accumsan odio nisi in."
  mainCopy.classList.add("home-section__copy");
  

  homePage.appendChild(homeTitle);
  homePage.appendChild(mainImage);
  homePage.appendChild(mainCopy);
  return homePage
}

export default createHome