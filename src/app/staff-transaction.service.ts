import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

const staffTransactionFBCollection: string = 'StaffTransactions';

@Injectable({
  providedIn: 'root'
})
export class StaffTransactionService {
  constructor(private db: AngularFirestore) { }

  public getStaffTransactionModels() {
    console.log(this.db.collection("Staffs/H0y1JxAeafCUTepjGvIY"));
    return this.db.collection(staffTransactionFBCollection).snapshotChanges();
  }

  public getStaffTransactionModel(ID: string) {
    return this.db.collection(staffTransactionFBCollection).doc(ID).ref.get();
  }

  public createStaffTransactionModel(staffTransactionModel: StaffTransactionModel) {
    delete staffTransactionModel.ID;
    this.db.collection(staffTransactionFBCollection).add(staffTransactionModel)
      .then(function (docRef) {
        console.log("Staffs Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Staffs Error adding document: ", error);
      });
  }

  updateStaffModel(staffTransactionModel: StaffTransactionModel) {
    this.db.collection(staffTransactionFBCollection).doc(staffTransactionModel.ID).update(staffTransactionModel).then(function () {
      console.log("Document successfully updated!");
    }).catch(function (error) {
      console.error("Error updating document: ", error);
    });
  }

  public deleteStaffModel(staffTransactionModel: StaffTransactionModel) {
    this.db.collection(staffTransactionFBCollection).doc(staffTransactionModel.ID).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }
}

export interface StaffTransactionModel {
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