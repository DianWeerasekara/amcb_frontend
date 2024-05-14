import React, { useEffect, useState } from "react";
import {CRow, CCol, CFormInput, CContainer, CCard, CCardBody, CFormSelect, CButton, CAlert } from "@coreui/react";
import axios from "axios";

const RegisterAircraft = () => {

    const [aircraftTypes, setAircraftTypes] = useState([]);
    const [selectedAircraftType, setSelectedAircraftType] = useState('');
    const [aircraftModel, setAircraftModel] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [manufactureDate, setManufacturerDate] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [lastMaintenanceDate, setLastMaintenanceDate] = useState('');
    const [totalFlightHours, setTotalFlightHours] = useState('');
    const [flightCycle, setFlighCycle] = useState('');
    const [maximumTakeOffWeight, setMaximumTakeoffWeight] = useState('');
    const [fuelCapacity, setFuelCapacity] = useState('');
    const [seatingCapacity, setSeatingCapacity] = useState('');
    const [engineInfo, setEngineInfo] = useState('');

    const [error, setError] = useState("")
    const [successMessage, setSuccessMessage] = useState("")


    const handleSave = () => {
        const regAircraft = {
            aircraft_model: aircraftModel,
            aircraftType: selectedAircraftType,
            manufacturer: manufacturer, 
            seriel_number: serialNumber,
            registration_number: registrationNumber,
            manufacture_date: manufactureDate,
            purchase_date: purchaseDate,
            last_maintenance_date: lastMaintenanceDate,
            total_flight_hours: totalFlightHours,
            total_flight_cycles: flightCycle,
            maximum_takeoff_weight: maximumTakeOffWeight,
            fuel_capacity: fuelCapacity,
            seating_capacity: seatingCapacity,
            engine_informations: engineInfo
        }

        //post request
        axios.post("http://localhost:9000/api/aircraft", regAircraft)
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
        fetchAircraftTypes()
    })

    const fetchAircraftTypes = async () => {
        try {
            const response = await fetch("http://localhost:9000/api/aircraftType")
            if(!response.ok){
                throw new Error("Failed to fetch the aircraft types")
            }

            const data = await response.json();
            const formattedType = data.map((type) => ({
                label: type.type,
                value: type.id
            }))
            setAircraftTypes(formattedType)
        } catch (error) {
            console.error("Error fetching aircraft type: ", error)
        }
    }

    const handleAircraftTypeChange = (event) => {
        setSelectedAircraftType(event.target.value)
    }

    return(
        <CContainer md>
            <CCard>
                <CCardBody>
                    <h3>Aircraft Registration</h3>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput placeholder="Aircraft Model" value={aircraftModel} onChange={(e) => setAircraftModel(e.target.value)} aria-label="Aircraft Model"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormSelect
                                aria-label="Aircraft Type"
                                value={selectedAircraftType}
                                onChange={handleAircraftTypeChange}
                            >
                                <option value="">Select Aircraft Type</option>
                                {aircraftTypes.map((type) => (
                                    <option key={type.value} value={type.value}>
                                        {type.label}
                                    </option>
                                ))}
                            </CFormSelect>
                        </CCol>
                        <CCol xs>
                            <CFormInput placeholder="Manufacturer" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} aria-label="Manufacturer" />
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput placeholder="Serial number" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} aria-label="Serial number"/>
                        </CCol>
                        <CCol xs>
                            <CFormInput placeholder="Registration number" value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} aria-label="Registration number"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Manufacturer Date" placeholder="Manufacturer Date" value={manufactureDate} onChange={(e) => setManufacturerDate(e.target.value)} aria-label="Manufacturer Date" type="date"/>
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Purchase Date" placeholder="Purchase Date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} aria-label="Purchase Date" type="date"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput label="Last Maintenance Date (at the date of purchase)" placeholder="Last Maintenance Date (at the date of purchase)"  value={lastMaintenanceDate} aria-label="Last Maintenance Date" onChange={(e) => setLastMaintenanceDate(e.target.value)} type="date"/>
                        </CCol>
                        <CCol xs>
                            <CFormInput label="Total Flight Hours (at the date of purchase)" placeholder="Total Flight Hours (at the date of purchase)" value={totalFlightHours} onChange={(e) => setTotalFlightHours(e.target.value)} aria-label="Total Flight Hours"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput placeholder="Total Flight Cycle (at the date of purchase)" value={flightCycle} onChange={(e) => setFlighCycle(e.target.value)} aria-label="Total Flight Cycle" />
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput placeholder="Maximum Takeoff Weight" value={maximumTakeOffWeight} onChange={(e) => setMaximumTakeoffWeight(e.target.value)} aria-label="Maximum Takeoff Weight" />
                        </CCol>
                        <CCol xs>
                            <CFormInput placeholder="Fuel Capacity" value={fuelCapacity} onChange={(e) => setFuelCapacity(e.target.value)} aria-label="Fuel Capacity"/>
                        </CCol>
                    </CRow>
                    <br />
                    <CRow>
                        <CCol xs>
                            <CFormInput placeholder="Seating Capacity" value={seatingCapacity} onChange={(e) => setSeatingCapacity(e.target.value)} aria-label="Seating Capacity"/>
                        </CCol>
                        <CCol xs>
                            <CFormInput placeholder="Engine Information" value={engineInfo} onChange={(e) => setEngineInfo(e.target.value)} aria-label="Engine Information"/>
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
    )
}

export default RegisterAircraft;