import { useAPI } from "./Context/ContextAPI";


function SwitchLanguage() {
    const { currentStatus } = useAPI();

    const currentState = currentStatus.state;

    switch(currentState) {
        case 'TICKET_CREATED':
          return 'تم إنشاء الشحنة';
        case 'PACKAGE_RECEIVED':
          return 'تم استلام الشحنة من التاجر';
        case 'IN_TRANSIT':
          return 'في مرحلة الإنتقال';
        case 'NOT_YET_SHIPPED':
          return 'لم يتم شحن المنتج';
        case 'OUT_FOR_DELIVERY':
          return 'الشحنة خرجت للتسليم';
        case 'WAITING_FOR_CUSTOMER_ACTION':
          return 'في إنتظار العميل';
        case 'DELIVERED_TO_SENDER':
          return 'تم إلغاء الشحنة';
        case 'DELIVERED':
          return 'تم التوصيل';
        default:
          return 'لا توجد معلومات';
    }
}
 
export default SwitchLanguage;