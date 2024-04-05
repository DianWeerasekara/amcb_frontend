import React from "react";
import {CRow, CCol, CFormInput, CContainer, CCard, CCardBody, CFormSelect, CButton, CFormTextarea } from "@coreui/react";

const CreateFlightRecord = () => {
    return(
        <CContainer md>
            <CCard>
                <CCardBody>
                    <h3>Create Flight Record</h3>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormSelect 
                                aria-label="Default select example"
                                label = "Aircraft"
                                options={[
                                    'Aircraft',
                                    { label: 'Admin', value: '1' },
                                    { label: 'Aircraft Engineer', value: '2' },
                                    { label: 'Aircraft Maintenance Engineer', value: '3' }
                                ]}
                            />
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Flight Date" placeholder="Flight Date" aria-label="Flight Date" type="date" />
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Flight Duration" placeholder="Flight Duration" aria-label="Flight Duration"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Distance" placeholder="Distance" aria-label="Distance" />
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Fuel Consumption" placeholder="Fuel Consumption" aria-label="Fuel Consumption"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Engine Hours" placeholder="Engine Hours" aria-label="Engine Hours" />
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Avarage Altitude" placeholder="Avarage Altitude" aria-label="Avarage Altitude" />
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Whether Condition" placeholder="Whether Condition" aria-label="Whether Condition" />
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Engine Temprature" placeholder="Engine Temprature" aria-label="Engine Temprature"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Vibration Level" placeholder="Vibration Level" aria-label="Vibration Level"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CButton color="primary">Save</CButton>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
            <br />
        </CContainer>
    )
}

export default CreateFlightRecord;