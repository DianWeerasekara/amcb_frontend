import React from "react";
import {CRow, CCol, CFormInput, CContainer, CCard, CCardBody, CFormSelect, CButton, CFormTextarea} from "@coreui/react";

const CreateLineType = () => {
    return(
        <CContainer md>
            <CCard>
                <CCardBody>
                    <h3>Maintenance Line Type Registration</h3>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Line Type" placeholder="Line Type" aria-label="Line Type"/>
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Frequency" placeholder="Frequency" aria-label="Frequency"/>
                        </CCol>
                    </CRow>

                    <br />
                    <CRow>
                        <CCol xs>
                        <CCol xs>
                            <CFormTextarea
                                id="decription"
                                label="Description"
                                rows={3}
                            ></CFormTextarea>
                        </CCol>
                        </CCol>
                        <CCol xs>
                        <CCol xs>
                            <CFormTextarea
                                id="associateProcedure"
                                label="Associate Procedure"
                                rows={3}
                            ></CFormTextarea>
                        </CCol>
                        </CCol>
                    </CRow>

                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Estimate Time" placeholder="Estimate Time" aria-label="Estimate Time"/>
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

export default CreateLineType;