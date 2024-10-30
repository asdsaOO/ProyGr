import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState,useEffect } from 'react';
function SwitchComp(props) {
  const [habilitado, setHabilitado] = useState(props.check);

  // Sincroniza el estado local con props.check
  useEffect(() => {
    setHabilitado(props.check);
  }, [props.check]);

  const handleChange = async() => {
    if (props.onChange) {
      props.onChange(props.data)
        .then(datares => {
          console.log('respuestaa');
          console.log(datares);
          setHabilitado(datares[0].ohabilitado)
          
        });
    } else {
      setHabilitado(prev => !prev); // Alternar el estado
    }
  };

  return (
    <div className="form-check form-switch text-center">
      <input 
        className="form-check-input" 
        name={props.name} 
        type="checkbox" 
        role="switch" 
        id={props.id}
        checked={habilitado} 
        onChange={handleChange} 
      />
    </div>
  );
}

export { SwitchComp };