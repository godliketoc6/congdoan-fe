import React, { useState } from 'react';
import { Table, Input, Select, Button, Checkbox, Modal, Popconfirm, Popover } from 'antd';
import 'antd/dist/antd.css';
import * as XLSX from 'xlsx';

const { Column } = Table;
const { Option } = Select;

interface DataItem {
  [key: string]: any;
  fullName: string;
  province: string;
  joinDate: string;
  hometown: string;
  gender: string;
  birthDate: string;
  department: string;
  status: string;
  verify: boolean;
}

const initialData: DataItem[] = [
  {
    fullName: 'John Doe',
    province: 'California',
    joinDate: '2023-01-01',
    hometown: 'New York',
    gender: 'Male',
    birthDate: '1990-01-01',
    department: 'HR',
    status: 'Working',
    verify: false,
  },
  {
    fullName: 'Jane Smith',
    province: 'Texas',
    joinDate: '2022-11-15',
    hometown: 'Chicago',
    gender: 'Female',
    birthDate: '1985-04-20',
    department: 'Marketing',
    status: 'Working',
    verify: true,
  },
  {
    fullName: 'Bob Johnson',
    province: 'Florida',
    joinDate: '2021-07-10',
    hometown: 'Miami',
    gender: 'Male',
    birthDate: '1982-09-05',
    department: 'IT',
    status: 'Working',
    verify: true,
  },
  // Add more data items here
  // ...
  {
    fullName: 'Alicia Martinez',
    province: 'Arizona',
    joinDate: '2023-02-28',
    hometown: 'Phoenix',
    gender: 'Female',
    birthDate: '1995-12-03',
    department: 'Finance',
    status: 'Working',
    verify: false,
  },
  {
    fullName: 'David Brown',
    province: 'Colorado',
    joinDate: '2022-09-20',
    hometown: 'Denver',
    gender: 'Male',
    birthDate: '1988-06-15',
    department: 'Sales',
    status: 'Working',
    verify: true,
  },
  {
    fullName: 'Linda Wilson',
    province: 'Nevada',
    joinDate: '2022-04-05',
    hometown: 'Las Vegas',
    gender: 'Female',
    birthDate: '1979-03-10',
    department: 'Operations',
    status: 'Working',
    verify: false,
  },
  {
    fullName: 'Michael Lee',
    province: 'Washington',
    joinDate: '2021-12-10',
    hometown: 'Seattle',
    gender: 'Male',
    birthDate: '1983-11-25',
    department: 'Engineering',
    status: 'Working',
    verify: true,
  },
];
//sau cai salt k can them
//tao const data nhan vien

const TableForm: React.FC = () => {
  const [tableData, setTableData] = useState<DataItem[]>(initialData);
  const [activeField, setActiveField] = useState<{ field: string | null; rowIndex: number | null }>({
    field: null,
    rowIndex: null,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [addColModalVisible, setAddColModalVisible] = useState(false);
  const [deleteColModalVisible, setDeleteColModalVisible] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);

  const [newColumnName, setNewColumnName] = useState('');

  const handleAddRow = () => {
    const newRow: DataItem = {
      fullName: '',
      province: '',
      joinDate: '',
      hometown: '',
      gender: '',
      birthDate: '',
      department: '',
      status: 'Working',
      verify: false,
    };
    setTableData([...tableData, newRow]);
  };

  const handleEditField = (field: string, rowIndex: number) => {
    const data = tableData[rowIndex];
    if (!data.verify) {
      setActiveField({ field, rowIndex });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string, rowIndex: number) => {
    if (tableData[rowIndex].verify) {
      return;
    }
    const updatedData = [...tableData];
    (updatedData[rowIndex] as any)[fieldName] = e.target.value;
    setTableData(updatedData);
  };

  const handleStatusChange = (value: string, rowIndex: number) => {
    if (tableData[rowIndex].verify) {
      return;
    }
    const updatedData = [...tableData];
    (updatedData[rowIndex] as any)['status'] = value;
    setTableData(updatedData);
  };

  const handleVerifyChange = (checked: boolean, rowIndex: number) => {
    const updatedData = [...tableData];
    (updatedData[rowIndex] as any)['verify'] = checked;
    setTableData(updatedData);
  };

  const showExportModal = () => {
    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'EmployeeData');
    const fileData = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    const blob = new Blob([fileData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'employee_data.xlsx';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const showAddColumnModal = () => {
    setAddColModalVisible(true);
  };

  const handleAddColumn = () => {
    if (newColumnName) {
      // Add a new column to the table
      const updatedData = [...tableData];
      updatedData.forEach((item: DataItem) => {
        item[newColumnName] = '';
      });
      setTableData(updatedData);

      setAddColModalVisible(false);
      setNewColumnName('');
    }
  };

  const showDeleteColumnModal = () => {
    setDeleteColModalVisible(true);
  };

  const handleDeleteColumns = () => {
    // Remove selected columns from the table data
    const updatedData = [...tableData];
    updatedData.forEach((item) => {
      selectedColumns.forEach((column) => {
        delete item[column];
      });
    });

    setTableData(updatedData);
    setDeleteColModalVisible(false);
    setSelectedColumns([]);
  };

  const getColumnOptions = () => {
    const columns = Object.keys(tableData[0]);
    return columns.map((column) => (
      <Checkbox
        key={column}
        checked={selectedColumns.includes(column)}
        onChange={(e) => handleColumnSelectChange(column, e.target.checked)}
      >
        {column}
      </Checkbox>
    ));
  };

  const handleColumnSelectChange = (column: string, checked: boolean) => {
    if (checked) {
      setSelectedColumns([...selectedColumns, column]);
    } else {
      setSelectedColumns(selectedColumns.filter((col) => col !== column));
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className='text-lg'>Employee</h1>
        <div>
          <Button type="primary" onClick={handleAddRow} style={{ marginRight: 16 }}>
            Add Row
          </Button>
          <Button type="default" onClick={() => setModalVisible(true)} style={{ marginRight: 16 }}>
            Advance
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <table className="w-full table-fixed border text-center">
          <thead>
            <tr className="bg-gray-200">
              {Object.keys(tableData[0]).map((key) => (
                <th key={key} className="px-4 py-2">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, rowIndex) => (
              <tr key={rowIndex} className="bg-white hover-bg-gray-100">
                {Object.keys(data).map((key) => (
                  <td
                    key={key}
                    className="px-4 py-2"
                    onClick={() => {
                      handleEditField(key, rowIndex);
                    }}
                  >
                    {key === 'status' ? (
                      <Select
                        className="w-32"
                        value={data[key]}
                        onChange={(value) => handleStatusChange(value, rowIndex)}
                        disabled={data.verify}
                      >
                        <Option value="Working">Working</Option>
                        <Option value="Offline">Offline</Option>
                      </Select>
                    ) : key === 'verify' ? (
                      <Checkbox
                        checked={data[key]}
                        onChange={(e) => handleVerifyChange(e.target.checked, rowIndex)}
                      />
                    ) : activeField.field === key && activeField.rowIndex === rowIndex ? (
                      <Input
                        className="w-32"
                        value={data[key]}
                        onChange={(e) => handleInputChange(e, key, rowIndex)}
                      />
                    ) : (
                      data[key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        title="Advance Options"
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        <Button onClick={showExportModal}>Export</Button>
        <Button onClick={showAddColumnModal}>Add Column</Button>
          <Button onClick={showDeleteColumnModal}>Delete Column</Button>
      </Modal>
      <Modal
        title="Add Column"
        visible={addColModalVisible}
        onOk={handleAddColumn}
        onCancel={() => setAddColModalVisible(false)}
      >
        <Input
          placeholder="Column Name"
          value={newColumnName}
          onChange={(e) => setNewColumnName(e.target.value)}
        />
      </Modal>
      <Modal
        title="Delete Columns"
        visible={deleteColModalVisible}
        onOk={handleDeleteColumns}
        onCancel={() => setDeleteColModalVisible(false)}
      >
        <div>
          <p>Select columns to delete:</p>
          <Checkbox.Group>{getColumnOptions()}</Checkbox.Group>
        </div>
      </Modal>
    </div>
  );
};

export default TableForm;