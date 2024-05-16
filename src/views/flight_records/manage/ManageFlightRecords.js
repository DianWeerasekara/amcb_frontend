import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const ManageFlightRecords = () => {
    const [flightRecords, setFlightRecords] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        try {
            const response = await axios.get("http://localhost:9000/api/after-flight");
            console.log(response.data)
            setFlightRecords(response.data)
            setLoading(false)
        } catch (error) {
            console.error("Error fetching aircraft types:", error);
            setLoading(false);
        }
    }

    const columns = [
        {
            name: "ID",
            selector: row => row.id,
            sortable: true
        },
        {
            name: "Aircraft",
            selector: row => row.aircraft.aircraft_model,
            sortable: true
        },
        {
            name: "Avarage Altitude (ft)",
            selector: row => row.avarage_altitude,
            sortable: true
        },
        {
            name: "Date",
            selector: row => row.date,
            sortable: true
        },
        {
            name: "Engine Hours",
            selector: row => row.engine_hours,
            sortable: true
        },
        {
            name: "Distance",
            selector: row => row.distance,
            sortable: true
        },
        {
            name: "Engine Temprature",
            selector: row => row.engine_temprature,
            sortable: true
        },
        {
            name: "Flight Duration",
            selector: row => row.flight_duration,
            sortable: true
        },
        {
            name: "Fuel Consumption",
            selector: row => row.fuel_consumtion,
            sortable: true
        },
        {
            name: "Whether Condition",
            selector: row => row.whether_condition,
            sortable: true
        },
        {
            name: "Vibration Level",
            selector: row => row.vibration_levels,
            sortable: true
        },
    ]

    return (
        <div>
            <h3>Manage After Flight Records</h3>
            <DataTable
                columns={columns}
                data={flightRecords}
                pagination
                progressPending={loading}
                noHeader
                striped
                highlightOnHover
            />
        </div>
    );
}

export default ManageFlightRecords;