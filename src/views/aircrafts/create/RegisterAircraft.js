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
                            <CFormInput placeholder="Manufacturer" aria-label="Manufacturer"/>
                        </CCol>                        
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput placeholder="Serial number" aria-label="Serial number"/>
                        </CCol>
                        <CCol xs>
                            <CFormInput placeholder="Registration number" aria-label="Registration number"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput placeholder="Manufacturer Date" aria-label="Manufacturer Date" type="date"/>
                        </CCol>
                        <CCol xs>
                            <CFormInput placeholder="Purchase Date" aria-label="Purchase Date" type="date"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput placeholder="Last Maintenance Date (at the date of purchase)" aria-label="Last Maintenance Date" type="date"/>
                        </CCol>
                        <CCol xs>
                            <CFormInput placeholder="Total Flight Hours (at the date of purchase)" aria-label="Total Flight Hours"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput placeholder="Total Flight Cycle (at the date of purchase)" aria-label="Total Flight Cycle" />
                        </CCol>
                        <CCol xs>
                            <CFormInput placeholder="Total Flight Hours (at the date of purchase)" aria-label="Total Flight Hours"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput placeholder="Maximum Takeoff Weight" aria-label="Maximum Takeoff Weight" />
                        </CCol>
                        <CCol xs>
                            <CFormInput placeholder="Fuel Capacity" aria-label="Fuel Capacity"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput placeholder="Seating Capacity" aria-label="Seating Capacity"/>
                        </CCol>
                        <CCol xs>
                            <CFormInput placeholder="Engine Information" aria-label="Engine Information"/>
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

export default RegisterAircraft;