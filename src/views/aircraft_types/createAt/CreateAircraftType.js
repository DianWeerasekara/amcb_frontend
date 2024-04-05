import React from "react";
import {CRow, CCol, CFormInput, CContainer, CCard, CCardBody, CFormSelect, CButton, CFormTextarea } from "@coreui/react";

const CreateAircraftType = () => {
    return(
        <CContainer md>
            <CCard>
                <CCardBody>
                    <h3>Create Aircraft Type</h3>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput placeholder="Type name" aria-label="Type name"/>
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
    );
}

export default CreateAircraftType;