import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const ManageMaintenanceRecord = () => {
    const [maintenanceRecords, setMaintenanceRecords] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:9000/api/maintenance-records");
            setMaintenanceRecords(response.data);
            setLoading(false)
        } catch (error) {
            console.error("Error fetching Maintenance Records :", error);
            setLoading(false);
        }
    };

    const columns = [
        {
            name: "ID",
            selector: row =>row.id,
            sortable: true
        },
        {
            name: "Maintenance Date",
            selector: row =>row.maintenance_date,
            sortable: true
        },
        {
            name: "Maintenance Description",
            selector: row =>row.maintenance_description,
            sortable: true
        },
        {
            name: "Parts Replaced",
            selector: row =>row.parts_replaced,
            sortable: true
        },
        {
            name: "Labour Hours",
            selector: row =>row.labour_hours,
            sortable: true
        },
        {
            name: "Warnings",
            selector: row =>row.warning,
            sortable: true
        },
        {
            name: "Next date",
            selector: row =>row.next_date,
            sortable: true
        },
        {
            name: "Maintenance Note",
            selector: row =>row.maintenence_note,
            sortable: true
        },
        {
            name: "Total Engine hours",
            selector: row =>row.total_engine_hours,
            sortable: true
        },
        {
            name: "Total Flying Hours",
            selector: row =>row.total_engine_hours,
            sortable: true
        }
    ];

    return (
        <div>
            <h3>Manage Maintenance Records</h3>
            <DataTable
                columns={columns}
                data={maintenanceRecords}
                pagination
                progressPending={loading}
                noHeader
                striped
                highlightOnHover
            />
        </div>
    );
}

export default ManageMaintenanceRecord;