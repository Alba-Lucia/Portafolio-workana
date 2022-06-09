import { useForm } from 'react-hook-form';
import styles from './form.module.scss'
import { useState , useEffect} from 'react';

const Form = () => {

    const [isSubmit, setIsSubmit] = useState(false)

    const { 
        register, 
        handleSubmit, 
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data, e) => {};

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmit){}
        setTimeout(() => setIsSubmit(false), 3000)
    }, [errors])

    return (
       <>    
        <form 
          className={styles.form}
          onSubmit={handleSubmit((onSubmit) =>{
            reset()
            setIsSubmit(true)
          })} 
        >
        <div className={styles.form__content}>
            <label className={styles.form__label}>Nombre</label>
            <input 
                type="text" 
                name='name'
                className={styles.form__input}
                {...register('name', { 
                    required: {
                      value: true,
                      message: 'Name is required'
                    },     
                    maxLength: {
                      value: 50,
                      message: 'Name must be more than 50 characters'
                    } 
                })}
            />
            {errors?.name && 
                <p className={styles.form__errors}>{errors.name.message}</p>
            }
        </div>
        <div className={styles.form__content}>
            <label className={styles.form__label}>Email</label>
            <input 
                type="text" 
                name='email'
                className={styles.form__input}
                {...register('email', { 
                    required: {
                      value: true,
                      message: 'Email is required'
                    },     
                    pattern: {
                      value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i,
                      message: 'This is not a valid email format'
                    }
                })}
            />
            {errors?.email && 
                <p className={styles.form__errors}>{errors.email.message}</p>
            }
            </div>
            <div className={styles.form__content}>
                <label className={styles.form__label}>Mensaje</label>
                <textarea 
                    type="text" 
                    name='messageForm'
                    className={styles.form__textarea}
                    {...register('messageForm', { 
                        required: {
                          value: true,
                          message: 'Message is required'
                        }  
                    })}       
                >
                </textarea>
                {errors?.messageForm && 
                    <p className={styles.form__errors}>{errors.messageForm.message}</p>
                }
            </div>
            {Object.keys(errors).length === 0 && isSubmit
                ? <h1 className={styles.form__success}>
                🦄 Wow so easy</h1>:('')}   
            <button 
                type='submit'
                className={styles.form__button}
                onClick={handleSubmit}
            >Enviar Mensaje</button>
        </form>
       </>
    )
}

export default Form
