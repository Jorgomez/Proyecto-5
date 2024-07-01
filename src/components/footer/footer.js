import { photos } from '../Data/DataAssets/icons'
import './footer.css'

export const printFooterTemplate = () => {
  const footer = document.createElement('footer')
  footer.innerHTML = `
<ul class="flexContainer" id="ulContactFooter"> 
<li><a href=""><img src=${photos.iconFacebook} alt="facebook Icon"/> </a></li>
<li><a href="https://www.linkedin.com/in/jorge-g%C3%B3mez-m%C3%A9ndezz-5a7524a1/" target="_blank"><img src=${photos.iconSmallLinkedin} alt="linkedin Icon"/></a></li>
<li><a href=""><img src=${photos.iconInsta} alt="insta Icon"/></a></li>
<li><a href="" class="smallEmailFooter"><img src=${photos.iconSmallEmail} alt="email Icon"/></a></li>
</ul>
<h3>@2024 - JorGomez, even with Entropia</h3>`
  document.body.appendChild(footer)
}
