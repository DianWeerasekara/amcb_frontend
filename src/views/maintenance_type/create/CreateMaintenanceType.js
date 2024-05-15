import React, { useEffect, useState } from "react";
import { CRow, CCol, CFormInput, CContainer, CCard, CCardBody, CFormSelect, CButton, CFormTextarea, CAlert } from "@coreui/react";
import axios from "axios";

const CreateMaintenanceType = () => {
    
    const [lineTypes, setLineTypes] = useState([]);
    const [selectedLineType, setSelectedLineType] = useState('');
    const [maintenanceTypeName, setMaintenanceTypeName] = useState('');
    const [maintenanceFrequency, setMaintenanceFrequency] = useState('');
    const [estimatedDuration, setEstimatedDuration] = useState('');
    const [maintenanceDescription, setMaintenanceDescription] = useState('');
    const [componentsInvolved, setComponentsInvolved] = useState('');

    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        fetchLineTypes();
    }, []);

    //get request for the line types
    const fetchLineTypes = async () => {
        try {
            const response = await fetch("http://localhost:9000/api/line-type");
            if (!response.ok) {
                throw new Error("Failed to fetch Line Types");
            }
            const data = await response.json();
            const formattedTypes = data.map((type) => ({
                label: type.type,
                value: type.id
            }));
            setLineTypes(formattedTypes);
        } catch (error) {
            console.error("Error fetching Line types: ", error);
        }
    };

    const handleLineTypeChange = (event) => {
        setSelectedLineType(event.target.value);
    };

    const handleSave = () => {
        const regMaintenanceType = {
            name: maintenanceTypeName,
            linetype: selectedLineType,
            description: maintenanceDescription,
            frequency: maintenanceFrequency,
            estimated_duration: estimatedDuration,
            components_involved: componentsInvolved
        }

        //post request
        axios.post("http://localhost:9000/api/maintenance-type", regMaintenanceType)
            .then(response => {
                console.log("Data sent successfully: ", response.data);
                setSuccessMessage("Data sent successfully.");
                setError("");

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

    return (
        <CContainer md>
            <CCard>
                <CCardBody>
                    <h3>Create Maintenance Type</h3>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormSelect
                                aria-label="Line Type"
                                label="Line Type"
                                value={selectedLineType}
                                onChange={handleLineTypeChange}
                            >
                                <option value="">Select Line Type</option>
                                {lineTypes.map((type) => (
                                    <option key={type.value} value={type.value}>
                                        {type.label}
                                    </option>
                                ))}
                            </CFormSelect>
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Maintenance Type Name" value={maintenanceTypeName} onChange={(e) => setMaintenanceTypeName(e.target.value)} placeholder="Maintenance Type Name" aria-label="Maintenance Type Name"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Frequency of Maintenance" value={maintenanceFrequency} onChange={(e) => setMaintenanceFrequency(e.target.value)} placeholder="Frequency of Maintenance" aria-label="Frequency of Maintenance"/>
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Estimated Duration" value={estimatedDuration} onChange={(e) => setEstimatedDuration(e.target.value)} placeholder="Estimated Duration" aria-label="Estimated Duration"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormTextarea
                                id="description"
                                label="Description"
                                rows={3}
                                value={maintenanceDescription}
                                onChange={(e) => setMaintenanceDescription(e.target.value)}
                            ></CFormTextarea>
                        </CCol>
                        <CCol xs>
                            <CFormTextarea
                                id="components-involved"
                                label="Components Involved"
                                rows={3}
                                value={componentsInvolved}
                                onChange={(e) => setComponentsInvolved(e.target.value)}
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
            <br />
            {error && <CAlert color="danger">{error}</CAlert>}
            {successMessage && <CAlert color="success">{successMessage}</CAlert>}
        </CContainer>
    );
};

export default CreateMaintenanceType;
