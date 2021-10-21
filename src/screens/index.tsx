import ApartmentIcon from '@material-ui/icons/Apartment'
import Title from '../components/Title'
import useStyles from './styles'
import { Formik, Form } from 'formik'
import { Grid, Typography } from '@material-ui/core'
import { schema } from './validation'
import { BasicDetails } from '../components/formSections/BasicDetails'
import { initialValues } from './values'
import { AddressDetails } from '../components/formSections/AddresssDetails'
import { ContactDetails } from '../components/formSections/ContactDetails'
import { WBSDetails } from '../components/formSections/WBSDetails'
import { PMSDetails } from '../components/formSections/PMSDetails'
import { InventoryAndBooking } from '../components/formSections/InvevtoryAndBooking'
export default function IndexScreen() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log({ values })
        }}>
        {({ errors, touched, handleBlur, values, setFieldValue }) => {
          return (
            <Form>
              <div className={classes.headerContainer}>
                <ApartmentIcon className={classes.mainIcon} />
                <Typography variant={'h1'}>Add new accommodation</Typography>
              </div>
              <Grid className={classes.wraper}>
                <Title heading={'Basic Details'} />
                <BasicDetails
                  errors={errors}
                  values={values}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                  touched={touched}
                />
                <Title heading={'Address Details'} />
                <AddressDetails
                  errors={errors}
                  values={values}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                  touched={touched}
                />
                <Title heading={'Contact Details'} />
                <ContactDetails
                  errors={errors}
                  values={values}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                  touched={touched}
                />
                <Title heading={'WBS Details'} />
                <WBSDetails setFieldValue={setFieldValue} />
                <Title heading={'PMS Details'} />
                <PMSDetails setFieldValue={setFieldValue} />
                <Title heading={'Inventory & Booking'} />
                <InventoryAndBooking
                  errors={errors}
                  values={values}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                  touched={touched}
                />

                <Grid className={classes.buttonWrapper}>
                  <button type="submit" className={classes.submitBTN}>
                    Save Accommodation
                  </button>
                </Grid>
              </Grid>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
