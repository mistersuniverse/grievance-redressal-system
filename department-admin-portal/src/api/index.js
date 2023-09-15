import axios from 'axios';

const API = axios.create({baseURL: import.meta.env.VITE_REACT_APP_PRODUCTION_URL});

export const fetchComplaintsByDepartment = (departmentID) => API.get(`/api/v1/department/${departmentID}/admin/dashboard/complaints`);
export const fetchComplaintsCountByDepartment = (departmentID) => API.get(`/api/v1/department/${departmentID}/admin/dashboard/complaints/count`)
export const fetchComplaintsByDepartmentAndStatus = (departmentID, status) => API.get(`/api/v1/department/${departmentID}/admin/dashboard/complaints?status=${status}`)

export const login = (formData) => API.post('/api/v1/department/auth/admin/login', formData);
export const register = (formData) => API.post('/api/v1/department/auth/admin/register', formData);