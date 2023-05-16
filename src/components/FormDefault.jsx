import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Label from './texts/Label'
import { Request } from '../hooks/Request'
const FormDefault = (props) => {
    const {
        initialValues,
        onSubmit,
        validationSchema,
        btnName,
        fields,
        title,
      } = props
      return (
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values)
            resetForm()
          }}
        >
          <Form className="">
            <h1>{title}</h1>
            {fields?.map((field, i) => {
              switch (field.typeInput) {
                case 'input':
                  return (
                    <div key={i} className="divLabels">
                      <Input field={field} />
                      <ErrorMessage
                        name={field.name}
                        component="span"
                        className="Error"
                      />
                    </div>
                  )
                case 'select':
                  return (
                    <div key={i} className="divLabels">
                      <Select field={field} />
                      <ErrorMessage
                        name={field.name}
                        component="span"
                        className="Error"
                      />
                    </div>
                  )
                default:
                  return null
              }
            })}
            <button className="btnform" type="submit">
              {btnName}
            </button>
          </Form>
        </Formik>
      )
}
const Input = ({ field }) => {
    return (
      <>
        <Label htmlFor={field.name}>{field.label}</Label>
        <div>
          <Field
            autoComplete="off"
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            // onChange={(e) => setPassword(e.value)}
          />
          {field.icon && <FontAwesomeIcon icon={`${field.icon}`} />}
        </div>
      </>
    )
  }
  
  const Select = ({ field }) => {
    const { data, call, loading, error } = Request({
      urlApi: field.urlApi ? field.urlApi : null,
    })
    useEffect(() => {
      if (data === undefined) {
        call()
      }
    }, [data])
    return (
      <>
        {loading && (
          <>
            <Label htmlFor={field.name}>{field.label}</Label>
            <div>
              <Field as="select" name={field.name}>
                <option value="">{field.label}</option>
                {data?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.position}
                  </option>
                ))}
              </Field>
            </div>
          </>
        )}
      </>
    )
  }
export default FormDefault;