import React, { useEffect, useState } from "react";
import { CRow, CCol, CFormInput, CContainer, CCard, CCardBody, CFormSelect, CButton, CAlert } from "@coreui/react";

const CreateFlightRecord = () => {
    const [aircrafts, setAircrafts] = useState([]);
    const [selectedAircraftId, setSelectedAircraftId] = useState("");
    const [flightDate, setFlightDate] = useState('');
    const [flightDuration, setFlightDuration] = useState('');
    const [distance, setDistance] = useState('');
    const [fuelConsumption, setFuelConsumption] = useState('');
    const [engineHours, setEngineHours] = useState('');
    const [avarageAltitude, setAvarageAltitude] = useState('');
    const [whetherCondition, setWhetherCondition] = useState('');
    const [engineTemprature, setEngineTemprature] = useState('');
    const [vibrationLevel, setVibrationLevel] = useState('');

    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSave = () => {
        const saveFlightRecord = {
            aircraft: setAircrafts,
            date: setFlightDate,
            flight_duration: setFlightDuration,
            distance: setDistance,
            fuel_consumtion: setFuelConsumption,
            engine_hours: setEngineHours,
            avarage_altitude: setAvarageAltitude,
            whether_condition: setWhetherCondition,
            engine_temprature: setEngineTemprature,
            vibration_level: setVibrationLevel
        }

        axios.post("http://localhost:9000/api/after-flight", saveFlightRecord)
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

    useEffect(() => {
        fetchAircrafts();
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

    const handleAircraftChange = (event) => {
        setSelectedAircraftId(event.target.value);
    };

    return (
        <CContainer md>
            <CCard>
                <CCardBody>
                    <h3>Create Flight Record</h3>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormSelect
                                aria-label="Aircraft"
                                label="Aircraft"
                                value={selectedAircraftId}
                                onChange={handleAircraftChange}
                            >
                                <option value="">Select Aircraft Type</option>
                                {aircrafts.map((type) => (
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
                            <CFormInput label="Flight Date" value={flightDate} placeholder="Flight Date" aria-label="Flight Date" type="date" />
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Flight Duration" value={flightDuration} placeholder="Flight Duration" aria-label="Flight Duration" />
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Distance" value={distance} placeholder="Distance" aria-label="Distance" />
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Fuel Consumption" value={fuelConsumption} placeholder="Fuel Consumption" aria-label="Fuel Consumption" />
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Engine Hours" value={engineHours} placeholder="Engine Hours" aria-label="Engine Hours" />
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Average Altitude" value={avarageAltitude} placeholder="Average Altitude" aria-label="Average Altitude" />
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Weather Condition" value={whetherCondition} placeholder="Weather Condition" aria-label="Weather Condition" />
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Engine Temperature" value={engineTemprature} placeholder="Engine Temperature" aria-label="Engine Temperature" />
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Vibration Level" value={vibrationLevel} placeholder="Vibration Level" aria-label="Vibration Level" />
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

export default CreateFlightRecord;
