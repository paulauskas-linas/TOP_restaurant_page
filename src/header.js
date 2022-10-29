const createHeader = () => {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const a = document.createElement('a');
    a.setAttribute('href', '#')
    a.textContent = "Restaurant";

    h1.appendChild(a);
    header.appendChild(h1);

    return header
}

export default createHeader;