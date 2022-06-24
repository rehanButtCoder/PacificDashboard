import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { getPayments } from '../Services/Payment';

const Payment = () => {

    const customStyles = {
        headCells: {
            style: {
                fontSize: '14px',
                fontWeight: '400',
                color: '#B1B1B1',
                backgroundColor: '#07396C'
            },
        },
        cells: {
            style: {
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '400',
                backgroundColor: '#04305D'
                , paddingBottom: '20px'
            },
        },
        headRow: {
            style: {
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '400',
                border: 'none !important',
                // paddingBottom : '15px'
            },
        },
    };
    const columns = [
        {
            name: 'Payment ID',
            selector: row => row.transactionNumber,
            // width : '335px',

        },
        {
            name: 'Amount',
            selector: row => row.payment,
            // width : '20%',

        },
        {
            name: 'Date',
            selector: row => row.createdOn,
            // width : '20%',

        },
        {
            width: '20%',
            name: 'Status',
            button: true,
            cell: (row) => (
                <div>
                    <div className='user-item circle'>
                        <p>{row.status}</p>
                    </div>
                </div>
            )
        },
        {
            name: 'Action',
            button: true,
            cell: (row) => (
                <div>
                    <div className='user-item'>
                        <img src="/assets/images/More.svg" alt="" />
                    </div>
                </div>
            )
        }
    ];

    const [paymentdata, setPaymentData] = useState()
    const getPayment = async () => {
        const resp = await getPayments();
        setPaymentData(resp.data.data)
        console.log(resp.data.data)
    }

    useEffect(() => {
        getPayment()
    }, [])

    return (
        <div className="dashboard-user side_dashboard_container">
            <div className="row">
                <div className="col-md-12">
                    <div className="dashboardHeading setting">
                        <h2>Manage Payment</h2>
                    </div>

                </div>
            </div>
            <div className="users-table">
                <div className="users-table-container">
                    <div className="user-table-head">
                        <div className="userHeading">
                            <h2>Payment Lists</h2>
                        </div>
                        <div className="user-table-filter">
                            <img src="/assets/images/Filter Icon.png" alt="" />
                            <span className="filter">Filter</span>
                        </div>
                    </div>
                    <div className='user-table-body'>
                        <DataTable
                            columns={columns}
                            data={paymentdata}
                            customStyles={customStyles}
                            pagination
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;