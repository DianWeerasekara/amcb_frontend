import React from "react";
import {CRow, CCol, CFormInput, CContainer, CCard, CCardBody, CFormSelect, CButton } from "@coreui/react";

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
                                options={[
                                    'Line Type',
                                    { label: 'Admin', value: '1' },
                                    { label: 'Aircraft Engineer', value: '2' },
                                    { label: 'Aircraft Maintenance Engineer', value: '3' }
                                ]}
                            />
                        </CCol>
                        <CCol xs>
                            <CFormInput placeholder="Maintenence Type Name" aria-label="Maintenence Type Name"/>
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

export default CreateMaintenanceType;