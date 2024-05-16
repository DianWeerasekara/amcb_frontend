import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const ManageLineTypes = () => {
    const [lineTypes, setLineTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:9000/api/line-type");
            console.log(response.data);
            setLineTypes(response.data);
            setLoading(false);
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
            name: "Type",
            selector: row => row.type,
            sortable: true
        },
        {
            name: "Frequency",
            selector: row => row.frequency,
            sortable: true
        },
        {
            name: "Estimated Time",
            selector: row => row.estimated_time,
            sortable: true
        },
        {
            name: "Associate Procedure",
            selector: row => row.associate_procedure,
            sortable: true
        },
        {
            name: "Description",
            selector: row => row.description,
            sortable: true
        }
        // {
        //     name: "Purchase Date",
        //     selector: row => row.purchase_date,
        //     sortable: true
        // },
        // {
        //     name: "Last Maintenance Date",
        //     selector: row => row.last_maintenance_date,
        //     sortable: true
        // },
        // {
        //     name: "Total Flight Hours",
        //     selector: row => row.total_flight_hours,
        //     sortable: true
        // },
        // {
        //     name: "Total Flight Cycles",
        //     selector: row => row.total_flight_cycles,
        //     sortable: true
        // },
        // {
        //     name: "Maximum Takeoff Weight",
        //     selector: row => row.maximum_takeoff_weight,
        //     sortable: true
        // },
        // {
        //     name: "Fuel Capacity",
        //     selector: row => row.fuel_capacity,
        //     sortable: true
        // },
        // {
        //     name: "Seating Capacity",
        //     selector: row => row.seating_capacity,
        //     sortable: true
        // },
        // {
        //     name: "Engine Informations",
        //     selector: row => row.engine_informations,
        //     sortable: true
        // },
        // {
        //     name: "Flight Record Date",
        //     selector: row => row.flight_record_date,
        //     sortable: true
        // },
        // {
        //     name: "Flight Duration",
        //     selector: row => row.flight_duration,
        //     sortable: true
        // },
        // {
        //     name: "Distance",
        //     selector: row => row.distance,
        //     sortable: true
        // },
        // {
        //     name: "Fuel Consumption",
        //     selector: row => row.fuel_consumtion,
        //     sortable: true
        // },
        // {
        //     name: "Engine Hours",
        //     selector: row => row.engine_hours,
        //     sortable: true
        // },
        // {
        //     name: "Average Altitude",
        //     selector: row => row.avarage_altitude,
        //     sortable: true
        // },
        // {
        //     name: "Weather Condition",
        //     selector: row => row.whether_condition,
        //     sortable: true
        // },
        // {
        //     name: "Engine Temperature",
        //     selector: row => row.engine_temprature,
        //     sortable: true
        // },
        // {
        //     name: "Vibration Levels",
        //     selector: row => row.vibration_levels,
        //     sortable: true
        // }
    ];

    return (
        <div>
            <h3>Manage After Flight Records</h3>
            <DataTable
                columns={columns}
                data={lineTypes}
                pagination
                progressPending={loading}
                noHeader
                striped
                highlightOnHover
            />
        </div>
    );
}

export default ManageLineTypes;
