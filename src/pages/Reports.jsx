import { useState, useEffect } from 'react';
import {
    Box, Typography, Card, CardContent, Table, TableBody,
    TableCell, TableHead, TableRow, Chip, TextField,
    Button, Stack, Divider
} from '@mui/material';
import { Search, PictureAsPdf, GridOn } from '@mui/icons-material';

const Reports = () => {
    const [activities, setActivities] = useState([]);
    const [filter, setFilter] = useState('');
    const [dateRange, setDateRange] = useState({
        start: '',
        end: ''
    });

    useEffect(() => {
        // Load activities from localStorage or API
        const requests = JSON.parse(localStorage.getItem('requests')) || [];
        const userActivities = processActivities(requests);
        setActivities(userActivities);
    }, []);

    const processActivities = (requests) => {
        // Transform request data into activity log
        return requests.flatMap(request => [
            {
                id: `${request.id}-submitted`,
                user: request.submittedBy || 'Unknown User',
                action: 'Submitted request',
                type: request.type,
                date: request.date,
                status: request.status
            },
            ...(request.status !== 'Pending' ? [{
                id: `${request.id}-processed`,
                user: 'Approver',
                action: `${request.status} request`,
                type: request.type,
                date: new Date().toISOString(),
                status: request.status
            }] : [])
        ]).sort((a, b) => new Date(b.date) - new Date(a.date));
    };

    const filteredActivities = activities.filter(activity => {
        const matchesSearch = activity.user.toLowerCase().includes(filter.toLowerCase()) ||
            activity.type.toLowerCase().includes(filter.toLowerCase());
        const matchesDate = (!dateRange.start || new Date(activity.date) >= new Date(dateRange.start)) &&
            (!dateRange.end || new Date(activity.date) <= new Date(dateRange.end));
        return matchesSearch && matchesDate;
    });

    const handleExport = (format) => {
        console.log(`Exporting to ${format}`, filteredActivities);
        // Implement actual export logic here
        alert(`Exporting ${filteredActivities.length} records to ${format}`);
    };

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" gutterBottom>Activity Report</Typography>

            {/* Filters */}
            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <TextField
                            label="Search user or type"
                            variant="outlined"
                            size="small"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            InputProps={{
                                startAdornment: <Search sx={{ mr: 1, color: 'action.active' }} />
                            }}
                        />
                        <TextField
                            label="Start Date"
                            type="date"
                            size="small"
                            InputLabelProps={{ shrink: true }}
                            value={dateRange.start}
                            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                        />
                        <TextField
                            label="End Date"
                            type="date"
                            size="small"
                            InputLabelProps={{ shrink: true }}
                            value={dateRange.end}
                            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                        />
                        <Divider orientation="vertical" flexItem />
                        <Button
                            variant="outlined"
                            startIcon={<PictureAsPdf />}
                            onClick={() => handleExport('PDF')}
                        >
                            PDF
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<GridOn />}
                            onClick={() => handleExport('CSV')}
                        >
                            CSV
                        </Button>
                    </Stack>
                </CardContent>
            </Card>

            {/* Activity Table */}
            <Card>
                <CardContent>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>User</TableCell>
                                <TableCell>Action</TableCell>
                                <TableCell>Request Type</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredActivities.length > 0 ? (
                                filteredActivities.map((activity) => (
                                    <TableRow key={activity.id}>
                                        <TableCell>{activity.user}</TableCell>
                                        <TableCell>{activity.action}</TableCell>
                                        <TableCell>{activity.type}</TableCell>
                                        <TableCell>{new Date(activity.date).toLocaleString()}</TableCell>
                                        <TableCell>
                                            <Chip
                                                label={activity.status}
                                                size="small"
                                                color={
                                                    activity.status === 'Approved' ? 'success' :
                                                        activity.status === 'Rejected' ? 'error' : 'default'
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5} align="center">
                                        No activities found
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Reports;