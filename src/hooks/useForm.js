import { useState } from "react"

export const useForm = (initialStateForm) => {

    const [formState, setFormState] = useState(initialStateForm)


    const onInputChange = ({target}) => {
        const {name, value} = target; //desestructuro name y value atributos del target
        setFormState({
            ...formState,
            [name]: value // se pone el name atributo entre corchetes para que tome el cambio
        });
        console.log(formState)
    }
    const resetForm = () => {
        setFormState(initialStateForm);
    };


  return {
    ...formState,
    formState,
    onInputChange,
    resetForm,
  }

}