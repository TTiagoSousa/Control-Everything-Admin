import React, { useState } from 'react';
import './Functions_Validations.scss';
import { Validations } from '../../../../Constants/functionsValidations';
import Simple_Button from '../../../../Components/Buttons/Simple_Button/Simple_Button';
import { Link } from 'react-router-dom';

const Functions_Validations = () => {
  const [validations, setValidations] = useState(Validations);
  const [activeTypes, setActiveTypes] = useState(['User', 'Employee']);

  // Função para adicionar ou remover um tipo dos filtros ativos
  const toggleType = (type) => {
    if (activeTypes.includes(type)) {
      setActiveTypes(activeTypes.filter((t) => t !== type));
    } else {
      setActiveTypes([...activeTypes, type]);
    }
  };

  // Função para filtrar as validações com base nos tipos ativos
  const filteredValidations = validations.filter((validation) =>
    validation.type.some((t) => activeTypes.includes(t))
  );

  // Extrair todos os tipos das validações
  const allTypes = [...new Set(validations.flatMap((validation) => validation.type))];

  return (
    <div className='Functions_Validations'>
      <section className='Filters'>
        {allTypes.map((type) => (
          <div className='Button_Field'>
            <Simple_Button 
              key={type}
              text={type}
              // Define o estilo do botão com base no estado de ativo/inativo
              buttonStyle={activeTypes.includes(type) ? 'type3' : 'type2'}
              onClick={() => toggleType(type)}
            />
          </div>
        ))}
      </section>

      <section className='Functions'>
        <ul style={{ marginTop: '20px' }}>
          {filteredValidations.map((validation, index) => (
            <li key={index}>
              <Link href={validation.value} target="_blank" rel="noopener noreferrer">
                {validation.name} ({validation.type.join(', ')})
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Functions_Validations;