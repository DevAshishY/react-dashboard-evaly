import LinkInterface from "../interfaces/linkInterface";
import { TbSmartHome } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
import { HiOutlineTicket } from "react-icons/hi";
import { TbCircleSquare } from "react-icons/tb";
import { LuFileText } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { FiBox } from "react-icons/fi";
import { LuUserCircle2 } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import TabInterface from "../interfaces/tabInterface";

export const LinkList: LinkInterface[] = [
    {
        name: "Main menu", nav: [
            { navName: "Dashboard", icons: TbSmartHome,link:'' },
            { navName: "Order Management", icons: AiOutlineShoppingCart,link:'order' },
            { navName: "Customers", icons: TbUsers,link:'customers' },
            { navName: "Coupon Code", icons: HiOutlineTicket,link:'coupon-code' },
            { navName: "Categories", icons: TbCircleSquare,link:'categories' },
            { navName: "Transaction", icons: LuFileText,link:'transaction' },
            { navName: "Brand", icons: CiStar,link:'brand' },
        ]
    },

    {
        name: "PRODUCTS", nav: [
            { navName: "Add Products", icons: CiCirclePlus,link:'add-products' },
            { navName: "Product List", icons: FiBox,link:'products-list' },

        ]
    },

    {
        name: "ADMIN", nav: [
            { navName: "Manage Admins", icons: LuUserCircle2,link:'manage-admin' },
            { navName: "Admin Roles", icons: IoSettingsOutline,link:'admin-roles' },

        ]
    },
];


export const tabList: TabInterface[] = [
    {
        name: 'Pending'
    },
    {
        name: 'Confirmed'
    },
    {
        name: 'Processing'
    },
    {
        name: 'Picked'
    },
    {
        name: 'Shipped'
    },
    {
        name: 'Delivered'
    },
    {
        name: 'Cancelled'
    },



];

export const options = [
    {
      name: "Pending",
    
    },
    {
      name:'Confirmed'
    },
    {
      name:'Picked'
    }
  ];
  
  export  const filterData = [
    {
      name: "Filter by date range",
    
    },
    {
      name:'Filter by Price'
    },
    
  ];


export const TabularData = {
    "columns": ["Order id", "Created", "Customer", "Total", "Profit", "Status", ""],
    "orders": [
        {
            "orderId": 6548,
            "created": "2 min ago",
            "customer": "Joseph Wheeler",
            "total": "$654",
            "profit": {
                "amount": "$154",
                "percentage": "16%"
            },
            "status": "Pending"
        },
        {
            "orderId": 7549,
            "created": "5 min ago",
            "customer": "Emily Johnson",
            "total": "$850",
            "profit": {
                "amount": "$250",
                "percentage": "20%"
            },
            "status": "Completed"
        },
        {
            "orderId": 8550,
            "created": "10 min ago",
            "customer": "John Smith",
            "total": "$1120",
            "profit": {
                "amount": "$320",
                "percentage": "18%"
            },
            "status": "In Progress"
        },
        {
            "orderId": 9551,
            "created": "15 min ago",
            "customer": "Alice Brown",
            "total": "$500",
            "profit": {
                "amount": "$100",
                "percentage": "20%"
            },
            "status": "Pending"
        },
        {
            "orderId": 10552,
            "created": "20 min ago",
            "customer": "David Jones",
            "total": "$720",
            "profit": {
                "amount": "$180",
                "percentage": "25%"
            },
            "status": "Completed"
        },
        {
            "orderId": 11553,
            "created": "25 min ago",
            "customer": "Sarah White",
            "total": "$930",
            "profit": {
                "amount": "$200",
                "percentage": "22%"
            },
            "status": "In Progress"
        },
        {
            "orderId": 12554,
            "created": "30 min ago",
            "customer": "Michael Taylor",
            "total": "$420",
            "profit": {
                "amount": "$80",
                "percentage": "19%"
            },
            "status": "Pending"
        },
        {
            "orderId": 13555,
            "created": "35 min ago",
            "customer": "Emma Martinez",
            "total": "$870",
            "profit": {
                "amount": "$230",
                "percentage": "26%"
            },
            "status": "Completed"
        },
        {
            "orderId": 14556,
            "created": "40 min ago",
            "customer": "William Garcia",
            "total": "$1050",
            "profit": {
                "amount": "$300",
                "percentage": "29%"
            },
            "status": "In Progress"
        },
        {
            "orderId": 15557,
            "created": "45 min ago",
            "customer": "Olivia Rodriguez",
            "total": "$630",
            "profit": {
                "amount": "$150",
                "percentage": "24%"
            },
            "status": "Pending"
        }

    ]
};