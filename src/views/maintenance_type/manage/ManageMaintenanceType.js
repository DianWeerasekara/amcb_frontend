import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const ManageMaintenanceType = () => {
    const [maintenanceType, setMaintenanceType] = useState([]);
    const [loading, setLoaing] = useState(true);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:9000/api/maintenance-type");
            setMaintenanceType(response.data);
            setLoaing(false)
        } catch (error) {
            console.error("Error fetching Maintenance types:", error);
            setLoaing(false)
        }
    };

    const columns = [
        {
            name: "ID",
            selector: row =>row.id,
            sortable: true
        },
        {
            name: "Name",
            selector: row =>row.name,
            sortable: true
        },
        {
            name: "Frequency",
            selector: row =>row.frequency,
            sortable: true
        },
        {
            name: "Estimated Duration",
            selector: row =>row.estimated_duration,
            sortable: true
        },
        {
            name: "Components Involved",
            selector: row =>row.components_involved,
            sortable: true
        },
        {
            name: "Description",
            selector: row =>row.description,
            sortable: true
        },
    ];

    return (
        <div>
            <h3>Manage After Flight Records</h3>
            <DataTable
                columns={columns}
                data={maintenanceType}
                pagination
                progressPending={loading}
                noHeader
                striped
                highlightOnHover
            />
        </div>
    );
}

export default ManageMaintenanceType;