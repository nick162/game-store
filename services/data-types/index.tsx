export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemsTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface BanksTypesProps {
  _id: string;
  bankName: string;
  noRekening: string;
  name: string;
}

export interface PaymentsTypesProps {
  _id: string;
  type: string;
  status: string;
  banks: BanksTypesProps[];
}

export interface NominalsTypesProps {
  _id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
}

export interface CategoriesTypesProps {
  _id: string;
  name: string;
}

export interface LoginTypesProps {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
  phoneNumber: string;
}

export interface PayloadUser {
  player: UserTypes;
  iat: number;
}

export interface CheckOutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
}

export interface HistoryVoucherTypes {
  category: string;
  gameName: string;
  coinQuantity: string;
  coinName: string;
  price: number;
  thumbnail: string;
}

export interface HistoryPaymentTypes {
  bankName: string;
  noRekening:string;
  name: string;
  type: string;
}

export interface HistoryTransactionTypes {
  _id: string;
  historyVoucherTopup: HistoryVoucherTypes;
  value: number;
  status: string;
  accountUser: string;
  tax:number;
  name: string
  historyPayment: HistoryPaymentTypes;
}

export interface TopupCategoryTypes {
  _id: string;
  valeu: number;
  name: string;
}
