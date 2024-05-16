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
