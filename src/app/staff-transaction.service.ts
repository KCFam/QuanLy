import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

const staffTransactionFBCollection: string = 'StaffTransactions';

@Injectable({
  providedIn: 'root'
})
export class StaffTransactionService {
  constructor(private db: AngularFirestore) { }

  public getStaffTransactionModels() {
    return this.db.collection(staffTransactionFBCollection).snapshotChanges();
  }

  public getStaffTransactionModel(ID: string) {
    return this.db.collection(ID).ref.get();
  }

  public createStaffTransactionModel(staffTransactionModel: StaffTransactionFBModel) {
    delete staffTransactionModel.ID;
    this.db.collection(staffTransactionFBCollection).add(staffTransactionModel)
      .then(function (docRef) {
        console.log("Staffs Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Staffs Error adding document: ", error);
      });
  }

  updateStaffModel(staffTransactionModel: StaffTransactionFBModel) {
    this.db.collection(staffTransactionFBCollection).doc(staffTransactionModel.ID).update(staffTransactionModel).then(function () {
      console.log("Document successfully updated!");
    }).catch(function (error) {
      console.error("Error updating document: ", error);
    });
  }

  public deleteStaffModel(staffTransactionModel: StaffTransactionFBModel) {
    this.db.collection(staffTransactionFBCollection).doc(staffTransactionModel.ID).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }
}

export interface StaffTransactionFBModel {
  ID: string;
  ReceivedDate: Date;
  ReturnedDate: Date;
  StaffID: string;
  ReceivedItem: string;
  NumberLinesReturned: Number;
  Salary: Number;
  Note: string;
  Total: Number;
  Signature: any;
  LashType: string;
}

export interface StaffTransactionModel extends StaffTransactionFBModel {
  StaffName: string;
}