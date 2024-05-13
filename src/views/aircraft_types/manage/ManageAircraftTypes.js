import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const ManageAircraftTypes = () => {
    const [aircraftTypes, setAircraftTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:9000/api/aircraftType");
            setAircraftTypes(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching aircraft types:", error);
            setLoading(false);
        }
    };

    const columns = [
        {
            name: "ID",
            selector: row =>row.id,
            sortable: true,
        },
        {
            name: "Type",
            selector: row => row.type,
            sortable: true,
        },
        {
            name: "Description",
            selector: row => row.description,
            sortable: true,
        },
        {
            name: "Status",
            selector: "status",
            sortable: true,
            cell: row => row.status ? "Active" : "Inactive"
        },
    ];
    console.log(aircraftTypes)

    return (
        <div>
            <h3>Manage Aircraft Types</h3>
            <DataTable
                columns={columns}
                data={aircraftTypes}
                pagination
                progressPending={loading}
                noHeader
                striped
                highlightOnHover
            />
        </div>
    );
};

export default ManageAircraftTypes;
