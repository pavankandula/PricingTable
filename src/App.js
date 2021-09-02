import './App.css';
import Boxes from './Boxes';

function App() {
  return ( 
    <div className="pricePlans">   
        <Boxes  priceHeading="FREE" price="$0" userNumber="Single User" data="5GB"/> 
        <Boxes  priceHeading="PLUS" price="$9" userNumber="5 Users" data="50GB" />
        <Boxes  priceHeading="PRO" price="$49" userNumber="Unlimitd Users" data="150GB" />
    </div>
    );
}
export default App;
