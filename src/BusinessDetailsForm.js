import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField,Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setBusinessDetails } from './formslice';

const BusinessDetailsForm = () => {
    const dispatch = useDispatch();

    validationSchema: Yup.object({
        companyName: Yup.string().required('Required'),
        countryName: Yup.string().required('Required'),
        taxNumber: Yup.string().required('Required'),
        countryOfOperation: Yup.string().required('Required'),
        EnteryRegistarionNumber: Yup.string().required('Required'),
        companyDescription: Yup.string().required('Required'),
    })

    onSubmit:(values) => {
        dispatch(setBusinessDetails(values))
        console.log(values)
    }

    const formik = useFormik({
        initialValues: {
            companyName:'',
            countryName:'',
            taxNumber:'',
            countryOfOperation:'',
            EnteryRegistarionNumber:'',
            companyDescription:'',
        }
    })
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <TextField fullWidth
            id='companyName'
            name="companyName"
            label="company Name"
            value = {formik.values.companyName}
            onChange={formik.handleChange}
            error={formik.touched.companyName && Boolean(formik.errors.companyName)}
            ></TextField>
             <TextField fullWidth
            id='countryName'
            name="countryName"
            label="country Name"
            value = {formik.values.countryName}
            onChange={formik.handleChange}
            error={formik.touched.companyName && Boolean(formik.errors.countryName)}
            ></TextField>
             <TextField fullWidth
            id='taxNumber'
            name="taxNumber"
            label="Tax Number"
            value = {formik.values.taxNumber}
            onChange={formik.handleChange}
            error={formik.touched.companyName && Boolean(formik.errors.taxNumber)}
            ></TextField>
             <TextField fullWidth
            id='countryOfOperation'
            name="countryOfOperation"
            label="country Of Operation"
            value = {formik.values.countryOfOperation}
            onChange={formik.handleChange}
            error={formik.touched.companyName && Boolean(formik.errors.countryOfOperation)}
            ></TextField>
             <TextField fullWidth
            id='EnteryRegistarionNumber'
            name="EnteryRegistarionNumber"
            label="Entery Registarion Number"
            value = {formik.values.EnteryRegistarionNumber}
            onChange={formik.handleChange}
            error={formik.touched.companyName && Boolean(formik.errors.EnteryRegistarionNumber)}
            ></TextField>
            <Button color="primary" fullWidth type="submit">
                Submit
            </Button>
        </form>
    </div>
  )
}

export default BusinessDetailsForm
