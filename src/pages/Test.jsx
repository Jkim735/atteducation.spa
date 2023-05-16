import * as Yup from 'yup'
import FormDefault from '../components/FormDefault';
const Test = () => {
  return (
    <>
      <FormDefault
        title="TEST"
        fields={[
          {
            label: '¿Qué materia te gusta?',
            name: 'Materia',
            type: 'select',
            typeInput: 'select',
            options: [
              {
                label: 'Matemáticas',
                value: 'Matematicas',
              },
              {
                label: 'Ciencias',
                value: 'Ciencias',
              },
              {
                label: 'Lenguas',
                value: 'Lenguas',
              },
              {
                label: 'Historia',
                value: 'Historia',
              },
            ],
          },
          {
            label: '¿Qué tipo de actividad educativa prefieres?',
            name: 'Actividad',
            type: 'select',
            typeInput: 'select',
            options: [
              {
                label: 'Experimientos Cientificos',
                value: 'Experimentos Cientificos',
              },
              {
                label: 'Resolución de problemas matemáticos',
                value: 'Resolución de problemas matemáticos',
              },
              {
                label: 'Lectura y análisis de textos',
                value: 'Lectura y análisis de textos',
              },
              {
                label: 'Investigación y aprendizaje sobre eventos históricos',
                value: 'Investigación y aprendizaje sobre eventos históricos',
              },
            ],
          },
          {
            label: '¿Cuál es tu enfoque educativo favorito?',
            name: 'Favorito',
            type: 'select',
            typeInput: 'select',
            options: [
              {
                label: 'Enseñanza basada en problemas y desafíos',
                value: 'Enseñanza basada en problemas y desafíos',
              },
              {
                label: 'Aprendizaje experimental y práctico',
                value: 'Aprendizaje experimental y práctico',
              },
              {
                label: 'Enfoque basado en la lectura y el análisis de textos',
                value: 'Enfoque basado en la lectura y el análisis de textos',
              },
              {
                label: 'Enfoque basado en la investigación histórica',
                value: 'Enfoque basado en la investigación histórica',
              },
            ],
          },
          
        ]}
        initialValues={{
          Materia: "",
          Actividad: "",
          Favorito: "",
        }}
        validationSchema={Yup.object().shape({
          Materia: Yup.number().required("Este campo es obligatorio"),
          Actividad: Yup.string().required("Este campo es obligatorio"),
          Favorito: Yup.string().required("Este campo es obligatorio"),
        })}
        onSubmit={(values, resetForm) => {
          console.log(values);
          // await requestAuth('post', '/rol', {
          //   ...values,
          //   MenuList: values.MenuList.map((item) => ({
          //     Name: item,
          //   })),
          // })
          //   .then(() => {
          //     toast.success('Envio exitoso')
          //     setreload(true)
          //     setCreateForm(false)
          //     getuser()
          //     resetForm()
          //   })
          //   .catch((response) => {
          //     toast.error(response.response.data)
          //   })
          <></>;
        }}
        btnName="Registrar"
      />
    </>
  );
};

export default Test;
