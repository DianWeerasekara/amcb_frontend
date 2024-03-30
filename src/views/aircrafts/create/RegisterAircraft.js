import React from "react";
import {CRow, CCol, CFormInput, CContainer, CCard, CCardBody, CFormSelect, CButton } from "@coreui/react";

const RegisterAircraft = () => {
    return(
        <CContainer md>
            <CCard>
                <CCardBody>
                    <h3>Aircraft Registration</h3>
                    <br />
                    <CRow>
                    <CCol xs> 
                            <CFormSelect 
                                aria-label="Aircraft Type"
                                options={[
                                    'Aircraft Type',
                                    { label: 'Admin', value: '1' },
                                    { label: 'Aircraft Engineer', value: '2' },
                                    { label: 'Aircraft Maintenance Engineer', value: '3' }
                                ]}
                            />
                        </CCol>
                        <CCol xs>
                            <CFormInput placeholder="Aircraft Model" aria-label="Aircraft Model"/>
                        </CCol>                        
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput placeholder="Registration number" aria-label="Registration number"/>
                        </CCol>
                        <CCol xs>
                            <CFormInput placeholder="Assinged unit" aria-label="Assinged unit"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput placeholder="Hobbs reading" aria-label="Hobbs reading"/>
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
        </CContainer>
    )
}

export default RegisterAircraft;