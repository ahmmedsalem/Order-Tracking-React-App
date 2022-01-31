import React from 'react';
import Table from './Table';
import './TableSection.css';

const TableSection = () => {
    return ( 
        <div className="container second-section">
            <div className="right">
                <p className="title">تفاصيل الشحنة</p>
                <Table />
            </div>
            <div className="left">
                <p className="title">عنوان التسليم</p>
                <div className="destination">
                    <p>امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22</p>
                </div>
                <div className="inquires">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/illustration.jpg`} alt="inquires illustration" className="illustration" />
                    <div className="inquires-inner">
                    <p>!هل يوجد مشكلة في شحنتك؟</p>
                    <button className="btn"><a href="#">إبلاغ عن مشكلة</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default TableSection;