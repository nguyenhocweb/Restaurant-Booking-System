export interface BrandCardType {
  id: string;
  name: string;
  description?: string;
  imageMain: string;
  logo?: string; // VD: "AS", "LA", "VI" trong vòng tròn

}
export interface BrandCardResponseType{
  data:BrandCardType[],
  total:number
}