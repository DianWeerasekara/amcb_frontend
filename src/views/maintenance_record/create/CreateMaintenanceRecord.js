import React, { useEffect, useState } from "react";
import { CRow, CCol, CFormInput, CContainer, CCard, CCardBody, CFormSelect, CButton, CFormTextarea, CAlert } from "@coreui/react";
import axios from 'axios';

const CreateMaintenanceRecord = () => {
    const [aircrafts, setAircrafts] = useState([]);
    const [maintenanceTypes, setMaintenanceTypes] = useState([]);
    const [selectedAircraftId, setSelectedAircraftId] = useState('');
    const [selectedMaintenanceType, setSelectedMaintenanceType] = useState('');
    const [maintenanceDate, setMaintenanceDate] = useState('');
    const [partsReplaced, setPartsReplaced] = useState('');
    const [partsInspected, setPartsInspected] = useState('');
    const [labourHours, setLabourHours] = useState('');
    const [warnings, setWarnings] = useState('');
    const [nextDate, setNextDate] = useState('');
    const [totEngineHours, setTotEngineHours] = useState('');
    const [totFlyingHours, setTotFlyingHours] = useState('');
    const [airDescription, setAirDescription] = useState('');
    const [aircraftNotes, setAircraftNotes] = useState('');

    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        fetchAircrafts();
        fetchMaintenanceTypes();
    }, []);

    const fetchAircrafts = async () => {
        try {
            const response = await fetch("http://localhost:9000/api/aircraft");
            if (!response.ok) {
                throw new Error("Failed to fetch the aircrafts");
            }

            const aircraftData = await response.json();
            const formattedAircraft = aircraftData.map((type) => ({
                label: type.aircraft_model,
                value: type.id
            }));
            setAircrafts(formattedAircraft);
        } catch (error) {
            console.error("Error fetching aircraft: ", error);
        }
    };

    const fetchMaintenanceTypes = async () => {
        try {
            const response = await fetch("http://localhost:9000/api/maintenance-type");
            if (!response.ok) {
                throw new Error("Failed to load the Maintenance Types");
            }
            const maintenanceData = await response.json();
            const formattedMaintenanceTypes = maintenanceData.map((type) => ({
                label: type.name,
                value: type.id
            }));
            setMaintenanceTypes(formattedMaintenanceTypes);
        } catch (error) {
            console.error("Error fetching maintenance type: ", error);
        }
    };

    const handleSave = () => {
        const regMaintenanceRecord = {
            maintenanceType: selectedMaintenanceType,
            airplane: selectedAircraftId,
            maintenance_date: maintenanceDate,
            maintenance_description: airDescription,
            parts_replaced: partsReplaced,
            parts_inspected: partsInspected,
            labour_hours: labourHours,
            warning: warnings,
            next_date: nextDate,
            maintenance_note: aircraftNotes,
            total_engine_hours: totEngineHours,
            total_flying_hours: totFlyingHours
        };

        axios.post("http://localhost:9000/api/maintenance-records", regMaintenanceRecord)
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
    };

    return (
        <CContainer md>
            <CCard>
                <CCardBody>
                    <h3>Create Maintenance Record</h3>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormSelect
                                aria-label="Aircraft"
                                label="Aircraft"
                                value={selectedAircraftId}
                                onChange={(e) => setSelectedAircraftId(e.target.value)}
                            >
                                <option value="">Select Aircraft Type</option>
                                {aircrafts.map((type) => (
                                    <option key={type.value} value={type.value}>
                                        {type.label}
                                    </option>
                                ))}
                            </CFormSelect>
                        </CCol>
                        <CCol xs>
                            <CFormSelect
                                aria-label="Maintenance Type"
                                label="Maintenance Type"
                                value={selectedMaintenanceType}
                                onChange={(e) => setSelectedMaintenanceType(e.target.value)}
                            >
                                <option value="">Select Maintenance Type</option>
                                {maintenanceTypes.map((type) => (
                                    <option key={type.value} value={type.value}>
                                        {type.label}
                                    </option>
                                ))}
                            </CFormSelect>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Maintenance Date" value={maintenanceDate} placeholder="Maintenance Date" onChange={(e) => setMaintenanceDate(e.target.value)} aria-label="Maintenance Date" type="date" />
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Parts Replaced" value={partsReplaced} placeholder="Parts Replaced" onChange={(e) => setPartsReplaced(e.target.value)} aria-label="Parts Replaced" />
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Parts Inspected" value={partsInspected} onChange={(e) => setPartsInspected(e.target.value)} placeholder="Parts Inspected" aria-label="Parts Inspected" />
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Labour Hours" value={labourHours} onChange={(e) => setLabourHours(e.target.value)} placeholder="Labour Hours" aria-label="Labour Hours" />
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Warnings" value={warnings} onChange={(e) => setWarnings(e.target.value)} placeholder="Warnings" aria-label="Warnings" />
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Next Date" value={nextDate} onChange={(e) => setNextDate(e.target.value)} placeholder="Next Date" aria-label="Next Date" type="date" />
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Total Engine Hours" value={totEngineHours} onChange={(e) => setTotEngineHours(e.target.value)} placeholder="Total Engine Hours" aria-label="Total Engine Hours" />
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Total Flying Hours" value={totFlyingHours} onChange={(e) => setTotFlyingHours(e.target.value)} placeholder="Total Flying Hours" aria-label="Total Flying Hours" />
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormTextarea
                                id="description"
                                label="Description"
                                rows={3}
                                value={airDescription}
                                onChange={(e) => setAirDescription(e.target.value)}
                            ></CFormTextarea>
                        </CCol>
                        <CCol xs>
                            <CFormTextarea
                                id="notes"
                                label="Notes"
                                rows={3}
                                value={aircraftNotes}
                                onChange={(e) => setAircraftNotes(e.target.value)}
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
            <br />
        </CContainer>
    );
};

export default CreateMaintenanceRecord;
