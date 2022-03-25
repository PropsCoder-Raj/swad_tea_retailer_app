import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public _headers: any;

  constructor(public http: HttpClient, public userS: UserService, public authS: AuthService) {
    this._headers = { 'Content-Type': 'application/json' };
  }

  /*********************************   File Handling   ***********************************/

  uploadFile(filedata: any) {
    return this.http.post<any>(`${environment.baseURL}/upload/`, filedata)
      .pipe(map(data => {
        return data;
      }));
  }

  downloadFile(filename: any) {
    return this.http.get<any>(`${environment.baseURL}/retrieve/` + filename).subscribe(data => {
      console.log(data);
    });
  }



  /*********************************   Designation   ***********************************/

  // Create Designation
  createDesignation(designation: any, status: any) {
    const data = JSON.stringify({
      "designation": designation,
      "status": status
    });
    return this.http.post<any>(`${environment.baseURL}/designation`, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Update Designation
  updateDesignation(designation: any, status: any, id: any) {
    const data = JSON.stringify({
      "designation": designation,
      "status": status
    });
    return this.http.put<any>(`${environment.baseURL}/designation/` + id, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Update Designation Status
  updateDesignationStatus(status: any, id: any) {
    const data = JSON.stringify({
      "status": status
    });
    return this.http.put<any>(`${environment.baseURL}/designation-status/` + id, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Get All Designation
  getAllDesignation() {
    return this.http.get<any>(`${environment.baseURL}/designation`)
      .pipe(map(data => {
        return data;
      }));
  }

  // Get Single Designation
  getSingleDesignation(id: any) {
    return this.http.get<any>(`${environment.baseURL}/designation/` + id)
      .pipe(map(data => {
        return data;
      }));
  }

  // Delete Designation
  deleteDesignation(id: any) {
    return this.http.delete<any>(`${environment.baseURL}/designation/` + id)
      .pipe(map(data => {
        return data;
      }));
  }



  /*********************************   Area Master   ***********************************/

  // Create AreaMaster
  createAreaMaster(areaName: any, state: any, district: any, city: any, prospectSale: any, status: any) {
    const data = JSON.stringify({
      "areaName": areaName,
      "state": state,
      "district": district,
      "city": city,
      "prospectSale": prospectSale,
      "status": status
    });
    return this.http.post<any>(`${environment.baseURL}/area`, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Update AreaMaster
  updateAreaMaster(areaName: any, state: any, district: any, city: any, prospectSale: any, status: any, id: any) {
    const data = JSON.stringify({
      "areaName": areaName,
      "state": state,
      "district": district,
      "city": city,
      "prospectSale": prospectSale,
      "status": status
    });
    return this.http.put<any>(`${environment.baseURL}/area/` + id, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Update AreaMaster Status
  updateAreaMasterStatus(status: any, id: any) {
    const data = JSON.stringify({
      "status": status
    });
    return this.http.put<any>(`${environment.baseURL}/area-status/` + id, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Get All AreaMaster
  getAllAreaMaster() {
    return this.http.get<any>(`${environment.baseURL}/area`)
      .pipe(map(data => {
        return data;
      }));
  }

  // Get Single AreaMaster
  getSingleAreaMaster(id: any) {
    return this.http.get<any>(`${environment.baseURL}/area/` + id)
      .pipe(map(data => {
        return data;
      }));
  }

  // Delete AreaMaster
  deleteAreaMaster(id: any) {
    return this.http.delete<any>(`${environment.baseURL}/area/` + id)
      .pipe(map(data => {
        return data;
      }));
  }



  /*********************************   PolicyMaster   ***********************************/

  // Create PolicyMaster
  createPolicyMaster(salesTeamIncentive: any, salesTeamTarget: any, birthDayOfferIncentive: any, retailerIncentive: any, retailerTarget: any, retailerFreeTEA: any, retailerBirthDayOfferIncentive: any) {
    const data = JSON.stringify({
      "salesTeamIncentive": salesTeamIncentive,
      "salesTeamTarget": salesTeamTarget,
      "birthDayOfferIncentive": birthDayOfferIncentive,
      "retailerIncentive": retailerIncentive,
      "retailerTarget": retailerTarget,
      "retailerFreeTEA": retailerFreeTEA,
      "retailerBirthDayOfferIncentive": retailerBirthDayOfferIncentive
    });
    return this.http.post<any>(`${environment.baseURL}/policy`, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Update PolicyMaster
  updatePolicyMaster(salesTeamIncentive: any, salesTeamTarget: any, birthDayOfferIncentive: any, retailerIncentive: any, retailerTarget: any, retailerFreeTEA: any, retailerBirthDayOfferIncentive: any, id: any) {
    const data = JSON.stringify({
      "salesTeamIncentive": salesTeamIncentive,
      "salesTeamTarget": salesTeamTarget,
      "birthDayOfferIncentive": birthDayOfferIncentive,
      "retailerIncentive": retailerIncentive,
      "retailerTarget": retailerTarget,
      "retailerFreeTEA": retailerFreeTEA,
      "retailerBirthDayOfferIncentive": retailerBirthDayOfferIncentive
    });
    return this.http.put<any>(`${environment.baseURL}/policy/` + id, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Get All PolicyMaster
  getAllPolicyMaster() {
    return this.http.get<any>(`${environment.baseURL}/policy`)
      .pipe(map(data => {
        return data;
      }));
  }

  // Get Single PolicyMaster
  getSinglePolicyMaster(id: any) {
    return this.http.get<any>(`${environment.baseURL}/policy/` + id)
      .pipe(map(data => {
        return data;
      }));
  }

  // Delete PolicyMaster
  deletePolicyMaster(id: any) {
    return this.http.delete<any>(`${environment.baseURL}/policy/` + id)
      .pipe(map(data => {
        return data;
      }));
  }


  /*********************************   ProductMaster   ***********************************/

  // Create ProductMaster
  createProductMaster(productCode: any, productName: any, productHindiName: any, tag: any, uom: any, brand: any, group: any, size: any, hsnNo: any, stdSize: any) {
    const data = JSON.stringify({
      "productCode": productCode,
      "productName": productName,
      "productHindiName": productHindiName,
      "tag": tag,
      "uom": uom,
      "brand": brand,
      "group": group,
      "size": size,
      "hsnNo": hsnNo,
      "stdSize": stdSize
    });
    return this.http.post<any>(`${environment.baseURL}/product`, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }


  // Update ProductMaster
  updateProductMaster(productCode: any, productName: any, productHindiName: any, tag: any, uom: any, brand: any, group: any, size: any, hsnNo: any, stdSize: any, id: any) {
    const data = JSON.stringify({
      "productCode": productCode,
      "productName": productName,
      "productHindiName": productHindiName,
      "tag": tag,
      "uom": uom,
      "brand": brand,
      "group": group,
      "size": size,
      "hsnNo": hsnNo,
      "stdSize": stdSize
    });
    return this.http.put<any>(`${environment.baseURL}/product/` + id, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Update ProductMaster
  updateProductPrice(mrp: any, discount: any, retailerRate: any, id: any) {
    const data = JSON.stringify({
      "mrp": mrp,
      "discount": discount,
      "retailerRate": retailerRate
    });
    return this.http.put<any>(`${environment.baseURL}/productprice/` + id, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Get All ProductMaster
  getAllProductMaster() {
    return this.http.get<any>(`${environment.baseURL}/product`)
      .pipe(map(data => {
        return data;
      }));
  }

  // Get Single ProductMaster
  getSingleProductMaster(id: any) {
    return this.http.get<any>(`${environment.baseURL}/product/` + id)
      .pipe(map(data => {
        return data;
      }));
  }

  // Delete ProductMaster
  deleteProductMaster(id: any) {
    return this.http.delete<any>(`${environment.baseURL}/product/` + id)
      .pipe(map(data => {
        return data;
      }));
  }



  /*********************************   ProductPriceMaster   ***********************************/

  // Create ProductPriceMaster
  createProductPriceMaster(productCode: any, productName: any, uom: any, stdSize: any, mrp: any, discount: any, retailerRate: any, productId: any) {
    const data = JSON.stringify({
      "productCode": productCode,
      "productName": productName,
      "uom": uom,
      "stdSize": stdSize,
      "mrp": mrp,
      "discount": discount,
      "retailerRate": retailerRate
    });
    return this.http.post<any>(`${environment.baseURL}/productprice/` + productId, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Update ProductPriceMaster
  updateProductPriceMaster(productCode: any, productName: any, uom: any, stdSize: any, mrp: any, discount: any, retailerRate: any, productId: any, id: any) {
    const data = JSON.stringify({
      "productCode": productCode,
      "productName": productName,
      "uom": uom,
      "stdSize": stdSize,
      "mrp": mrp,
      "discount": discount,
      "retailerRate": retailerRate
    });
    return this.http.put<any>(`${environment.baseURL}/productprice/` + productId + `/` + id, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Get All ProductPriceMaster
  getAllProductPriceMaster() {
    return this.http.get<any>(`${environment.baseURL}/productprice`)
      .pipe(map(data => {
        return data;
      }));
  }

  // Get Single ProductPriceMaster
  getSingleProductPriceMaster(id: any) {
    return this.http.get<any>(`${environment.baseURL}/productprice/` + id)
      .pipe(map(data => {
        return data;
      }));
  }

  // Delete ProductPriceMaster
  deleteProductPriceMaster(id: any) {
    return this.http.delete<any>(`${environment.baseURL}/productprice/` + id)
      .pipe(map(data => {
        return data;
      }));
  }



  /*********************************   EmployeeMaster   ***********************************/

  // Create EmployeeMaster
  createEmployeeMaster(anniversaryDate: any, dateOfJoning: any, designation: any, reportingTo: any, alloatedArea: any, blackoutArea: any, remark: any, targetInKg: any, incentive: any, name: any, email: any, password: any, userID: any, address: any, state: any, city: any, mobileNo: any, areaOfExpertise: any, gender: any, birthDate: any, referenceDetails: any, aadharCard: any, status: any, document: any, photo: any) {
    const data = JSON.stringify({
      anniversaryDate: anniversaryDate,
      dateOfJoning: dateOfJoning,
      designation: designation,
      reportingTo: reportingTo,
      alloatedArea: alloatedArea,
      blackoutArea: blackoutArea,
      remark: remark,
      targetInKg: targetInKg,
      incentive: incentive,
      name: name,
      email: email,
      password: password,
      userId: userID,
      address: address,
      state: state,
      city: city,
      mobileNo: mobileNo,
      areaOfExpertise: areaOfExpertise,
      gender: gender,
      birthDate: birthDate,
      referenceDetails: referenceDetails,
      aadharCard: aadharCard,
      status: status,
      document: document,
      photo: photo,
      roles: ["employees"]
    });
    return this.http.post<any>(`${environment.baseURL}/employee`, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Update EmployeeMaster
  updateEmployeeMaster(anniversaryDate: any, dateOfJoning: any, designation: any, reportingTo: any, alloatedArea: any, blackoutArea: any, remark: any, targetInKg: any, incentive: any, name: any, email: any, _uid: any, userID: any, address: any, state: any, city: any, mobileNo: any, areaOfExpertise: any, gender: any, birthDate: any, referenceDetails: any, aadharCard: any, status: any, document: any, photo: any, id: any) {
    const data = JSON.stringify({
      anniversaryDate: anniversaryDate,
      dateOfJoning: dateOfJoning,
      designation: designation,
      reportingTo: reportingTo,
      alloatedArea: alloatedArea,
      blackoutArea: blackoutArea,
      remark: remark,
      targetInKg: targetInKg,
      incentive: incentive,
      name: name,
      email: email,
      _uid: _uid,
      userID: userID,
      address: address,
      state: state,
      city: city,
      mobileNo: mobileNo,
      areaOfExpertise: areaOfExpertise,
      gender: gender,
      birthDate: birthDate,
      referenceDetails: referenceDetails,
      aadharCard: aadharCard,
      status: status,
      document: document,
      photo: photo,
    });
    return this.http.put<any>(`${environment.baseURL}/employee/` + id, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Update updateEmployeeMasterAlloatedArea
  updateEmployeeMasterAlloatedArea(alloatedArea: any, id: any) {
    const data = JSON.stringify({
      alloatedArea: alloatedArea
    });
    return this.http.put<any>(`${environment.baseURL}/employee-alloated-area/` + id, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Update updateEmployeeMasterBlackoutArea
  updateEmployeeMasterBlackoutArea(blackoutArea: any, id: any) {
    const data = JSON.stringify({
      blackoutArea: blackoutArea
    });
    return this.http.put<any>(`${environment.baseURL}/employee-blackout-area/` + id, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Get All EmployeeMaster
  getAllEmployeeMaster() {
    return this.http.get<any>(`${environment.baseURL}/employee`)
      .pipe(map(data => {
        return data;
      }));
  }

  // Get Single EmployeeMaster
  getSingleEmployeeMaster(id: any) {
    return this.http.get<any>(`${environment.baseURL}/employee/` + id)
      .pipe(map(data => {
        return data;
      }));
  }

  // Get Single EmployeeMaster By User
  getSingleEmployeeMasterByUser(id: any) {
    return this.http.get<any>(`${environment.baseURL}/employee-by-user/` + id)
      .pipe(map(data => {
        return data;
      }));
  }

  // Delete EmployeeMaster
  deleteEmployeeMaster(id: any) {
    return this.http.delete<any>(`${environment.baseURL}/employee/` + id)
      .pipe(map(data => {
        return data;
      }));
  }


  /*********************************   RetailerMaster   ***********************************/

  // Create RetailerMaster
  createRetailerMaster(accountManager: any, srAccountManager: any, anniversaryDate: any, firmName: any, gstinNo: any, fssailicNo: any, potentialSale: any, target: any, incentive: any, discount: any, email: any, password: any, userID: any, address: any, state: any, city: any, mobileNo: any, gender: any, birthDate: any, referenceDetails: any, aadharCard: any, status: any, document: any, photo: any, selfi: any, district: any, taluka: any, contactPersonName: any, whatsappNo: any) {
    const data = JSON.stringify({
      accountManager: accountManager,
      srAccountManager: srAccountManager,
      anniversaryDate: anniversaryDate,
      firmName: firmName,
      gstinNo: gstinNo,
      fssailicNo: fssailicNo,
      potentialSale: potentialSale,
      target: target,
      incentive: incentive,
      discount: discount,
      referenceDetails: referenceDetails,
      document: document,
      selfi: selfi,
      photo: photo,
      email: email,
      password: password,
      userId: userID,
      address: address,
      district: district,
      taluka: taluka,
      contactPersonName: contactPersonName,
      state: state,
      city: city,
      mobileNo: mobileNo,
      whatsappNo: whatsappNo,
      gender: gender,
      birthDate: birthDate,
      aadharCard: aadharCard,
      status: status,
      roles: ["retailers"]
    });
    return this.http.post<any>(`${environment.baseURL}/retailer`, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Update RetailerMaster
  updateRetailerMaster(accountManager: any, srAccountManager: any, anniversaryDate: any, firmName: any, gstinNo: any, fssailicNo: any, potentialSale: any, target: any, incentive: any, discount: any, email: any, password: any, userID: any, address: any, state: any, city: any, mobileNo: any, gender: any, birthDate: any, referenceDetails: any, aadharCard: any, status: any, document: any, photo: any, selfi: any, district: any, taluka: any, contactPersonName: any, whatsappNo: any, _uid: any, id: any) {
    const data = JSON.stringify({
      accountManager: accountManager,
      srAccountManager: srAccountManager,
      anniversaryDate: anniversaryDate,
      firmName: firmName,
      gstinNo: gstinNo,
      fssailicNo: fssailicNo,
      potentialSale: potentialSale,
      target: target,
      incentive: incentive,
      discount: discount,
      referenceDetails: referenceDetails,
      document: document,
      selfi: selfi,
      photo: photo,
      email: email,
      password: password,
      userId: userID,
      address: address,
      district: district,
      taluka: taluka,
      contactPersonName: contactPersonName,
      state: state,
      city: city,
      mobileNo: mobileNo,
      whatsappNo: whatsappNo,
      gender: gender,
      birthDate: birthDate,
      aadharCard: aadharCard,
      status: status,
      _uid: _uid
    });
    return this.http.put<any>(`${environment.baseURL}/retailer/` + id, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Get All RetailerMaster
  getAllRetailerMaster() {
    return this.http.get<any>(`${environment.baseURL}/retailer`)
      .pipe(map(data => {
        return data;
      }));
  }

  // Get All RetailerMaster By Employee
  getAllRetailersByEmp() {
    return this.http.get<any>(`${environment.baseURL}/retailer-by-emp/` + this.authS.currentUserValue.id)
      .pipe(map(data => {
        return data;
      }));
  }



  // Get Single RetailerMaster
  getSingleRetailerMaster(id: any) {
    return this.http.get<any>(`${environment.baseURL}/retailer/` + id)
      .pipe(map(data => {
        return data;
      }));
  }

  // Get Single RetailerMaster By User
  getSingleRetailerMasterByUser(id: any) {
    return this.http.get<any>(`${environment.baseURL}/retailer-by-user/` + id)
      .pipe(map(data => {
        return data;
      }));
  }

  // Delete RetailerMaster
  deleteRetailerMaster(id: any) {
    return this.http.delete<any>(`${environment.baseURL}/retailer/` + id)
      .pipe(map(data => {
        return data;
      }));
  }



  /*********************************   Orders   ***********************************/

  // Get All Orders By Retailer
  getAllOrdersByRetailer(id) {
    return this.http.get<any>(`${environment.baseURL}/order-by-retailer/` + id)
      .pipe(map(data => {
        return data;
      }));
  }

  // Get All Payment Pending Orders By Retailer
  getAllPaymentPendingOrdersByRetailer(id) {
    return this.http.get<any>(`${environment.baseURL}/payment-pending-order-by-retailer/` + id)
      .pipe(map(data => {
        return data;
      }));
  }

  confirmOrder(id: any) {
    const data = JSON.stringify({
      status: "success"
    });
    return this.http.put<any>(`${environment.baseURL}/confirm-order/` + id, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  paymentSuccess(id: any, paymentId: any) {
    const data = JSON.stringify({
      status: "success",
      paymentId: paymentId
    });
    return this.http.put<any>(`${environment.baseURL}/payment-success/` + id, data, { headers: this._headers })
      .pipe(map(data => {
        return data;
      }));
  }

  // Get Single order
  getSingleOrder(id: any) {
    return this.http.get<any>(`${environment.baseURL}/order/` + id)
      .pipe(map(data => {
        return data;
      }));
  }




  // Get All Orders By Retailer
  getAllDashboardsByRetailer(id: any, month: any, year: any) {
    return this.http.get<any>(`${environment.baseURL}/dashboard-retailer-count/` + id + `/` + month + `/` + year)
      .pipe(map(data => {
        return data;
      }));
  }

  // Get All Product Pie
  getProductPie() {
    return this.http.get<any>(`${environment.baseURL}/product-pie`)
      .pipe(map(data => {
        return data;
      }));
  }

  // Get All Product Pie Month Wise
  getProductPieMonthWise(month: any, year: any) {
    return this.http.get<any>(`${environment.baseURL}/product-monthwise-pie`+ `/` + month + `/` + year)
      .pipe(map(data => {
        return data;
      }));
  }


  // Get All Orders By Retailer
  getMonthDashboardsByRetailer(id: any) {
    return this.http.get<any>(`${environment.baseURL}/month-dashboard-count-retailer/` + id)
      .pipe(map(data => {
        return data;
      }));
  }



  // Get Role
  getAllRole() {
    return this.http.get<any>(`${environment.baseURL}/role-all/`)
      .pipe(map(data => {
        return data;
      }));
  }

}
