import React from "react";
import {CRow, CCol, CFormInput, CContainer, CCard, CCardBody, CFormSelect, CButton } from "@coreui/react";

const CreateUser = () => {
    return(
        <CContainer md>
            <CCard>
                <CCardBody>
                    <h3>User Registration</h3>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput placeholder="First name" aria-label="First name"/>
                        </CCol>
                        <CCol xs>
                            <CFormInput placeholder="Last name" aria-label="Last name"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput placeholder="Email Address" aria-label="Email"/>
                        </CCol>
                        <CCol xs>
                            <CFormInput type="password" placeholder="Password" aria-label="Email"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs> 
                            <CFormSelect 
                                aria-label="Default select example"
                                options={[
                                    'Open this select menu',
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
                            <CButton color="primary">Save</CButton>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        </CContainer>
    )
}

export default CreateUser;