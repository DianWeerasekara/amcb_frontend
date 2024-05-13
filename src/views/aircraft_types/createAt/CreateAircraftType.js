import React, { useState } from "react";
import axios from "axios";
import {CRow, CCol, CFormInput, CContainer, CCard, CCardBody, CFormSelect, CButton, CFormTextarea, CAlert } from "@coreui/react";

const CreateAircraftType = () => {

    const [typeName, setTypeName] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const handleSave = () => {
        //prepare data to send
        const aircraftType = {
            type: typeName,
            description: description
        }
        //POST request 
        axios.post("http://localhost:9000/api/aircraftType", aircraftType)
            .then(response => {
                console.log("Data sent successfully: ", response.data);
                setSuccessMessage("Data sent successfully.");
                setError("");
                setTypeName("");
                setDescription("");

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
                    <h3>Create Aircraft Type</h3>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput 
                            placeholder="Type name" 
                            aria-label="Type name"
                            value={typeName}
                            onChange={(e) => setTypeName(e.target.value)}
                            />
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormTextarea
                                id="decription"
                                label="Description"
                                rows={3}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></CFormTextarea>
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
            {error && <CAlert color="danger">{error}</CAlert>}
            {successMessage && <CAlert color="success">{successMessage}</CAlert>}
        </CContainer>
    );
}

export default CreateAircraftType;