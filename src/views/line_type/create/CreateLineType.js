import React from "react";
import {CRow, CCol, CFormInput, CContainer, CCard, CCardBody, CFormSelect, CButton } from "@coreui/react";

const CreateLineType = () => {
    return(
        <CContainer md>
            <CCard>
                <CCardBody>
                    <h3>Maintenance Line Type Registration</h3>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput placeholder="Maintenance type name" aria-label="First name"/>
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

export default CreateLineType;