import React, { useState } from "react";
import {CRow, CCol, CFormInput, CContainer, CCard, CCardBody, CFormSelect, CButton, CFormTextarea, CAlert} from "@coreui/react";
import axios from "axios";

const CreateLineType = () => {

    const [lineType, setLineType] = useState('');
    const [lfrequency, setFrequency] = useState('');
    const [ldescription, setDescription] = useState('');
    const [associateProcedure, setAssociateProcedure] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');

    const [error, setError] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const handleSave = () => {
        const reglineType = {
            type: lineType,
            frequency: lfrequency,
            description: ldescription,
            associate_procedure: associateProcedure,
            estimated_time: estimatedTime
        }

        axios.post("http://localhost:9000/api/line-type", reglineType)
            .then(response => {
                console.log("Data sent successfully: ", response.data);
                setSuccessMessage("Data sent successfully.");
                setError("");
                setLineType('');
                setFrequency('');
                setDescription('');
                setAssociateProcedure('');
                setEstimatedTime('');

                setTimeout(() => {
                    setSuccessMessage("");
                }, [10000])
            })
            .catch(error => {
                console.error("Error sending data :", error);
                setError("An error occurred while sending the data.");
                setSuccessMessage("");
            })
    }

    return(
        <CContainer md>
            <CCard>
                <CCardBody>
                    <h3>Maintenance Line Type Registration</h3>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Line Type" value={lineType} onChange={(e) => setLineType(e.target.value)} placeholder="Line Type" aria-label="Line Type"/>
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Frequency" value={lfrequency} onChange={(e) => setFrequency(e.target.value)} placeholder="Frequency" aria-label="Frequency"/>
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
                                value={ldescription}
                                onChange={(e) => setDescription(e.target.value)}
                            ></CFormTextarea>
                        </CCol>
                        </CCol>
                        <CCol xs>
                        <CCol xs>
                            <CFormTextarea
                                id="associateProcedure"
                                label="Associate Procedure"
                                rows={3}
                                value={associateProcedure}
                                onChange={(e) => setAssociateProcedure(e.target.value)}
                            ></CFormTextarea>
                        </CCol>
                        </CCol>
                    </CRow>

                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Estimate Time" value={estimatedTime} onChange={(e) => setEstimatedTime(e.target.value)} placeholder="Estimate Time" aria-label="Estimate Time"/>
                        </CCol>
                    </CRow>

                    <br />
                    <CRow>
                        <CCol xs>
                            <CButton color="primary" onClick={handleSave}>Save</CButton>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
            <br />
            {error && <CAlert color="danger">{error}</CAlert>}
            {successMessage && <CAlert color="success">{successMessage}</CAlert>}
        </CContainer>
    )
}

export default CreateLineType;