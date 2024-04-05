import React from "react";
import {CRow, CCol, CFormInput, CContainer, CCard, CCardBody, CFormSelect, CButton, CFormTextarea } from "@coreui/react";

const CreateMaintenanceType = () => {
    return(
        <CContainer md>
            <CCard>
                <CCardBody>
                    <h3>Create Maintenance Type</h3>
                    <br />
                    <CRow>
                        <CCol xs>
                        <CFormSelect 
                                aria-label="Default select example"
                                label = "Line Type"
                                options={[
                                    'Line Type',
                                    { label: 'Admin', value: '1' },
                                    { label: 'Aircraft Engineer', value: '2' },
                                    { label: 'Aircraft Maintenance Engineer', value: '3' }
                                ]}
                            />
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Maintenence Type Name" placeholder="Maintenence Type Name" aria-label="Maintenence Type Name"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Frequency of Maintenance" placeholder="Frequency of Maintenance" aria-label="Frequency of Maintenance"/>
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Estimated Duration" placeholder="Estimated Duration" aria-label="Estimated Duration"/>
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
                                id="decription"
                                label="Components Involved"
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