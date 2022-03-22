import ReactDOM from 'react-dom';
import { AppCalc , Operation} from './Calc/CalcComp';

ReactDOM.render(
  <AppCalc number1={20} number2= {30} operationType= {Operation.ADD} />,
  document.getElementById('root')
);