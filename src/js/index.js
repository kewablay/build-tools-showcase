import tools from './tools';
import '../styles/style.sass';

const createToolItem = ({ icon, name, description }) => `
  <div class="item">
    <div class="img-container">
      <img src="${icon}" alt="${name} icon"/>
    </div>
    <div class="info">
      <h2>${name}</h2>
      <p>${description}</p>
    </div>
  </div>
`;

document.querySelector('.content').innerHTML = `
    ${tools.map(createToolItem).join('')}
  
`;



console.log(tools[0].image)