import Coffee from '../assets/Filtro fotografico 5 copia 2.png'
import Peace from '../assets/image2.png'
import Cloth from '../assets/image3.png'
import Dance from '../assets/image1.png'

function Foursection() {
  return (
    <div className="my-10 flex justify-center">
      <div className="grid grid-cols-2 gap-10 w-4/5">
        <div className="w-full">
          <img src={Dance} alt="Dancing Women in a crowd" />
          <h4>More than just a musical festival</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et, deleniti laborum aut, quae explicabo deserunt eveniet unde recusandae incidunt inventore eius dolores dolorem ipsa hic? Iusto fuga quod molestiae?</p>
        </div>
        <div className="w-full">
          <img src={Coffee} alt="Picture of Coffee" />
          <h4>Life tastes better with Coffee</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab corrupti aliquid laudantium sequi similique in. Quia, amet earum. Vero possimus ut quo dignissimos eos, iure nulla illo debitis harum.</p>
        </div>
        <div className="w-full">
          <img src={Peace} alt="2 Women raising their hand in the Air with the Peace symbol" />
          <h4>American Dream</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, nulla! Sapiente fuga esse beatae minus magni, ad harum eveniet. Cum repellat dignissimos cumque libero laudantium nulla, modi et exercitationem quae?</p>
        </div>
        <div className="w-full">
          <img src={Cloth} alt="A person seen from the back dressed for cold weather" />
          <h4>A day exploring the Alps</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae incidunt quisquam architecto accusantium odio! Porro magnam tempore magni nihil facere? Expedita at quos cupiditate corrupti quas voluptatibus, voluptatum animi aperiamd?</p>
        </div>
      </div>
    </div>
  );
}

export default Foursection