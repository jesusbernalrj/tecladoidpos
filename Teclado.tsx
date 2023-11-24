
import { AiOutlineDrag } from 'react-icons/ai';
import Dragger from '../../helpers/Dragger';
import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropup } from 'react-icons/io';

interface InputValues {
  [key: string]: string;
}

interface Props {
  id: string;
}

const VirtualKeyboard = ({ id }: Props) => {
  Dragger('teclado');
  const [inputValues, setInputValues] = useState<InputValues>({
    id1: '',
    id2: '',
    id3: '',
    // Add more properties as needed
  });
  console.log(inputValues)
  const handleKeyPress = (key: string, id: string) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [id]: key,
    }));
  };

  // Rest of the code...

 
  
  const handleBackspace = () => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [id]: prevInputValues[id].slice(0, -1)
    }));
  };
  return (
    
    <div id='teclado' className="bg-white teclado container-teclado">
      
      <div className="box ">
      
      <div>
        <button className="btn text-danger teclado-styles teclado-styles" onClick={() => handleKeyPress('1', id)}>1</button>
        <button className="btn text-danger teclado-styles" onClick={() => handleKeyPress('2', id)}>2</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('3', id)}>3</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('4', id)}>4</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('5', id)}>5</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('6', id)}>6</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('7', id)}>7</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('8', id)}>8</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('9', id)}>9</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('0', id)}>0</button>
        <button  className="btn text-danger teclado-styles" onClick={handleBackspace}>Backspace</button>
      </div>
      
      <div >
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('q', id)}>Q</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('w', id)}>W</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('e', id)}>E</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('r', id)}>R</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('t', id)}>T</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('y', id)}>Y</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('u', id)}>U</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('i', id)}>I</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('o', id)}>O</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('p', id)}>P</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('p', id)}><IoMdArrowDropdown/></button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('p', id)}><IoMdArrowDropup/></button>
      </div>
      <div>
      <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('a', id)}>A</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('s', id)}>S</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('d', id)}>D</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('f', id)}>F</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('g', id)}>G</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('h', id)}>H</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('j', id)}>J</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('k', id)}>K</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('l', id)}>L</button>
        <h3  className="btn ms-5 text-danger teclado-styles"> <AiOutlineDrag/> </h3>
      </div>
      <div>
      <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('z', id)}>Z</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('x', id)}>X</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('c', id)}>C</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('v', id)}>V</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('b', id)}>B</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('n', id)}>N</button>
        <button  className="btn text-danger teclado-styles" onClick={() => handleKeyPress('m', id)}>M</button>
       
      </div>
      
      </div>
    </div>
   
  );
};

export default VirtualKeyboard;

