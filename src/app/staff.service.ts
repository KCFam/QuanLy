import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { defineBase } from '@angular/core/src/render3';

const staffFBCollection: string = 'Staffs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private db: AngularFirestore) {
  }

  public getStaffModels() {
    return this.db.collection(staffFBCollection).snapshotChanges();
  }

  public getStaffModel(ID: string) {
    return this.db.collection(staffFBCollection).doc(ID).ref.get();
  }

  public createStaffModel(staffModel: StaffFBModel) {
    delete staffModel.ID;
    this.db.collection(staffFBCollection).add(staffModel)
      .then(function (docRef) {
        console.log("Staffs Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Staffs Error adding document: ", error);
      });
  }

  updateStaffModel(staffModel: StaffFBModel) {
    this.db.collection(staffFBCollection).doc(staffModel.ID).update(staffModel).then(function () {
      console.log("Document successfully updated!");
    }).catch(function (error) {
      console.error("Error updating document: ", error);
    });
  }

  public deleteStaffModel(staffModel: StaffFBModel) {
    this.db.collection(staffFBCollection).doc(staffModel.ID).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }
}

export interface StaffFBModel {
  ID: string;
  Address: string;
  Credit: Number;
  Name: string;
  Phone: string;
  Note: string;
}