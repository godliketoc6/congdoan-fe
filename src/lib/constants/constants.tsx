import { 
IconHome2, IconClipboardList, IconClipboardTypography, IconChecklist, IconAccessible, IconChartPie,IconLogout
} from '@tabler/icons-react';

export const sidebar_link = [
	{
		key: 'trang chủ',
		label: 'Trang chủ',
		path: '/',
		icon: <IconHome2 />
	},
	{
		key: 'sự kiện',
		label: 'Sự kiện',
		path: '/danhsachsukien',
		icon: <IconClipboardList />
	},
	{
		key: 'tạo sự kiện',
		label: 'Tạo sự kiện',
		path: '/taosukien',
		icon: <IconClipboardTypography />
	},
	{
		key: 'danh sách đăng kí',
		label: 'Danh sách đăng kí',
		path: '/danhsachdangki',
		icon: <IconChecklist />
	},
	{
		key: 'nhân viên',
		label: 'Nhân viên',
		path: '/nhanvien',
		icon: <IconAccessible />
	},
	{
		key: 'biểu đồ nhân viên',
		label: 'Biểu đồ nhân viên',
		path: '/bieudonhanvien',
		icon: <IconChartPie />
	}
]

export const employee_sidebar_link = [
	{
		key: 'trang chủ',
		label: 'Trang chủ',
		path: '/',
		icon: <IconHome2 />
	},
	{
		key: 'sự kiện',
		label: 'Sự kiện',
		path: '/danhsachsukien',
		icon: <IconClipboardList />
	},
	{
		key: 'nhân viên',
		label: 'Nhân viên',
		path: '/nhanvien',
		icon: <IconAccessible />
	}
]

export const user_sidebar_link = [
	{
		key: 'sự kiện',
		label: 'Sự kiện',
		path: '/danhsachsukien',
		icon: <IconClipboardList />
	},
	{
		key: 'thông Tin Cá Nhân',
		label: ' Thông Tin Cá Nhân',
		path: '/nhanvien',
		icon: <IconAccessible />
	}
]

export const subadmin_sidebar_link = [
	{
		key: 'sự kiện',
		label: 'Sự kiện',
		path: '/danhsachsukien',
		icon: <IconClipboardList />
	}
]

