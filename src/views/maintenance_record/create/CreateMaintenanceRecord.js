import React from "react";
import {CRow, CCol, CFormInput, CContainer, CCard, CCardBody, CFormSelect, CButton, CFormTextarea } from "@coreui/react";

const CreateMaintenanceType = () => {
    return(
        <CContainer md>
            <CCard>
                <CCardBody>
                    <h3>Create Maintenance Record</h3>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormSelect 
                                aria-label="Default select example"
                                label = "Maintenance Type"
                                options={[
                                    'Maintenance Type',
                                    { label: 'Admin', value: '1' },
                                    { label: 'Aircraft Engineer', value: '2' },
                                    { label: 'Aircraft Maintenance Engineer', value: '3' }
                                ]}
                            />
                        </CCol>
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
                            <CFormInput label="Maintenance Date" placeholder="Maintenance Date" aria-label="Maintenance Date" type="date" />
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Parts Replaced" placeholder="Parts Replaced" aria-label="Parts Replaced"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Parts Inspected" placeholder="Parts Inspected" aria-label="Parts Inspected" />
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Labour Hours" placeholder="Labour Hours" aria-label="Labour Hours"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Warnings" placeholder="Warnings" aria-label="Warnings" />
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Next Date" placeholder="Next Date" aria-label="Next Date" type="date" />
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Total Engine Hours" placeholder="Total Engine Hours" aria-label="Total Engine Hours" />
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Total Flying Hours" placeholder="Total Flying Hours" aria-label="Total Flying Hours"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormTextarea
                                id="decription"
                                label="Description"
                                rows={3}
                            ></CFormTextarea>
                        </CCol>
                        <CCol xs>
                            <CFormTextarea
                                id="notes"
                                label="Notes"
                                rows={3}
                            ></CFormTextarea>
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

export default CreateMaintenanceType;