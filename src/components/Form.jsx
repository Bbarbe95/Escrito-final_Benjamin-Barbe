import {useForm} from "react-hook-form"

function Form(){
    
    const {register, handleSubmit, formState: {errors}} = useForm();
   
        console.log(errors)
    
        const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <form onSubmit={onSubmit}>
            
            <label htmlFor="nombre">Nombre</label>
            <input type="text" {...register('nombre', 
            {
                required: {
                    value: true,
                    message: "El nombre es requerido"
                }
            }
            )} />

            {
            errors.nombre && <span>{errors.nombre.message}</span>
            }
            
            
            <label htmlFor="email">Email</label>
            <input type="email" {...register('email', 
             {
                required: {
                    value: true,
                    message: "El email es requerido"
                }
            }
            )} />
           
            {
            errors.email && <span>{errors.email.message}</span>
            }

            <label htmlFor="celular">Celular</label>
            <input type="number" {...register('celular', 
             {
                required: {
                    value: true,
                    message: "El celular es requerido"
                },
                minLength: {
                    value: 9,
                    message: "El celular debe tener 9 digitos"
                },
                maxLength: {
                    value: 9,
                    message: "El celular debe tener 9 digitos"
                }
            }
            )} />

            {
            errors.celular && <span>{errors.celular.message}</span>
            }

            <button>Crear</button>
        </form>
    )
}

export default Form