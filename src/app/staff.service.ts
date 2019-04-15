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
  staffModules: Observable<StaffModel[]>

  constructor(private db: AngularFirestore) {
  }

  public getStaffModels() {
    return this.db.collection(staffFBCollection).snapshotChanges();
  }

  public createStaffModel(staffModel: StaffModel) {
    delete staffModel.ID;
    this.db.collection(staffFBCollection).add(staffModel)
      .then(function (docRef) {
        console.log("Staffs Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Staffs Error adding document: ", error);
      });
  }

  updateStaffModel(staffModel: StaffModel) {
    this.db.collection(staffFBCollection).doc(staffModel.ID).update(staffModel).then(function () {
      console.log("Document successfully updated!");
    }).catch(function (error) {
      console.error("Error updating document: ", error);
    });
  }

  public deleteStaffModel(staffModel: StaffModel) {
    this.db.collection(staffFBCollection).doc(staffModel.ID).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }
}

export interface StaffModel {
  ID: string;
  Address: string;
  Credit: Number;
  Name: string;
  Phone: string;
  Note: string;
}