import axios from "axios";
import { useEffect, useState } from "react"
import DataTable from "react-data-table-component";

const ManageAircrafts = () => {
    const [aircrafts, setAircrafts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:9000/api/aircraft")
            setAircrafts(response.data)
            setLoading(false)
        } catch (error) {
            console.error("Error fetching aircraft types:", error);
            setLoading(false);
        }
    };

    const columns = [
        {
            name: "ID",
            selector: row => row.id,
            sortable: true
        },
        {
            name: "Aircraft Model",
            selector: row => row.aircraft_model,
            sortable: true
        },
        {
            name: "Manufacturer",
            selector: row => row.manufacturer,
            sortable: true
        },
        {
            name: "Serial Number",
            selector: row => row.seriel_number,
            sortable: true
        },
        {
            name: "Registration Number",
            selector: row => row.registration_number,
            sortable: true
        },
        {
            name: "Manufacture Date",
            selector: row => row.manufacture_date,
            sortable: true
        },
        {
            name: "Purchase Date",
            selector: row => row.purchase_date,
            sortable: true
        },
        {
            name: "Last Maintenance Date",
            selector: row => row.last_maintenance_date,
            sortable: true
        },
        {
            name: "Total Flight Hours",
            selector: row => row.total_flight_hours,
            sortable: true
        },
        {
            name: "Total Flight Cycles",
            selector: row => row.total_flight_cycles,
            sortable: true
        },
        {
            name: "Maximum Takeoff Weight",
            selector: row => row.maximum_takeoff_weight,
            sortable: true
        },
        {
            name: "Fuel Capacity",
            selector: row => row.fuel_capacity,
            sortable: true
        },
        {
            name: "Seating Capacity",
            selector: row => row.seating_capacity,
            sortable: true
        },
        {
            name: "Engine Information",
            selector: row => row.engine_informations,
            sortable: true
        }
    ];

    return (
        <div>
            <h3>Manage Aircrafts</h3>
            <DataTable
                columns={columns}
                data={aircrafts}
                pagination
                progressPending={loading}
                noHeader
                striped
                highlightOnHover
            />
        </div>
    )
}

export default ManageAircrafts;