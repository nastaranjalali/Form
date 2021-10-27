interface BasicDetails {
  name: string
  persianName: string
  propertyCode: string
  city: string
  resourceType: string
  website: string
  description: string
  persianDescription: string
}
interface AddressDetails {
  country: string
  cityAddress: string
  post: string
  address: string
  persianAddress: string
}
interface ContactDetails {
  generalEmail: string
  bookingEmail: string
  bookingFailEmail: string
  generalPhone: string
  bookingFailPhone: string
  generalFax: string
  confirmationFax: string
}
interface WBSDetails {
  WBS: boolean
}
interface PMSDetails {
  PMS: boolean
}
interface InventoryAndBooking {
  currencies: string
  bookingTimeOut: string
  acceptFullExport: boolean
  manualARR: boolean
}
export interface MyFormValues
  extends BasicDetails,
    ContactDetails,
    AddressDetails,
    WBSDetails,
    PMSDetails,
    InventoryAndBooking {}
export const initialValues: MyFormValues = {
  name: '',
  persianName: '',
  propertyCode: '',
  city: '',
  resourceType: '',
  website: '',
  description: '',
  persianDescription: '',
  country: '',
  cityAddress: '',
  post: '',
  address: '',
  persianAddress: '',
  generalEmail: '',
  bookingEmail: '',
  bookingFailEmail: '',
  generalPhone: '',
  bookingFailPhone: '',
  generalFax: '',
  confirmationFax: '',
  WBS: false,
  PMS: false,
  currencies: '',
  bookingTimeOut: '',
  acceptFullExport: false,
  manualARR: false
}
