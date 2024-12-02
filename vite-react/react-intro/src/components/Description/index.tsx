import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const ModalWindow = () => (
  <Popup trigger={<button>Open Popup</button>} position="right center">
    <div>Popup content here!</div>
  </Popup>
);


export default ModalWindow;